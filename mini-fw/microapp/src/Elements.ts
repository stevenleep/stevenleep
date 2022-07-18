import MicroApp from "./MicroApp";

export default class Ele {
    public element: HTMLElement | null;
    public html: string | null;
    private microApp: MicroApp;

    constructor(microApp: MicroApp) {
        this.microApp = microApp;
    }

    init(selectorAndElement: string | null | HTMLElement) {
        if (typeof selectorAndElement === "string") {
            this.element = document.querySelector(selectorAndElement);
        }
        else if (selectorAndElement instanceof HTMLElement) {
            this.element = selectorAndElement;
        }
        else {
            this.element = null;
        }
    }

    public get(selector: string): HTMLElement | null {
        if (this.element) {
            return this.element.querySelector(selector);
        }
        return null;
    }

    public getAll(selector: string): NodeListOf<Element> | [] {
        if (this.element) {
            return this.element.querySelectorAll(selector);
        }
        return [];
    }

    public includes(element: HTMLElement | null): boolean {
        if (this.element && element) {
            return this.element.contains(element);
        };
        return false;
    }

    public addClass(className: string): void {
        if (this.element) {
            this.element.classList.add(className);
        }
    }

    public removeClass(className: string): void {
        if (this.element) {
            this.element.classList.remove(className);
        }
    }

    public toggleClass(className: string): void {
        if (this.element) {
            this.element.classList.toggle(className);
        }
    }
    public hasClass(className: string): boolean {
        if (this.element) {
            return this.element.classList.contains(className);
        }
        return false;
    }

    public parserHTML(html: string): HTMLElement | null {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.firstElementChild as HTMLElement;
    }

    public loadHTMLString(url: string): Promise<string> {
        return fetch(url)
            .then((response) => {
                return response.text();
            })
    }

    public append(element: HTMLElement | null): void {
        if (this.element && element) {
            this.element.appendChild(element);
        }
    }

    public DOMParser(html: string, format: DOMParserSupportedType = "text/html"): Document {
        return new DOMParser().parseFromString(html, format);
    }

    public extractScripts(document: Document): HTMLScriptElement[] {
        const scripts = document.querySelectorAll("script");
        scripts.forEach(script => {
            script.setAttribute("src", "http:" + this.microApp.app.entry + "/" + script.getAttribute("src")?.slice(2));
        });
        return Array.from(scripts);
    }

    public extractLinks(document: Document): HTMLLinkElement[] {
        const styles = document.querySelectorAll("link");
        const stylesArray = Array.from(styles);
        return stylesArray
    }

    public extractStyles(document: Document): HTMLStyleElement[] {
        const styles = document.querySelectorAll("style");
        return Array.from(styles);
    }
}