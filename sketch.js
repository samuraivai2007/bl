var spaceImg,space;
var asteroidImg,asteroid,asteroidGroup;
var rocketImg,rocket;
var gameState="play"
var song;

function preload(){
spaceImg = loadImage("space.jpg");
asteroidImg=loadImage("astro.jpg");
rocketImg=loadImage("work.jpg")
song=loadSound("Broozer Squares Up.mp3");

}

function setup() {
 createCanvas(600,600);
 space=createSprite(300,300);
 space.addImage("space",spaceImg);
 space.velocityY=1;

 asteroidsGroup=new Group();
 rocketGroup=new Group();

 rocket=createSprite(200,200,50,50);
 rocket.scale=0.3;
 rocket.addImage(rocketImg);
}

function draw() {
 background(0);

 if(gameState==="play"){

    if(space.y<400){
        space.y=300
    }
    if(keyDown("left_arrow")){
        rocket.x=rocket.x+3;
    }
    if(keyDown("right_arrow")){
        rocket.x=rocket.x-3;
    }
spawnAsteroid();


    if(asteroidGroup.isTouching(rocket)){
        rocket.velocityY=0;
        rocket.destroy();
        gameState="end"
    }
 }
 if(gamestate==="end"){
     stroke("yellow");
     fill("yellow");
     textSize(30);
     text("GAME OVER,250,230")
 }
 drawSprites();
}
function spawnAsteroid(){
    if(frameCount%240===0){
        var asteroid1=createSprite(200,-50);
        asteroid1.addImage(asteroidImg);
        asteroid1.x=Math.round(random(120,140));
        asteroid1.lifetime=800;
        asteroidGroup.add(asteroid1);
        rocketGroup.add(rocket);
    }
}