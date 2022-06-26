const a = 10,
  b = 20;

// 使用模块的NameSpace来表示依赖关系和隔离命名冲突问题
const sum = moduleA.sum(a, b);
const average = moduleB.average(a, b);

// 问题一
moduleA.value = 20;
// 问题二依然是：页面导入多个JS如何管理的问题
