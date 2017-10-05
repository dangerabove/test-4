var s_ppState = function(game){};

s_ppState.prototype = {
	create: function() {
	
	var scr = 0;
	
	if(75 * dif <= scrpp) {scr = 6;}
	else if(60 * dif <= scrpp) {scr = 5;}
	else if(45 * dif <= scrpp) {scr = 4;}
	else if(25 * dif <= scrpp) {scr = 3;}
	else if(10 * dif <= scrpp) {scr = 2;}				
	else if(0  * dif <= scrpp) {scr = 1;}

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	text = game.add.text(80, 0, "Twoja ocena: " + scr, style);
	text1 = game.add.text(60, 200, 'NACIŚNIJ STRZAŁKĘ DO GÓRY ABY WRÓCIĆ DO MENU', style);
    text.setTextBounds(0, 100, 800, 100);

	cursors = game.input.keyboard.createCursorKeys();

	},
	update: function() {

		if(cursors.up.isDown) {
			game.state.start('init');
		}
	}

};
