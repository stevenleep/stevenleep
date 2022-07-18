import { IEntryConfig } from "./entry.config";
import Ele from "./Elements";
import Observable from "./Observer";

export default class MicroApp {
    public app: IEntryConfig;
    public appContainer: HTMLElement | null;
    private documentElement = new Ele(this);
    public observable = new Observable();

    public scripts: HTMLScriptElement[] = [];
    public styles: HTMLStyleElement[] = [];
    public links: HTMLLinkElement[] = [];

    constructor(app: IEntryConfig, options: { defaultRoot?: HTMLElement | null }) {
        this.app = app;
        this.documentElement.init(options.defaultRoot as HTMLElement);
        this.prepare();
    }

    prepare() {
        const container = document.createElement("div");
        container.setAttribute('id', this.app.container.slice(1));

        container.addEventListener('click', () => {
            this.observable.emit(this.app.name as string, 'click', this);
        }, false)

        this.appContainer = container;
        this.documentElement.loadHTMLString(this.app.entry).then(html => {
            const appEntryDocument = this.documentElement.DOMParser(html);

            const scripts = this.documentElement.extractScripts(appEntryDocument);
            const styles = this.documentElement.extractStyles(appEntryDocument);
            const links = this.documentElement.extractLinks(appEntryDocument);

            this.scripts = scripts;
            this.styles = styles;
            this.links = links;

            this.appContainer?.appendChild(appEntryDocument.body);
        });
    };

    start() {
        console.log(`${this.app.name} is started`, this.appContainer);
        this.documentElement.append(this.appContainer);
    }
}
