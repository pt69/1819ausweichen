var x = -150;
var y = 240;
b = "AUS";

function setup() {
  createCanvas(400, 400);
  frameRate(30);
	var x = 20;
	var y = 300;
}

function draw() {
	
  background('Skyblue');
	
	stroke('ForestGreen');
	fill('ForestGreen');
	quad(0, 100, 0, 400, 400, 400, 400, 100);
	
  stroke('Gray');
	fill('Gray');
	quad(0, 200, 0, 350, 400, 350, 400, 200);
 
	stroke('White');
	fill('White');
	quad(0 ,260, 0, 270, 400, 270, 400, 260);
	
	strokeWeight(0)
	fill('Gray')
	quad(95 ,250, 95, 280, 105, 280, 105, 250);
	quad(195 ,250, 195, 280, 205, 280, 205, 250);
	quad(295 ,250, 295, 280, 305, 280, 305, 250);
	quad(395 ,250, 395, 280, 405, 280, 405, 250);
  
  fill("Black")
  ellipse( 200, 300, 40, 20)
  ellipse( 225, 315, 40, 30)
  ellipse( 210, 320, 60, 30)
  ellipse( 175, 330, 5, 5)
	
  fill("Blue")
  rect(x, y, 150, 54)

	fill("black")
	ellipse(x+32.5, y+51, 43, 43)

	fill("grey")
	ellipse(x+32.5, y+51, 29, 29)

	fill("black")
	ellipse(x+115, y+51, 43, 43)

	fill("grey")
	ellipse(x+115, y+51, 29, 29)

	fill("Blue")
	rect(x+46.7, y-40, 68.4, 40)

  fill(114,155,189)
  rect(x+62, y-34, 38.9, 30.6)
  triangle(x+115, y-39, x+151.5, y ,x+115, y)

  fill(102,89,83)
  rect(x+62, y+9, 20, 6)
   
  if (x < 20 ) { 
    x = x + 2;
  } 
   if (x >= 20 && x < 80) { 
    y = y - 2;
    x = x + 2;
  } 
	if (x >= 80 && x < 180) { 
    x = x + 2;
  } 
  if (x >= 180 && x < 255) { 
    x = x + 2;
    y = y + 2;
  } 
  if (x >= 255 ) { 
    x = x + 2;
  } 
  if (x > 430 ) { 
    x = -150;
    y = 240;
  } 
  if (x >= 130 && x < 200 && b == "AN") {
    b = "AUS" } 
  else { b = "AN" }
  if (x >= 130 && x < 200 && b == "AN") 
  {
    fill("DarkOrange")
  } 
	else { 
    fill("Gray")
  }
  rect(x+122, y+8, 13 ,8)
}