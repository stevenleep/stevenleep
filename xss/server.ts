const http = require('http');
const url = require('url');

const server = http.createServer((req: any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  
    // text/plain  浏览器当作文本解析
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    const urlObj = url.parse(req.url, true);

    if(urlObj.pathname === '/login') {
        runDangerousScript(req, res);
        return
    }
    
    res.write(`<script>alert("Bring in your cookies: " + document.cookie)</script>`);
    res.end();
    }
).listen(1337, 'localhost');

function runDangerousScript(req:any, res:any){
    const redirectUrl = url.parse(req.url, true);
    // 此代码会导致XSS
    // 当用户传递的重定向地址是一个非法代码时
    res.writeHead(302, {
        'Location': redirectUrl.query.url
    });

    res.end();
}