var ship;
var img;
var imgWidth;
var imgHeight;
var dir;
function setup() {
  createCanvas(600,400);

  ship = new Ship();
  img = loadImage("ship.png");
  imgWidth = 89;
  imgHeight = 89;
  console.log(imgWidth);
}

function draw() {
  background(51);
  ship.show(imgWidth,imgHeight);



}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
     dir = -1;
     ship.move(dir);
  }

  else if (keyCode === RIGHT_ARROW) {
     dir = 1;
     ship.move(dir);
  }
}
