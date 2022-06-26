import net from "net";

class Server {
  constructor(config = {}) {
    this.config = config;
    this.hostname = config.hostname || "localhost";
    this.port = config.port || 3000;

    this.connectionListener = config?.connectionListener || (() => {});
  }

  createServer(connectionListener) {
    const server = net
      .createServer(connectionListener || this.createConnectionListener)
      .listen(this.port, this.hostname);
    return server;
  }
}

export default Server;
