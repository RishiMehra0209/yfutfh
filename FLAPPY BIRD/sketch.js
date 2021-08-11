var bird
var birdimage
var pipe1
var bird2
var backgroundimage
var background
var pipe2
var edges 
function preload( ){
  birdimage=loadImage ("bird1.png") 
  pipe1=loadImage ("Pipe.png");
pipe2=loadImage("Pipe1.png");
backgroundimage=loadImage("background.jpg");

  bird2=loadImage("bird2.png");
  

  

  
}
function setup(){
  createCanvas(displayWidth,650);
  background=createSprite(0,0,700,700);
background.addImage("background",backgroundimage);
background.scale=10
  bird=createSprite(100,300,100,200);
  bird.addImage("bird",birdimage);
  bird.addImage("bird1",bird2)
  bird.scale=0.2
  bird.velocityY=bird.velocityY+0.08
pipe=createSprite(500,300,100,100);
pipe.addImage("pipe2",pipe1);
pipe.scale=2.7;
edges=createEdgeSprites()





}
function draw(){
  background.velocityX=-4
  if(background.x<0){
    background.x=background.width/2
  }
  drawSprites();
  if(keyIsDown("space")){
//bird.velocityY=-5
bird.velocityX=5
bird.changeAnimation("bird1",bird2)
bird.scale=0.6
  }
 
  if(bird.isTouching(edges)){
    bird.x=100
    bird.y=300
  }
}
  