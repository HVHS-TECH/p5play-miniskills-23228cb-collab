/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas( windowWidth, windowHeight-40, windowWidth/2, windowHeight/2-20);
	Rect = new Sprite(windowWidth/2, windowHeight/2, 20, 10 );
	Rect.color = "Red";
	Circ = new Sprite(windowWidth/5, windowHeight/2, 40);
	Circ.color = "Blue"
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