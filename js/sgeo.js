var s_geoState = function(game){};

s_geoState.prototype = {
	create: function() {

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    text = game.add.text(80, 0, "Twoja ocena: " + Math.floor(scrgeo/cntgeo), style);
		text1 = game.add.text(60, 200, 'NACIŚNIJ STRZAŁKĘ DO GÓRY ABY WRÓCIĆ DO MENU', style);

    //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
    text.setTextBounds(0, 100, 800, 100);

		cursors = game.input.keyboard.createCursorKeys();

	},
	update: function() {

		if(cursors.up.isDown) {
			game.state.start('init');
		}
	}

};
