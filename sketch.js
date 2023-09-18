let x = 200;
let speed = 4;
let diameter = 40;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  fill("red");
  stroke("noStroke");
  ellipse(x,height/2,40);
  if (x >= width || x<= 0) {
    speed = speed * -1;
  }
  x += speed;
}

function mouseClicked() {
  noLoop();
}


  

