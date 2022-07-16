# MicroApp

```plaintext
+ createMicroApp(apps, lifecycle);
  + [params] apps: array of apps
    + app: {
      - name: string;
      - entry: string;
      - container: string;
      - props?: Record<string, unknown>;
      - activeRule?: string; // 路由激活规则
      - sandbox?: Record<string, unknown>;
    }
  + [lifecycle] lifecycle: object with lifecycle methods
    + lifecycle: {
      - beforeLoad: (app: App) => void;
      - beforeMount: (app: App) => void;
      - afterLoad: (app: App) => void;
      - afterMount: (app: App) => void;
      - willUnmount: (app: App) => void;
      - unmount: (app: App) => void;
    }
  + [return] {
      start: (globalMicroAppOptions) => void;
    }
```
