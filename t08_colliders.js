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
	cnv = new Canvas( windowWidth, windowHeight-40);
	Circle = new Sprite(windowWidth/2, windowHeight/2, windowWidth/12, 'd' );
	
	Circle.color = "Red";
	Circle.rotationSpeed = -5;
	Circle.vel.x = 2;
	Circle.bounciness =1.5;
	Circle.drag =0.5;
	world.gravity.y = 10;
	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');
	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');
	// Create a group for the aliens
	alienGroup = new Group();
	Circle .collides(alienGroup, func2Call);

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

function func2Call(_Circle, _ssss) {

// Delete the alien which was hit

_ssss.remove();

}
/*******************************************************/
//  END OF APP
/*******************************************************/