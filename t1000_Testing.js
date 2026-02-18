// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas( windowWidth, windowHeight-40);
	world.gravity.y = 1000;

	Rect = new Sprite(windowWidth/2, windowHeight/2, windowWidth/5, windowHeight/10, 'd' );
	Rect.color = "Red";

	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');
	wallLH.color = "White";
	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');
	wallRH.color = "White";
	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');
	wallTop.color = "White";
	wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');
	wallBot.color = "White";
}