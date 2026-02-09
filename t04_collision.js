/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
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
	Rect.rotationSpeed = -5;
	Rect.vel.x = 2;
	world.gravity.y = 10;
	platform_1 = new Sprite(windowWidth/2, 700, 90, 10, 'k');
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