let x = 200;
let speed = 4;
let diameter = 40;
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background("pink");
  fill("red");
  stroke("red");
  ellipse(x,height/2,40);
  x += speed;
  if (x >= width || x<= 0) {
    speed = speed * -1;
  }
 
}
noloop()
function mouseClicked() {
  speed = 0
}

function mouseClicked () {
  speed = 4
}