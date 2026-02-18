// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas( windowWidth, windowHeight-40);
	world.gravity.y = 1000;

	Rect = new Sprite(windowWidth/2, windowHeight/2, windowWidth/5, windowHeight/10, 'd' );
	Rect.color = "Red";

	wallLH  = new Sprite(0, windowHeight/2, 8, windowHeight, 'k');
	wallLH.color = "Black";
	wallRH  = new Sprite(windowWidth, windowHeight/2, 8, windowHeight, 'k');
	wallRH.color = "Black";
	wallTop = new Sprite(windowWidth/2, 0, windowWidth, 8, 'k');
	wallTop.color = "Black";
	wallBot = new Sprite(windowWidth/2, windowHeight, windowWidth, 8, 'k');
	wallBot.color = "Black";
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
//Rect left/right
if (kb.pressing('left_arrow')) {
	Rect.vel.x = -20
}

else if (kb.pressing ('right_arrow')) {
   	Rect.vel.x = 20  
};

if (kb.released('left_arrow')){
	Rect.vel.x = 0
}
else if (kb.released('right_arrow')){
	Rect.vel.x = 0
};

//Rect Up/down
if (kb.pressing('down')) {
    	Rect.vel.y = 20
}

else if (kb.pressing ('up')) {
   	Rect.vel.y = -20
};

if (kb.released('down')){
	Rect.vel.y = 0
}
else if (kb.released('up')){
	Rect.vel.y = 0
};
//Rect Rotation
if (kb.pressing('e')) {
	Rect.rotationSpeed = 20
}

else if (kb.pressing ('q')) {
   	Rect.rotationSpeed = -20   
};

if (kb.released('q')){
	Rect.rotationSpeed = 0
}
else if (kb.released('e')){
	Rect.rotationSpeed = 0
};
	text("Goodbye Tombspotting", 50, 50) 

var name = "I'm Mr Barker";

text(name+ " and I can't code ", 50, 100);
}
/*******************************************************/
//  END OF APP
/*******************************************************/