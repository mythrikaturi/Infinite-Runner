
var tower
var towerimg

var ghost
var ghostimg

var door
var doorimg

var climber 
var climberpng

var doorsgroup
var climbersgroup

var gamestate="play"


function preload(){
 towerimg=loadImage("tower.png") 
ghostimg=loadImage("ghost-standing.png")
doorimg=loadImage("door.png")
climberimg=loadImage("climber.png")





}
function setup() {
  createCanvas(600, 600);
 tower=createSprite(300,450)
tower.addImage("tower",towerimg)
  tower.velocityY=-5

ghost=createSprite(400,350)
ghost.addImage("ghost",ghostimg)
ghost.scale=0.4
ghost.velocityY=8
doorsgroup=new Group()
    
    climbersgroup=new Group()
}

function draw() {
  background(0);
if (gamestate=="play"){
  if (tower.y<0){
    tower.y=tower.width/2
      }
    
    if (keyDown(RIGHT_ARROW)){
      ghost.velocityX=3
    }
    if (keyDown(LEFT_ARROW)){
      ghost.velocityX=-2
    }
    
    if (keyDown("space")){
      ghost.velocityY=-6 
    }
    
    ghost.velocityY+=0.8
    
    
    spawndoor()
    if (ghost.isTouching(doorsgroup)){
      gamestate="end"
    }
    
    
    }
    

     if (gamestate=="end"){
      tower.velocityY=0
      ghost.velocityY=0
      ghost.velocityX=0
      ghost.destroy()
      tower.destroy()
      text("GAMEOVER",300,250)
      doorsgroup.destroyEach()
      climbersgroup.destroyEach()
    
     }
    
    
     drawSprites() 

    
    }
    function spawndoor(){
      if (frameCount%60==0){
      var door=createSprite(random(0,400),0,20,20)
      door.velocityY=3
      door.addImage("door",doorimg)
      doorsgroup.add(door)
      
      var climber=createSprite(random(0,400),75,20,20)
      climber.velocityY=3
      climber.addImage("climber",climberimg)  
      climber.x=door.x
      climber.lifetime=800
      door.lifetime=800 
climbersgroup.add(climber)








//the door y-coordinate should follow the climbers y-coordinate
//door.y=climbers.y
//climbers x-coordinate should follow the doors x coordinate

}

}

//create groups of door and climber
//create lifetime of door and climber as 800

