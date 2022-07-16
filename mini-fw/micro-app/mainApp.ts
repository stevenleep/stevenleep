import { mountApp } from "./mountApp";

export interface App {
    name: string;
    entry: string;
    container: string;
    props?: Record<string, unknown>;
    activeRule?: string; // 路由激活规则
    sandbox?: Record<string, unknown>;
};
export interface GlobalMicroAppOptions {
    globalProps?: {},
    sandbox?: {
        strictStyleIsolation?: boolean,
    },
    preFetch?: boolean,
}
export interface MicroInstance {
    start(globalMicroAppOptions?: GlobalMicroAppOptions): void;
    destroy(): void;
}

export interface LifeCycle {
    beforeLoad(app: App): void;
    afterLoad(app: App): void;
    beforeMount(app: App): void;
    afterMount(app: App): void;
    destroy(app: App): void;
}
export type OptionalLifeCycle = Partial<LifeCycle>;

export function createMainApp(apps: App[] = [], lifecycle: OptionalLifeCycle = {}): MicroInstance {
    mountApp(apps, lifecycle);

    return {
        start(globalMicroAppOptions?: Partial<GlobalMicroAppOptions>) { },
        destroy() { },
    }
}

