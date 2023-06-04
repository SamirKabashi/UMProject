const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height:500,
    transparent: false,
    antialias: true

});

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.drawRect(200, 200, 100, 100)
.endFill();

app.stage.addChild(rectangle);