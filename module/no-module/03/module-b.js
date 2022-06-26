(function moduleA(defineModule) {
  const moduleInstance = {
    $namespace: "moduleB",
    average(a, b) {
      return windows.moduleA.sum(a, b) / 2;
    },
  };
  defineModule(moduleInstance);
})(fakeDefineModule);

function fakeDefineModule(moduleInstance, registerModulePosition = window) {
  registerModulePosition[moduleInstance.$namespace] = moduleInstance;
}
