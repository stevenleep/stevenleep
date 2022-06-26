// 非独立模块，有对外的依赖
require.config({
  paths: {
    commonA: "./common-a.js",
  },
});
define(["commonA"], function (commonAModule) {
  // do something
  return {
    // do something
  };
});

define(function (require) {
  var utils = require("commonA");
});
