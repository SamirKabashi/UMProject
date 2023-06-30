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

// const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();
// rectangle.beginFill(0xAA33BB)
// .lineStyle(4, 0xFFEA00, 1) // ngjyra rreth boxit
// .drawRect(200, 200, 100, 100) // ketu eshte largesia e (x, y)
// .endFill();

// app.stage.addChild(rectangle);

// const poly = new Graphics();
// poly.beginFill(0xFF66FF)
// .lineStyle(5, 0xFFEA00, 1)
// .drawPolygon([
//     600, 50,
//     800, 150,
//     900, 300,
//     400, 400
// ])
// .endFill();
// app.stage.addChild(poly);

// const circle = new Graphics();
// circle.beginFill(0x22AACC)
// .drawCircle(440, 200, 80)
// .endFill();

// app.stage.addChild(circle);
// const line = new Graphics();
// line.lineStyle(5, 0xFFEA00, 1)
// .moveTo(1500, 100)
// .lineTo(1500, 800);

// app.stage.addChild(line);

// const torus = new Graphics();
// torus.beginFill(0xFFFDDD)
// .drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
// .endFill();

// app.stage.addChild(torus);

// const star = new Graphics();
// star.beginFill(0xADADAD)
// .drawStar(900, 700, 300, 80)
// .endFill();

// app.stage.addChild(star);

// const style = new PIXI.TextStyle({
//     fontFamily: 'Montserrat',
//     fontSize: 48,
//     fill: 'deepskyblue',
//     stroke: '#fffffff',
//     strokeThickness: 4,
//     dropShadowColor: '#000000'
// });

// const myText = new PIXI.Text('Hello World', style);
// app.stage.addChild(myText);

// myText.text = 'Text Changed!';
// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;
// myText.style.align = 'center';

// app.ticker.add(delta => loop(delta));

// function loop(delta){
//     const rect = new Graphics();
//     rect.beginFill(0xFFFFF)
//     .drawRect(Math.random()* app.screen.width, Math.random() * app.screen.height, 10, 10)
//     .endFill();
//     app.stage.addChild(rect);
// }

// const char1Texture = PIXI.Texture.from('./images/sasuke.png');
// const char1Sprite = new PIXI.Sprite(char1Texture);

// const char1Sprite = PIXI.Sprite.from('./images/sasuke.png');
// app.stage.addChild(char1Sprite);

// char1Sprite.width = 500;
// char1Sprite.height = 500;

// char1Sprite.scale.x = 1.5;
// char1Sprite.scale.y = 2;

// char1Sprite.scale.set(0.5, 0.3);

// char1Sprite.x = 200;
// char1Sprite.y = 400;


// app.ticker.add(delta => loop(delta));

// function loop(delta){
//     char1Sprite.x +=1;
// }

// char1Sprite.position.set(800, 400);

// app.ticker.add(delta => loop(delta));
// char1Sprite.rotation = 1;
// function loop(delta){
//     char1Sprite.rotation += 0.01;
// }

// app.ticker.add(delta => loop(delta));
// char1Sprite.anchor.x = 0.5;
// char1Sprite.anchor.y = 0.5;
// function loop(delta){
//     char1Sprite.rotation += 0.01;
// }

// app.ticker.add(delta => loop(delta));
// char1Sprite.anchor.set(0.5, 0.5);
// function loop(delta){
//     // char1Sprite.rotation += 0.01;
// }

// char1Sprite.interactive = true;
// char1Sprite.buttonMode = true;
 
// char1Sprite.on('pointerdown', function(){
//     char1Sprite.scale.x += 0.1;
//     char1Sprite.scale.y += 0.1;
// });

// document.addEventListener('keydown', function(e) {
//     if(e.key === 'ArrowRight')  // duhet me shigjeta prej tastieres me punu 
//         char1Sprite.x += 10;
//     if(e.key === 'ArrowLeft')
//         char1Sprite.x -= 10;
// });

// const container = new PIXI.Container();

// const char2Sprite = PIXI.Sprite.from('./images/sasuke.png');
// container.addChild(char2Sprite);

// const char3Sprite = PIXI.Sprite.from('./images/sasukeSOP6.png');
// container.addChild(char3Sprite);

// app.stage.addChild(container);  

// char2Sprite.position.set(1000, 500);
// container.x = 200;

// console.log(char3Sprite.x);
// console.log(char3Sprite.getGlobalPosition());
// console.log(container.children);

// const particleContainer = new PIXI.ParticleContainer(1000, {
//     position: true,
//     rotation: true,
//     vertices: true,
//     tint: true,
//     uvs: true
// });

const loader = PIXI.Loader.shared;

// loader.add('char4Texture', './images/lion.png');

// loader.load(setup);

//  function setup(loader, resources){
//     const char4Sprite = new PIXI.Sprite(
//         resources.char4Texture.texture
//     );
//     char4Sprite.y = 400;
//     app.stage.addChild(char4Sprite);
// }

// loader.add(['char4Texture', './images/lion.png'])
// .add('char5Texture', './images/char5.png')
// .load(setup);

//  function setup(loader, resources){
//     const char4Sprite = new PIXI.Sprite(
//         resources['./images/sasuke.png'].texture
//     );
//     char4Sprite.y = 400;
//     app.stage.addChild(char4Sprite);
// }

// loader.add(['./images/lion.png', './images/sasuke.png'])
// .load(setup);

//  function setup(loader, resources){
//     const char4Sprite = new PIXI.Sprite(
//         resources['./images/lion.png'].texture
//     );
//     char4Sprite.y = 800;
//     app.stage.addChild(char4Sprite);
// }
// loader.onLoad.add(function(){
//     console.log('on load');
// });

// loader.onLoad.add(function(){
//     console.log('on error');
// });

// loader.onProgress.add(function(){
//     console.log('on progress');
// });

// loader.add('tileset', './images/lion.png')
// .load(setup);

// function setup(loader, resources) {
//     const texture1 = resources.tileset.texture;
//     const rect1 = new PIXI.Rectangle(176, 160, 76, 86);
//     texture1.frame = rect1;
//     const spr1 = new PIXI.Sprite(texture1);
//     spr1.scale.set(2, 2);
//     app.stage.addChild(spr1);

//     const texture2 = new PIXI.Texture(resources.tileset.texture);
//     const rect2 = new PIXI.Rectangle(190, 593, 77, 84);
//     texture2.frame = rect2;
//     const spr2 = new PIXI.Sprite(texture2);
//     spr2.scale.set(2, 2);
//     spr2.position.set(200, 200);
//     app.stage.addChild(spr2);
// }


loader.add('tileset', './images/tileset.png')
//.add('char5Texture', './images/char5.png')
.load(setup);

function setup(loader, resources) {
    const texture1 = resources.tileset.texture;
    const rect1 = new PIXI.Rectangle(176, 160, 76, 86); // mbrenda nje foto te madhe mundesh qe ka shume foto me e gjete dhe shfaq vetem nje foto 
    texture1.frame = rect1;
    const spr1 = new PIXI.Sprite(texture1);
    spr1.scale.set(2, 2);
    app.stage.addChild(spr1);

    const texture2 = new PIXI.Texture(resources.tileset.texture);
    const rect2 = new PIXI.Rectangle(190, 593, 77, 84); // mbrenda nje foto te madhe mundesh qe ka shume foto me e gjete dhe shfaq vetem nje foto 
    texture2.frame = rect2;
    const spr2 = new PIXI.Sprite(texture2);
    spr2.scale.set(2, 2);
    spr2.position.set(200, 200);
    app.stage.addChild(spr2);
}