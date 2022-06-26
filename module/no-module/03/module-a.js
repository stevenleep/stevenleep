(function moduleA(defineModule) {
  const moduleInstance = {
    $namespace: "moduleA",
    sum(a, b) {
      return a + b;
    },
  };
  defineModule(moduleInstance);
})(fakeDefineModule);

function fakeDefineModule(moduleInstance, registerModulePosition = window) {
  registerModulePosition[moduleInstance.$namespace] = moduleInstance;
}
