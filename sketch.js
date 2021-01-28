const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var fairy, fairy_img;
var nightsky, nightsky_img;
var star, star_img, Star;
var music;

function preload(){

  fairy_img = loadAnimation("images/fairy1.png","images/fairy2.png");
star_img = loadImage("images/star.png");
nightsky_img = loadImage("images/starnight.png");
music = loadSound("sound/JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);
  
  engine = Engine.create();
  world = engine.world;
 

  fairy = createSprite(200,490,20,20);
  fairy.addAnimation("flying",fairy_img);
  fairy.scale = 0.25;

  Star = createSprite(600,470,20,20);
  Star.addImage("flying",star_img);
  Star.scale = 0.125;

  


    var star_option ={
    
    isStatic: true

  }

  star = Bodies.circle(600,150,50,star_option);
  World.add(world,star);
  Engine.run(engine);
 

}


function draw() {
  background(nightsky_img);
  

  Star.x = star.position.x;
  Star.y = star.position.y;

  if(star.position.y > 470 && Star.y > 470 ){

   Matter.Body.setStatic(star,true);
    
  }

  drawSprites();

}

function keyPressed() { 
  if(keyCode === RIGHT_ARROW){ 
    fairy.x = fairy.x + 20; }

  if(keyCode === LEFT_ARROW){
     fairy.x = fairy.x - 20; }
     
  if (keyCode === DOWN_ARROW) { 
    Matter.Body.setStatic(star,false); 
  }
 }