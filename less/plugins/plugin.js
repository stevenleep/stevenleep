// const less = require("less");

module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add("super-loop", function (node) {
      //   console.log("plugin.js", new less.visitors.ToCSSVisitor(this));
      return Math.PI;
    });
  },
};
