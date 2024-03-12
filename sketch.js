let x = 0;
let move = 3;

function setup() {
  createCanvas(400, 150);
}

function draw() {
  background(220,30,40);
  
  
  
  if (x + 100 > width) {
    move = -3
  }
  
  if (x < 0) {
    move = 3;
  }
  
  rect(x, 50, 100, 50);
  
  x = x + move;
}