/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
	//Rect left/right
	if (kb.pressing('left')) {

    
		Rect.vel.x = -2
}

else if (kb.pressing ('right')) {

   	Rect.vel.x = 2   

};

if (kb.released('left')){
	Rect.vel.x = 0
}
else if (kb.released('right')){
	Rect.vel.x = 0
};

//Rect Up/down
if (kb.pressing('down')) {

    
	Rect.vel.y = 2
}

else if (kb.pressing ('up')) {

   	Rect.vel.y = -2   

};

if (kb.released('down')){
	Rect.vel.y = 0
}
else if (kb.released('up')){
	Rect.vel.y = 0
};
//Rect Rotation
if (kb.pressing('a')) {

    
	Rect.rotationSpeed = 2
}

else if (kb.pressing ('d')) {

   	Rect.rotationSpeed = -2   

};

if (kb.released('d')){
	Rect.rotationSpeed = 0
}
else if (kb.released('a')){
	Rect.rotationSpeed = 0
};
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/