import { exec } from "child_process";
import Server from "./Server";

export default class PortManager {
  applicationOccupancyPorts = new Map();

  async isAvailablePort(port) {
    const checkedPortResult = await hasPortAvailable(port);
    return !!checkedPortResult.status;
  }

  requestAPort(port, options = {}) {
    let availablePort = {};
    tryRequestAvailablePort(
      port,
      function onAvailablePortCallback(availablePortDescription) {
        // this.applicationOccupancyPorts.set(availablePortDescription.port);
        availablePort = availablePortDescription;
        this.applicationOccupancyPorts.set(availablePortDescription.port, {
          active: false,
          requested: true,
          timestamp: new Date().getTime(),
          serverInstance: null,
          port: availablePortDescription,
        });
      },
      {
        step: 10,
        ...options,
      }
    );
    return availablePort;
  }

  getApplicationOccupancyPorts() {
    return this.applicationOccupancyPorts.keys();
  }

  getApplicationDetailByPort(port) {
    return this.applicationOccupancyPorts.get(port);
  }

  activePort(port, serverInstance) {
    if (!this.applicationOccupancyPorts.has(port)) {
      throw new Error("your application is not request port");
    }
    return this.applicationOccupancyPorts
      .set(
        port,
        Object.assign({}, this.applicationOccupancyPorts.get(port), {
          active: true,
          serverInstance,
          activeTimestamp: new Date().getTime(),
        })
      )
      .get(port);
  }

  cancelPort(port) {
    this.applicationOccupancyPorts.delete(port);
  }
}

function hasPortAvailable(port) {
  const command = `netstat -ano|findstr "${port}"`;
  return new Promise((resolve, reject) => {
    exec(command, function (error, stdout, stderr) {
      if (stdout === "") {
        resolve({ status: false, error, stderr, stdout });
      } else {
        resolve({ status: true, error, stderr, stdout });
      }
    });
  });
}

async function tryRequestAvailablePort(
  port = 3000,
  onAvailablePortCallback,
  options = {
    step: 10,
  }
) {
  function tryRequestAPort() {
    return new Promise((resolve, reject) => {
      const fakeServer = new Server().createServer();
      fakeServer.on("listening", (port) => {
        fakeServer.close();
        resolve({ status: true, port });
      });

      fakeServer.on("error", (error) => {
        fakeServer.close();
        resolve({ status: false, error, port: null });
      });
    });
  }

  function safePort(port) {
    return Number(port);
  }

  const portDescription = await tryRequestAPort(safePort(port));
  if (!portDescription.status) {
    tryRequestAvailablePort(
      safePort(port) + options.step,
      onAvailablePortCallback,
      options
    );
  } else {
    onAvailablePortCallback(portDescription);
  }
}
