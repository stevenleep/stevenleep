const moduleA = {
  sum(a, b) {
    return a + b;
  },

  // 模拟这个变量值会被更改
  value: 10,
  getValue() {
    return this.value;
  },
};
