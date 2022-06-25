const moduleB = {
  average(a, b) {
    return moduleA.sum(a, b) / 2;
  },
};
