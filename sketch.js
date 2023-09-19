let x = 200;
let y =200;
let speed = 4;
let diameter = 40;
let outerfill = 100;

var canvas;
var pre;
var p;
var purpleballskeepgoing;
var middlefill;

function setup() {
  createCanvas(400, 400);
  // noLoop();
  //buffoonery
  pre = createElement('pre', '                        Goodluck!');
  pre.position(0,560);
  middlefill = (100);
}

function draw() {
  //drawing
  background(205,247,165);

  fill(middlefill);
  ellipse(x,height/2,diameter);
  //logic
  x = x + speed;
  if (x >= width || x<= 0) {
    speed = speed * -1;
  }
  //drawing next shapes
  fill(outerfill, outerfill, 20);
  ellipse(y,100,diameter);
  fill(20, outerfill, outerfill);
  ellipse(y,300,diameter);
  //logic for next shapes
  y = y + speed;
  if (y >= width || y<= 0) {
    speed = speed * -1;
  }
  //logic for top and bottom dot fill
  outerfill = outerfill + speed;
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

function mousePressed() {
  if (isLooping()) {

  } else {
  middlefill = (( random(0,255)));
  }
} 




// key press
function keyPressed() {
  if (key == "j")
  console.log("message" + x);
}
c

//notes

  // logic for backrgound change

 //figure - 10000

 //message display
   // createP()
  // p=createElement('p', "Vexation!");
  // p.position(500,400);