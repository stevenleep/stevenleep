import createRetryFetch from "./fetch";

const supportRetriedFetch = createRetryFetch(fetch, {
    retries: 3,
    retryDelay: 2000,

    // normal: 无脑重试, 直到所有次数执行完
    retryOn: async (response: Response, counter) => {
        console.log("response --->", response, counter);
        return true;
    },
});

supportRetriedFetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(result => { console.log(result) }) // 仅当成功时才会执行这里
    .catch(error => { console.log("[[error:]]", error) }); // 失败或重试次数使用完成后依赖不通过, 会触发catch