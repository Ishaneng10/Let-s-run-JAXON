var runner, runner_running, runner_collided;
var path, pathImage;
var enrgyDrink, coin, bomb;


function preload(){
  //pre-load images
  runner_running = loadAnimation("runner1.png","runnr2.png");
  runner_collided = loadAnimation("runner_collided.png");

  pathImage = loadImage("path.png");

  enrgyDrink = loadImage("enrgyDrink");
  coin = loadImage("coin");
  bomb = loadImage("bomb"); 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = creatSprite(160,50,50,20);
  runner.addAnimation("running",runner_running);
  runner.scle = 0.8;
}

function draw() {
  background(0);

  path.velocityY = 0.5;

  if(path.x < 0){
    path.y = path.width/2;
  }
  runner.x = World.mouseX

  spawnObstacles();

  drawSprite();
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    var bomb = createSprite(200,10,40,10);
    bomb.velocityY = -6;
    var coin = createSprite(150,10,40,10);
    coin.velocityY = -6;
    var enrgyDrink = createSprite(260,10,40,10);
    enrgyDrink.velocityY = -6;

    var rand = Math.round(random(1,6));
    switch(rand){
     case 1: enrgyDrink.addImage(enrgyDrink);
             break;
     case 2: coin.addImage(coin);
             break;
     case 3: bomb.addImage(bomb);
             break;
     default: break;              
    }
    coin.scale = 0.5;
    coin.lifetime = 300;
    bomb.scale = 0.5;
    bomb.lifetime = 300;
    bomb.scale = 0.5;
    bomb.lifetime = 300;
  }
}




