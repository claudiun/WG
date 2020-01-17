import Utils from "./utils/Utils.js";
import Events from "./events/Events.js";

class Loader {

    constructor() {
    }

    init() {
        Utils.log("start loading assets!");
        this.loader = new PIXI.loaders.Loader();

        this.loader
            .add('bg', 'assets/background.jpg');

        this.loader.onLoad.add(this.handleProgress);
        this.loader.load(this.preloadComplete);
    }

    handleProgress(loader) {
        let progress = Math.round(loader.progress) / 100;
        Utils.log("loading..." + (progress * 100).toFixed(0) + '%');
        document.getElementById("preloader").innerHTML = "loading..." + (progress * 100).toFixed(0) + '%';
    }

    preloadComplete(loader) {
        Utils.log("preload complete!")
        PIXI.app.dispatcher.emit(Events.PRELOAD_COMPLETE, loader.resources);
    }
}
export default Loader;
