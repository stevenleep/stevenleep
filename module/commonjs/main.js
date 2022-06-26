const moduleA = require("./module-a");

const a = 10,
  b = 20;
const result = moduleA.sum(a, b);

start();
// 按需运行时加载
function start() {
  const moduleB = require("./module-b");
  const average = moduleB.average(a, b);
}

// dynamicImport
dynamicImport("./dynamic/");
function dynamicImport(prefixPath) {
  const moduleTest = require(prefixPath + "a.js");
  console.log(moduleTest.name);
}
