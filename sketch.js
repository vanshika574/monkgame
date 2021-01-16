var PLAY = 1;
var END = 0;
var gameState = PLAY;


var survivalTime
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var gameOver, restart;
var invisibleGround
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20) ;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,5)
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  invisibleGround = createSprite(200,370,400,10);
  invisibleGround.visible = false;
  
  
  
}
function draw() {
 background(255);
  
   if(keyDown("space")) {
 monkey.velocityY=-12;
     
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
}
monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  drawSprites(); 
}

function banana() {
  
  
var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(cloudImage);
    banana.scale = 0.5;
    banana.velocityX = -3;  
  
   banana.lifetime = 200;
  
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
   bananaGroup.add(banana);

  
}




