const defaultRequestTime = 2000;
export const useRequestTimeRetry = (requestTime: number = defaultRequestTime) => {
    return (response, counter) => {
        // TODO: 计算当前请求花费的时间
    }
}