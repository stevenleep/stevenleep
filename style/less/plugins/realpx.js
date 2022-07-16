module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add("realpx", function (nodeLeft, nodeRight) {
      console.log("realpx", nodeLeft, nodeRight, less);
      return false;
    });
  },
};
