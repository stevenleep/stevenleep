import createRetryFetch from "./fetch";
import { useHttpStatusRetry } from "./presets";

const httpStatusRetry = createRetryFetch(fetch, {
    retries: 3,
    retryDelay: 2000,
    // 当httpStatus状态为 404 时候进行请求重试
    retryOn: useHttpStatusRetry(["404"])
});

httpStatusRetry("https://jsonplaceholder.typicode.com/post/1")
    .then(result => { console.log(result); })
    .catch(error => { console.log("[[error:]]", error); });
