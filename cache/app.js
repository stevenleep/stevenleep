const express = require('express');
const app = express();
const cors = require('cors');
const cacheControlConfig = require("./cache-control");

// Port 
const PORT = process.env.PORT || 3000;
// Host
const HOST = process.env.HOST || 'localhost';


app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('Hello Cache Test!');
})

// 使用expires模式
// ref: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires
// expires 最长允许缓存一年，按照时间进行缓存
// HTTP 1.0

app.get("/expires", (req, res) => {
    res.setHeader("Expires", new Date(Date.now() + 3000).toUTCString());
    res.send("Expires in 3 seconds");
})

// pragma: no-cache
// ref: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma
app.get("/pragma", (req, res) => {
    res.setHeader("Pragma", "no-cache"); // 允许缓存但是需要提交到服务端进行校验 HTTP 1.0
    res.send("Pragma no-cache");
})

app.get("/cache-control", (req, res) => {
    const cache = req.query.cache;
    if (cache) {
        res.setHeader("Cache-Control", cacheControlConfig[cache] || cache);

        res.send(`Cache-Control: ${cache}: ${cacheControlConfig[cache]}`);

        return
    }
    // res.setHeader("Cache-Control", "max-age=0"); // 允许缓存但是需要提交到服务端进行校验 HTTP 1.1
    res.send("Cache-Control max-age=0");
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
