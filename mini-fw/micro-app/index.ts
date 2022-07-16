import { createMainApp } from "./mainApp";
import { entries } from "./entries";

export const mainApp = createMainApp(entries, {
    beforeLoad(app) {
        console.log("beforeLoad", app.name);
    }
});

mainApp.start();