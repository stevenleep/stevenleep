import { App } from "./mainApp";

export const entries: App[] = [
    {
        name: "app1",
        entry: "//localhost:9028/micro-apps/app1",
        container: "#app1"
    },
    {
        name: "app2",
        entry: "//localhost:9028/micro-apps/app2",
        container: "#app2"
    }
];