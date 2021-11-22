const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
drops=[];
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    for(var i=0;i<100; i++){
      drops.push(new Drops(random(1,1200), random(1,800)))
      }
}
function draw() {
  background(255,255,255);  
  for(var i=0;i<100; i++){
  drops[i].display()
  drops[i].update()
  }
  drawSprites();
}
