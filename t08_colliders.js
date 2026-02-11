/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	alienGroup.collides(ball_1, func2Call);
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
	// Create a group for the aliens
	alienGroup = new Group();

	for (i = 0; i < 5; i++) {
  alien = new Sprite(windowWidth/4, windowHeight/2, windowWidth/12, windowHeight/15);
	const VELARRAY = [-1, 1];
	randNum = random(4, 7) * random(VELARRAY);
  alien.vel.x = randNum;
  alien.vel.y = randNum;
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
}
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
}

function func2Call(_ball_1, _ssss) {

// Delete the alien which was hit

_ssss.remove();

}
/*******************************************************/
//  END OF APP
/*******************************************************/