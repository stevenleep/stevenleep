export default class FullScreen {
    observers = new Map();

    constructor(element) {
        this.element = element || document;
    }

    on(event, handler, options = false) {
        this.element.addEventListener(event, handler, options);
    }

   async requestFullScreen() {
        const fullscreen = this.element?.requestFullscreen();
    }

    async exitFullScreen(context = {}) {
       await document.exitFullscreen();
       this.onExitFullScreen(context);
    }

    onFullScreen(name, onFullScreenHandler) {
        this.observers.set(name, onFullScreenHandler);
    }
    onExitFullScreen(context = {}) {
        this.observers.forEach(observer => {
            observer && observer(context);
        })
    }
}