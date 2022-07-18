import { entries, IEntryConfig } from "./entry.config";
import MicroApp from "./MicroApp";

createMicroApp(entries, {
    defaultRoot: document.querySelector("#micro-app-root")
});

function createMicroApp(apps: IEntryConfig[], options: {
    defaultRoot: HTMLElement | null;
}) {
    apps.forEach(app => {
        const { name, entry, container, activeRule } = app;
        const appInstance = new MicroApp({
            name,
            entry,
            activeRule,
            container,
        }, options);

        appInstance.observable.on(name as string, "click", (args) => {
            console.log(`${name} is clicked`, args);
        }, appInstance);

        appInstance.start();
    });
};