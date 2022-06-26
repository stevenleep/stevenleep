# commonjs/cjs

- 规范实践者： Node.js
- 规范描述：
    - module.exports 导出成员
        ```javascript
        // moduleA
        module.exports = {
            foo: 'bar',
        }
        ```
        > nodejs提供了global和exports api，exports = module.exports
    - require 导入
        ```javascript
        const moduleA =  require('./moduleName')
        moduleA.foo // bar
        ```
- 规范特点：
    - 同步加载(可通过变量混入动态导入)
        ```javascript
        const dirname = "common/";
        require(dirname + "app.js")
        ```
    - 值导入(改变导入模块的变量值，不会产生相互影响)
    - 多次加载模块其实只会一次加载，加载模块时候会见结果进行缓存