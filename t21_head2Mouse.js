/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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
	
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");

	Rect.moveTowards(mouseX, mouseY, 0.1);

	
	if (mouse.presses()) {
	Rect.moveTo( 40, 40, 10000);
}
}



/*******************************************************/
//  END OF APP
/*******************************************************/