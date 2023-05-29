var gamei;

function preload(){
 gameiImg=loadImage("game_background_4.png") 

}

function setup(){
  createCanvas(windowWidth,windowHeight)
gamei = createSprite(500,190,10,10)
gamei.visible = false
gamei.addImage("gamei",gameiImg)

 

}

function draw(){
  background("#00AAFF ");


  drawSprites();

}