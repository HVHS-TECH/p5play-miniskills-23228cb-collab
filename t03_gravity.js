/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas( windowWidth, windowHeight-40);
	Rect = new Sprite(windowWidth/2, windowHeight/2, windowWidth/5, windowHeight/10, 'd' );
	Rect.color = "Red";
	world.gravity.y = 10;
	Rect1 = new Sprite(windowWidth/2, windowHeight/2-40, windowWidth/5, windowHeight/10 );
	Rect.color = "Red";
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
}

/*******************************************************/
//  END OF APP
/*******************************************************/