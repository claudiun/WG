import Loader from './Loader.js'
import Events from './events/Events.js'
import Utils from './utils/Utils.js';
import Background from './views/Background.js';

class Main {

    constructor() {
    }

    init() {
        this.createApp();
        this.addEventListeners();
        this.loadAssets();
    }

    createApp() {

        let app = new PIXI.Application({
            width: 800,
            height: 600,
            antialiasing: true,
            transparent: false,
            resolution: 1
        }
        );
        app.dispatcher = new PIXI.utils.EventEmitter();
        PIXI.app = app;
        document.getElementById('gameContainer').appendChild(app.view);
    }

    loadAssets() {
        this.loader = new Loader();
        this.loader.init();
    }

    addEventListeners() {
        PIXI.app.dispatcher.on(Events.PRELOAD_COMPLETE, this.render);
    }

    render(res) {
        Utils.log("render!", res);
        this.background = new Background(res);
        document.getElementById("preloader").style.display = 'none';
    }
}

export default Main;