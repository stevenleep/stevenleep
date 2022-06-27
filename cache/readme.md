# Cache
expires
可以为资源指定过期时间，最长支持一年
```javascript
// 在html meta中设置
<meta http-equiv="expires" content="0"/>
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT"/>
// server 
response.setHeader("Expires", new Date(Date.now() + 3000).toUTCString());
```

pragma
值为no-cache，表示可以缓存但是每次都需要问一下服务端
```javascript
// html meta
<meta http-equiv="pragma" content="no-cache"/>
// server
response.setHeader("Pragma", "no-cache");
```
cache-control
```javascript
// priveate
// public
// max-age
// s-max-age
// no-store
// no-cache
// must-revalidate
// proxy-revalidate
<meta http-equiv="cache-control" content="max-age=10;"/>
```
