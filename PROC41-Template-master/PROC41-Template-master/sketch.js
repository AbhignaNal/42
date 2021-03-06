const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var thunder, thunder1, thunder2, thunder3, thunder4;
var drops = [];
var rand;

var maxDrops = 100;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200, 300);
    for (var i = 0; i < maxDrops; i++){
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
    for (var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    rand = Math.round(random(1,4));
    if (frameCount%200==0){
    thunder = createSprite(random(0, 400), 40, 50, 70);
    thunder.scale = 0.25;
    switch(rand) {
        case 1: thunder.addImage(thunder1)
        break;
        case 2: thunder.addImage(thunder2)
        break;
        case 3: thunder.addImage(thunder3)
        break;
        case 4: thunder.addImage(thunder4)
        break;
    }
}
    drawSprites();
}

