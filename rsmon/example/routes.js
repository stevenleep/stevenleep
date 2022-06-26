// 基于net模块实现
// 获取到的是TCP连接信息，需要自己基于TCP实现协议层(HTTP)
export default function routeWarper(client) {
  const httpClientConnection = new HttpParser(client);
  httpClientConnection.response({
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function HttpParser(client) {
  client.on("end", function onClientDisconnected(event) {
    console.log("client disconnected");
  });
}

HttpParser.prototype.body = function () {
  return {};
};

HttpParser.prototype.headers = function () {
  return {};
};
HttpParser.prototype.status = function () {};
HttpParser.prototype.request = function () {
  return {
    headers: this.headers(),
    body: this.body(),
    status: this.status(),
  };
};
HttpParser.prototype.response = function ({}) {};
