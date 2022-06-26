// 独立模块
// define定义的模块可以返回任何值，不限于对象
define(function () {
  return {
    sum(a, b) {
      return a + b;
    },
  };
});

define("test");

define({
  name: "sum",
  sum(a, b) {
    return a + b;
  },
});
