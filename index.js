import Main from './src/Main.js'
import Utils from './src/utils/Utils.js';

window.onload = function () {
    Utils.log("window loaded");
    let main = new Main();
    main.init();
}
