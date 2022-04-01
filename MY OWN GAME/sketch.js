var asteroid,aImg,aGrp;
var rocket,rocketImg;
var fuel,fuelImg,fGrp;
var score = 0;
var bg,bgImg;
var PLAY = 0;
var END  = 1;
var gameState = PLAY ; 
var gameOver,goImg;
var lives = 3;


function preload(){
  aImg = loadImage("asteroid.png");
  rocketImg = loadImage ("strrocket.png")
  fuelImg = loadImage("fuel.png")
  bgImg = loadImage("bg.jpg")
  goImg = loadImage("gameover.png")
}


function setup() {
  createCanvas(1500,800);
  
  //creating rocket 
  rocket = createSprite(750,690);
  rocket.addImage(rocketImg);
  rocket.scale = 0.5;
  

 
  fGrp = new Group();
  aGrp = new Group();
}


function spawnAsteroid(){

if(frameCount%50===0){
asteroid = createSprite(random(1500,400),150,30,30)
asteroid.addImage(aImg);
asteroid.scale=0.2;
asteroid.velocityY=2;
aGrp.add(asteroid);
}}

function spawnFuel (){

  if(frameCount%200===0){
    fuel = createSprite(random(1500,400),100,30,30)
    fuel.addImage(fuelImg);
    fuel.scale=0.2;
    fuel.velocityY=2;
    fGrp.add(fuel);
  }
}

function draw() {
  background(1500,800);  
  background("cyan")
  
rocket.x = World.mouseX;
  textSize(30)
  fill("black")
  text("Score: "+score,1200,80)


textSize(30)
fill("red")
text ("Lives: "+lives,100,80 )




   
  if(rocket.isTouching(fGrp)){
   score = score + 1 ;
   fGrp.destroyEach();
  }

 if(rocket.isTouching(aGrp)){
  lives = lives -1 ;
  aGrp.destroyEach();

 }

  if(lives === 0 ){
   gameState = 1;

  }

    edges= createEdgeSprites();
    rocket.collide(edges);
  
    spawnAsteroid();
    spawnFuel();
    drawSprites();

if (gameState === 1 ){
 fGrp.destroyEach();
 aGrp.destroyEach();
 fGrp.setVelocityEach(0);
 aGrp.setVelocityEach(0);
 background(goImg);
 goImg.scale = 1.2;

}


 }