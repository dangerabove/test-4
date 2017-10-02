var initState = function(game){};

initState.prototype = {
	preload: function(){
		//preload
		this.game.load.image('slgeo', 'obj/geo.png');
		this.game.load.image('slfiz', 'obj/fiz.png');
		this.game.load.image('slang', 'obj/ang.png');
		this.game.load.image('slpp' , 'obj/pp.png' );
		this.game.load.image('slwf' , 'obj/wf.png' );
		this.game.load.image('tlo'  , 'obj/tlo.jpg');
		
		this.game.load.image('p_geo', 'obj/pgeo.png');
		this.game.load.image('p_fiz', 'obj/pfiz.png');
		this.game.load.image('p_ang', 'obj/pang.png');
		this.game.load.image('p_pp' , 'obj/ppp.png' );
		
		this.game.load.image('back'   , 'obj/back.png'  );
		this.game.load.image('splayer', 'obj/player.png');
		this.game.load.image('sb1'    , 'obj/b1.png'    );
		this.game.load.image('sb5'    , 'obj/b5.png'    );
	},
	
	slgeo:function() {
		//enem = 4;
		game.state.start('m_geo');
	},
	slfiz:function() {
		//enem = 3;
		game.state.start('m_fiz');
	},
	slang:function() {
		//enem = 1;
		game.state.start('m_ang');
	},
	slpp:function() {
		//enem = 5;
		game.state.start('m_pp');
	},
	slwf:function() {
		//enem = 2;
		game.state.start('s_wf');
	},
	
	create:function() {
		
		background = game.add.sprite(0, 0, 'tlo');
		var title = game.add.text(300,50, 'Wybierz przedmiot', {font:'50px',fill: '#ffffff'});
		
		var slgeo = this.add.sprite(250, 500, 'slgeo');
		var slfiz = this.add.sprite(700, 200, 'slfiz');
		var slang = this.add.sprite(100, 200, 'slang');
		var slpp = this.add.sprite( 550, 500, 'slpp' );
		var slwf = this.add.sprite( 400, 200, 'slwf' );
		
		slgeo.inputEnabled = true;
		slfiz.inputEnabled = true;
		slang.inputEnabled = true;
		slpp.inputEnabled = true;
		slwf.inputEnabled = true;
		
		slgeo.events.onInputUp.add(this.slgeo, this);
		slfiz.events.onInputUp.add(this.slfiz, this);
		slang.events.onInputUp.add(this.slang, this);
		slpp.events.onInputUp.add(this.slpp  , this);
		slwf.events.onInputUp.add(this.slwf  , this);
	},

};
