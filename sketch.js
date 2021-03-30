const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var t, thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;


function preload(){
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
   thunder3 = loadImage("3.png");
   thunder4 = loadImage("4.png");
}

function setup(){
   var canvas = createCanvas(500, 700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Man(200,500);

   for(var i = 0; i < maxDrops; i++){
      drops.push(new Drops(random(0,500), random(0,500)));
   }
}

function draw(){
   Engine.update(engine);
   background("black"); 

    
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        t = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: t.addImage(thunder1);
            break;
            case 2: t.addImage(thunder2);
            break; 
            case 3: t.addImage(thunder3);
            break;
            case 4: t.addImage(thunder4);
            break;
            default: break;
        }
        t.scale = 0.7;
    }

    if(thunderCreatedFrame + 10 === frameCount && t){
        t.destroy();
    }


   umbrella.display();

   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }

   drawSprites();
}   
