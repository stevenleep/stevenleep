import { isStrictPromise } from "./type";

interface RetryOptions {
    retries: number;
    retryDelay: number;
    retryOn: (response: Response, counter: number) => boolean | Promise<boolean>;
}

export type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export default function createRetryFetch(fetch: Fetch, retryOptions: RetryOptions): Fetch {
    function interceptor(fetch: Fetch): Fetch {
        let counter = 0;
        return function newFetch(url: RequestInfo | URL, init?: RequestInit) {
            return new Promise((resolve, reject) => {
                async function getValue() {
                    // original fetch
                    const source = await fetch(url, init);

                    // retry fetch condition check
                    const isContinue = await isContinueRetry(source, retryOptions, counter);
                    if (!isContinue) {
                        resolve(source);
                        counter = 0;
                        return;
                    };

                    // 所有次数都执行完成后还是不满足条件, 直接当作错误处理
                    if (retryOptions.retries - counter === 0) {
                        reject(source);
                        return;
                    };

                    counter++;

                    // 粗暴的延时操作
                    setTimeout(() => { getValue(); }, retryOptions.retryDelay);
                };
                getValue();
            });
        };
    };
    return interceptor(fetch);
}

async function isContinueRetry(response: Response, retryOptions: RetryOptions, counter): Promise<boolean> {
    // 尝试的次数还大于执行的次数，意味着: 还需要继续尝试
    const retriesBoundary = retryOptions.retries > counter;

    const continueRetryOnResult = retryOptions.retryOn(response, counter);
    const customRetryOnResult = isStrictPromise(continueRetryOnResult) ? await continueRetryOnResult : continueRetryOnResult;

    return customRetryOnResult && retriesBoundary;
}
