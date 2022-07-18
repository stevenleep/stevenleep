import MicroApp from "./MicroApp";

export default class Observable {
    observers: {} = {};

    on(appName: string, event: string, callback: Function, instance: MicroApp) {
        this.observers[appName] = this.observers[appName] || [];
        this.observers[appName].push({ event, callback, instance });
    }

    emit(appName: string, event: string, ...args: any[]) {
        if (this.observers[appName]) {
            this.observers[appName].forEach(observer => {
                if (observer.event === event) {
                    observer.callback(...args);
                }
            });
        }
    }
}