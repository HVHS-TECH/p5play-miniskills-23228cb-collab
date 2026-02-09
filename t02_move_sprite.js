/*******************************************************/
// P5.play: t02_move_sprite
// Move a sprite
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
	Rect.rotationSpeed = 25;
	Rect.vel.x = 2;
	Rect.vel.y = 2;
	
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