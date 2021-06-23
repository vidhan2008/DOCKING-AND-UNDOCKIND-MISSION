var spacecraft,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4
var spacebg,spacebgImg1
var iss,issImg
var hasDocked=false
var l

function preload(){
spacecraftImg1=loadImage("spacecraft1.png")
spacecraftImg2=loadImage("spacecraft2.png")
spacecraftImg3=loadImage("spacecraft3.png")
spacecraftImg4=loadImage("spacecraft4.png")

spacebgImg1=loadImage("spacebg.jpg")
issImg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
   iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  
  
spacecraft=createSprite(350,350)
spacecraft.addImage(spacecraftImg1)
spacecraft.scale=0.15

l= createSprite(336, 233, 20, 10);
l.visible=false
}

function draw() {
  background(spacebgImg1); 

if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1)
  
  if(keyDown("UP_ARROW")){ 
    spacecraft.y = spacecraft.y -2;
   }


   if(keyDown("DOWN_ARROW")){ 
 
    spacecraft.addImage(spacecraftImg2)
   }else{
    spacecraft.addImage(spacecraftImg1)
   }

   if(keyDown("LEFT_ARROW")){ 
    spacecraft.x = spacecraft.x -2;
    spacecraft.addImage(spacecraftImg3)
   }else{
    spacecraft.addImage(spacecraftImg1)
   }

   if(keyDown("RIGHT_ARROW")){ 
    spacecraft.x = spacecraft.x+2;
    spacecraft.addImage(spacecraftImg4)
   }else{
    spacecraft.addImage(spacecraftImg1)
   }
 
if(l.isTouching(spacecraft)){
fill("white")
textSize(40)
text("Well Done",400,350)

spacecraft.x=334
spacecraft.y=266


spacecraft.velocityX=0
spacecraft.velocityY=0
}
}

  drawSprites();
}

