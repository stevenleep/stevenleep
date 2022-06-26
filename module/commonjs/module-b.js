const moduleA = require("./module-a");

module.exports = {
  average(a, b) {
    return moduleA.sum(a, b) / 2;
  },
};
