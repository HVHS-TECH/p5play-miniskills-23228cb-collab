/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas( windowWidth, windowHeight-40);
	Rect = new Sprite(windowWidth/2, windowHeight/2, windowWidth/12, 'd' );
	Rect.color = "Red";
	Rect.rotationSpeed = -5;
	Rect.vel.x = 2;
	Rect.bounciness =1.5;
	Rect.drag =0.5;
	world.gravity.y = 10;
	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');
	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');
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