var m_geoState = function(game){};

var bul1;
var bul5
var player;
var bullets;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var style1 = { font: "bold 32px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
var style2 = { font: "bold 32px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
var text1;
var text2;
var text3;
var dif = 1;
var clock1 = 45;
var clock2 = 0;

m_geoState.prototype = {

  	create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	background = game.add.sprite(0, 0, 'back');

		player = game.add.sprite(this.game.world.centerX, 740, 'splayer');
    	game.physics.arcade.enable(player);
    	player.body.collideWorldBounds = true;
    	player.anchor.setTo(0.5, 0.5);
		player.body.setSize(20, 55, 10, 2);

    	enemy = game.add.sprite(this.game.world.centerX, 400, 'p_geo');
    	enemy.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(enemy);

    	bul1 = game.add.weapon(30, 'sb1');
    	bul1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    	bul1.bulletSpeed = 200*dif;
    	bul1.fireRate = 300/dif;
    	bul1.bulletAngleVariance = 30;
    	bul1.trackSprite(enemy, 0, -80);
    	game.physics.arcade.enable(bul1.bullets);

    	bul5 = game.add.weapon(30, 'sb5');
    	bul5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    	bul5.bulletSpeed = 250*dif;
    	bul5.fireRate = 1500*dif;
    	bul5.bulletAngleVariance = 33;
    	bul5.trackSprite(enemy, 0, -80);

      timer = game.add.text(0 , 0, clock1, style2);
      timer.setTextBounds(50, 50, 900, 0);

        game.time.events.add(100  , this.text1    , this);
        game.time.events.add(5000 , this.text1Kill, this);
        game.time.events.add(15000, this.text2    , this);
        game.time.events.add(20000, this.text2Kill, this);
        game.time.events.add(30000, this.text3    , this);
        game.time.events.add(35000, this.text3Kill, this);
    	game.time.events.add(45000, this.end      , this);

    	cursors = game.input.keyboard.createCursorKeys();
  	},

    text1: function(){
      text1 = game.add.text(100 , -50, "Pytania, prośby, skargi, wnioski?", style1);
      text1.setTextBounds(0, 100, 800, 100);
    },

    text1Kill: function(){text1.kill();},

    text2: function(){
      text2 = game.add.text(100, -50, "CZUJESZ TO???", style1);
      text2.setTextBounds(0, 100, 800, 100);
      dif += 0.5;
    },

    text2Kill: function(){text2.kill();},

    text3: function(){
      text3 = game.add.text(100, -50, "No dobre pomarańczowe no...", style1);
      text3.setTextBounds(0, 100, 800, 100);
      dif += 0.5;
    },

    text3Kill: function(){text3.kill();},

  	end: function(){
    	console.log('end');
		game.state.start('s_geo');
  	},

  	update: function() {
    	bul1.fireAtSprite(player);
    	bul5.fireAtSprite(player);

      clock2 += 1;
      if(clock2>=60) {clock1 -= 1; clock2 = 0};
      timer.setText(clock1);

    	game.physics.arcade.overlap(bul1.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrgeo += 2;});
    	game.physics.arcade.overlap(bul5.bullets, player, function(sb5, splayer){splayer.kill(); console.log('dostales 5'); scrgeo += 5;});

    	player.body.velocity.x = 0;
    	player.body.velocity.y = 0;

    	if(cursors.left.isDown)  {player.body.velocity.x -= 250/dif;};
    	if(cursors.right.isDown) {player.body.velocity.x += 250/dif;};
	}
};
