let x = 200;
let speed = 4;
let diameter = 40;
var canvas;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  //drawing
  background("pink");
  fill("red");
  stroke("red");
  ellipse(x,height/2,40);
  //logic
  x += speed;
  if (x >= width || x<= 0) {
    speed = speed * -1;
  }
 
}

//animation directed by mouse click
function mouseClicked() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
  redraw();
}