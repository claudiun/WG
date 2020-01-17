class Background {

    constructor(res) {

        var container = new PIXI.Container();
        PIXI.app.stage.addChild(container);

        var background = new PIXI.Sprite(res.bg.texture);
        background.x = background.y = 0;

        container.addChild(background);
    }

}
export default Background;