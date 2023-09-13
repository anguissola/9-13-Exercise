let x = 200;
let speed = 4;
let diameter = 40;

function setup() {
  createCanvas(400, 400);}

function draw() {
  background("pink");
  ellipse(x,height/2,40);
  fill("red");
  stroke("noStroke");
  if (x >= width || x<= 0) {
    speed = speed * -1;
  }
  x += speed;
  //if ( x<= 0) {
    //speed = speed * -1;
  //}
}
