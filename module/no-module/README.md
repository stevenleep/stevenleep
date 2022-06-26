# no module

### 第一阶段(01)
使用原声带JS导入顺序
```html
<!DOCTYPE html>
<html lang="en">
  <script src="./module-a.js"></script>
  <script src="./module-b.js"></script>
  <script src="./main.js"></script>
</html>
```
**问题**
- 命名冲突
- 无法确定依赖关系
- 还有一些参数来自于环境，不透明
- 多个JS如何管理，无法解决相互引用


### 第二阶段(02)
```html
<!DOCTYPE html>
<html lang="en">
  <script src="./module-a.js"></script>
  <script src="./module-b.js"></script>
  <script src="./main.js"></script>
</html>
```
```javascript
const moduleA = {
  sum(a, b) {
    return a + b;
  },
};
```
```javascript
const moduleB = {
  average(a, b) {
    // 这里
    return moduleA.sum(a, b) / 2;
  },
};
```
为模块增加一个命名空间
- 命名冲突问题和模块依赖问题相对明显，但是：整个NameSpace作为Object导出，外界可以对其进行修改（容易造成应用各种问题）
- 多个JS如何管理，无法解决相互引用

### 第三个阶段(03)
IIFE自执行函数，为了创建私有变量或私有方法，引入了自执行函数及闭包的思路，此时写法类似

```javascript
// moduleA.js
var moduleA = (function () {
  var bar = 1; // 私有属性
  var moduleA = window.moduleA || {};
  // 私有方法
  function getBar() {
    return bar;
  }
  moduleA.add = function (a, b) {
    return a + b;
  };
  moduleA.foo = function () {
    return getBar();
  };

    // 或者挂到 window 下:  window.moduleA = moduleA
  return moduleA;
})();
```
> 阅读： https://segmentfault.com/a/1190000023839483

问题：
- 多个JS如何管理，无法解决相互引用