let startpoint;
let launchpoint;
let endpoint;
let value;
let clickvalue;
let r, g, b;
let speed = 4;
let diameter = 40;
function setup() {
  createCanvas(400, 400);
  noLoop();
  startpoint = 0;
  launchpoint = 200;
  endpoint = 400;
  value=("#7BB2DD");
  clickvalue=random(r,g,b);
  r = random(0,255);
  g = random(0,255);
  b = random(0,255); 
}

function draw() {

  //drawing stuff
  background("pink");
  fill(value);
  stroke(value);
  // if (mouseIsPressed) {
  //   fill(r,g,b);
  // } else {
  //   fill(255);
  // }
  ellipse(launchpoint,200,40);

  //logic
  launchpoint = launchpoint + 1;

  if (launchpoint >= endpoint || launchpoint<= 0) {
    speed = speed * -1;
  }
  launchpoint += speed;
}

//mouse-initiated animation
function mouseClicked() {
  loop();

  if (value === 0) {
    value = (clickvalue);
  } else {
    value = (clickvalue);
  }
}



// function mouseReleased() {
//   noLoop();
// }
