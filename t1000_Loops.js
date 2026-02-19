// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas( windowWidth, windowHeight-40);
	

	//create a line of 10 sprites across the top of the screen
for (var i = 0; i < 11; i++) {
	spriteColor = color(random(255), random(255), random(255))
  	for (var x = 0; x < 25; x++) {
  	var block = new Sprite(x*80+ 40, i*80+40 ,50 , 50 , 'k');
	block.color = spriteColor;
  }
}

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