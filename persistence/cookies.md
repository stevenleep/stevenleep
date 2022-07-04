## Cookies
> 在 Web 应用中，Cookie 常用来标记用户或授权会话

- [Cookie的作用域](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#cookie_%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F)
        - 如果是Origin, 不包含子域; 
        - 指定为Domain, 可以在子域中共享Cookie, 这也是常用手段之一;
    - [Cookie安全性](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#%E5%AE%89%E5%85%A8)
        - [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)：Strict, Lax, None; 允许服务器要求在跨站请求时候不被发送;
            - 可以用于阻止[CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)攻击;
        - 使用 [HttpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 属性可防止通过 JavaScript 访问 cookie 值
    - [跟踪与隐私](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#%E8%B7%9F%E8%B8%AA%E5%92%8C%E9%9A%90%E7%A7%81):
        - 禁止追踪 Do-Not-Track
        - [僵尸Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#%E5%83%B5%E5%B0%B8_cookie_%E5%92%8C%E5%88%A0%E4%B8%8D%E6%8E%89%E7%9A%84_cookie)
            - [evercookie](https://github.com/samyk/evercookie)
            - [Zombie_cookie](https://en.wikipedia.org/wiki/Zombie_cookie)

## Cookies Description

- 大小: 4KB
- 用途与安全性：主要用于标记用户或授权会话（不能将隐私数据存在里面），不安全、容易造成XSS/CSRF，也容易被篡改(中间人攻击)
- 跨域：域名隔离的（在不设置Domain时候默认是Origin/子域也不可以），可以通过设置相同Domain在子域中共享Cookie;
- 设置端：浏览器、服务器都可以设置
- 安全处理：
    - SameSite: Strict, Lax, None; 允许服务器要求在跨站请求时候不被发送;
    - HttpOnly: 设置HttpOnly可使Javascript不能访问
    - Secure: 设置Secure可使Cookie只能通过安全加密方式(HTTPS)传输, 防止中间人攻击