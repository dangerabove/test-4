var initState = function(game){};

initState.prototype = {
	preload: function(){
		//preload
		this.game.load.image('pic1','obj/ang.png');
		this.game.load.image('pic2','obj/wf.png');
		this.game.load.image('pic3','obj/fiz.png');
		this.game.load.image('pic4','obj/geo.png');
		this.game.load.image('pic5','obj/pp.png');
		this.game.load.image('back', 'obj/vaterland.png');
		this.game.load.image('worker', 'obj/player.png');
		this.game.load.image('duda', 'obj/dude.png');
		this.game.load.image('kremy', 'obj/krem.png');
		this.game.load.image('dori', 'obj/doritos.png');
		this.game.load.image('tlo', 'obj/tlo.jpg');
		this.game.load.image('pawlik', 'obj/pawlik.png');
		this.game.load.image('robert', 'obj/wiejek.png');
	},
	spic1:function() {
		//enem = 1;
		game.state.start('angol');
	},
	spic2:function() {
		//enem = 2;
		game.state.start('tgame');
	},
	spic3:function() {
		//enem = 3;
		game.state.start('fiza');
	},
	spic4:function() {
		//enem = 4;
		game.state.start('tgame');
	},
	spic5:function() {
		//enem = 5;
		game.state.start('tgame');
	},
	create:function() {
		//create
		//game.state.start('select');
		background = game.add.sprite(0, 0, 'tlo');
		var pic1 = this.add.sprite(100, 200, 'pic1');
		var pic2 = this.add.sprite(400, 200, 'pic2');
		var pic3 = this.add.sprite(700, 200, 'pic3');
		var pic4 = this.add.sprite(250, 500, 'pic4');
		var pic5 = this.add.sprite(550, 500, 'pic5');
		var title = game.add.text(300,50, 'Wybierz przedmiot', {font:'50px',fill: '#ffffff'});
		pic1.inputEnabled = true;
		pic2.inputEnabled = true;
		pic3.inputEnabled = true;
		pic4.inputEnabled = true;
		pic5.inputEnabled = true;
		pic1.events.onInputUp.add(this.spic1, this);
		pic2.events.onInputUp.add(this.spic2, this);
		pic3.events.onInputUp.add(this.spic3, this);
		pic4.events.onInputUp.add(this.spic4, this);
		pic5.events.onInputUp.add(this.spic5, this);
	},

};
