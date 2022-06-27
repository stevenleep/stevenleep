# ES Module

- 规范实践者：各种浏览器环境，官方提出的解决方案

- 规范简述
  - import/import.meta可以导入模块
    ```javascript
    import xxx from "./xxx";
    import * as all from "./xx";
    import("./xxx");
    import.meta("./xxx");
    ```
  - export/export default 导出模块
    ```javascript
    export const a = "";
    export function name(){}
    export * from "./xxx";
    export default xxx
    export default function name(){}
    ```