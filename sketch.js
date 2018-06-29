var ship;
var aliens = [];

var img;
var imgWidth;
var imgHeight;
var dir;
function setup() {
  createCanvas(600,400);

  ship = new Ship();

  for(var i=0;i<5;i++){
      aliens[i] = new Alien((i+1)*80+50,50);
  }

  img = loadImage("ship.png");
  img1 = loadImage("alien.png");
  imgWidth = 89;
  imgHeight = 89;
  //console.log(imgWidth);

}

function draw() {
  background(51);
  ship.show(imgWidth,imgHeight);

  for(var i=0;i<5;i++){
      aliens[i].show();
  }




}
function keyPressed(){

  if(keyCode === LEFT_ARROW){
     ship.move(-1);
  }

  else if (keyCode === RIGHT_ARROW) {
     ship.move(1);
  }
}
