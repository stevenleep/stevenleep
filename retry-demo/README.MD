# Fetch Retry Demo

为 Fetch 增加请求重试能力，当一个请求失败或触发某种条件时候

### 全局重试配置

配置

```typescript
import createRetryFetch from "./fetch";

const supportRetriedFetch = createRetryFetch(fetch, {
  retries: 3,
  retryDelay: 2000,
  // normal: 无脑重试, 直到所有次数执行完
  retryOn: async (response: Response, counter) => {
    // 你可以在这里做一些其他操作
    return true;
  },
});
```

使用 And 结果

```typescript
supportRetriedFetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((result) => {
    console.log(result);
  }) // 仅当成功时才会执行这里
  .catch((error) => {
    console.log("[[error:]]", error);
  }); // 失败或重试次数使用完成后依赖不通过, 会触发catch
```

### 全局预设重试配置

使用 HttpStatus 作为重试条件

```typescript
import createRetryFetch from "./fetch";
import { useHttpStatusRetry } from "./presets";

const httpStatusRetry = createRetryFetch(fetch, {
  retries: 3,
  retryDelay: 2000,
  // 当httpStatus状态为 404 时候进行请求重试
  retryOn: useHttpStatusRetry(["404"]),
});
```

> 故意制造的一个 404 请求

```typescript
httpStatusRetry("https://jsonplaceholder.typicode.com/post/1")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("[[error:]]", error);
  });
```
