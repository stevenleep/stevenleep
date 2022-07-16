// const less = require("less");
module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add("sum", function (nodeLeft, nodeRight) {
      return Number(nodeLeft.value) + Number(nodeRight.value) + "px";
    });
  },
};
