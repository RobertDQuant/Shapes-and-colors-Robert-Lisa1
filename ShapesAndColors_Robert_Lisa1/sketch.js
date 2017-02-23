/*Typing- Robert Driving-Lisa*/

function setup() {
//We are creating a canvas
  createCanvas(1000,1000);
//Adding background color
  background('#186b6f');
}

function draw() {
//Adding a rectangle in the center
//Adding a fill to the rectangle
  fill(0,153,255);
  rect(475,475,50,50);
//Adding a triangle on the top of rectangle
//Adding a fill to the triangle
  fill(255,204,102);
  triangle(465,475,535,465,500,430);
//Adding a ellipse to the background
//Adding a fill to the ellipse
  fill('rgba(102,0,51,0.25)');
  ellipse(500,500,150,150);
//Adding a line to the bottom of the ellipse
//Adding a stroke to all the shapes
  stroke(255,102,255);
  strokeWeight(3);
  line(425,575,575,575);
  
}