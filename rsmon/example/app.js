import Server from "./Server";
import PortManager from "./PortManager";
import routeWarper from "./routes";

const portManager = new PortManager();
const server = new Server({
  // 申请一个端口, 如果不可用则 短口号增加1 继续尝试(直到可用为止)
  // requestAPort 👆方式存在一定的性能和不可靠
  // 可以使用portManager.isAvailablePort(port) 校验是否端口可用, 然后根据自己业务处理
  port: portManager.requestAPort(3000, { step: 1 }).port,
  hostname: "localhost",
}).createServer(routeWarper);

server.on("connection", function (port) {
  portManager.activePort(port, server);
  server.activePort = port;
});
server.on("close", function () {
  portManager.cancelPort(server.activePort);
});
