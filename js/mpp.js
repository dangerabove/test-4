var m_ppState = function(game){};

var bul1;
var player;
var bul5;
var bullets;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var style1 = { font: "bold 32px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
var style2 = { font: "bold 32px Arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
var pptext1;
var pptext2;
var pptext3;
var dif = 1;
var clock1 = 45;
var clock2 = 0;


m_ppState.prototype = {

  	create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	background = game.add.sprite(0, 0, 'back');

    	player = game.add.sprite(this.game.world.centerX, 740, 'splayer');
    	game.physics.arcade.enable(player);
    	player.body.collideWorldBounds = true;
		player.anchor.setTo(0.5, 0.5);
		player.body.setSize(20, 55, 10, 2);

    	enemy = game.add.sprite(this.game.world.centerX, 400, 'p_pp');
    	enemy.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(enemy);

    eweapon1 = game.add.weapon(30, 'sb1');
    eweapon1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon1.bulletSpeed = eb1s*dif*0.75;
    //eweapon1.fireRate = 1000/dif;
    eweapon1.trackSprite(enemy, 20, -200, true);
    eweapon1.bullets.setAll('tracking', true);

    eweapon2 = game.add.weapon(30, 'sb1');
    eweapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon2.bulletSpeed = eb1s*dif*0.75;
    //eweapon2.fireRate = 2000/dif;
    eweapon2.trackSprite(enemy, 20, -200, true);

    eweapon3 = game.add.weapon(30, 'sb1');
    eweapon3.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon3.bulletSpeed = eb1s*dif*0.75;
    //eweapon3.fireRate = 2000/dif;
    eweapon3.trackSprite(enemy, 20, -200, true);

    eweapon4 = game.add.weapon(30, 'sb1');
    eweapon4.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon4.bulletSpeed = eb1s*dif*0.75;
    //eweapon4.fireRate = 2000/dif;
    eweapon4.trackSprite(enemy, 20, -200, true);

    eweapon5 = game.add.weapon(8, 'sb5');
    eweapon5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon5.bulletSpeed = eb2s*dif*0.75;
    //eweapon4.fireRate = 2000/dif;
    eweapon5.trackSprite(enemy, 20, -200, true);

    bul5 = game.add.weapon(30, 'sb5');
    bul5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul5.bulletSpeed = 250;
    bul5.fireRate = 2000;
    bul5.bulletAngleVariance = 33;
    bul5.trackSprite(enemy, 20, -200);

    timer = game.add.text(0 , 0, clock1, style2);
    timer.setTextBounds(50, 50, 900, 0);

    if(dif = 1) {
    game.time.events.loop(1250, this.fire1, this);
    game.time.events.loop(1500, this.fire2, this);
    game.time.events.add(4000 , this.fire3, this);
    game.time.events.add(7000 , this.fire3, this);
    };
    if(dif = 2) {
    //game.time.events.loop(500, this.fire1, this);
    //game.time.events.loop(1000, this.fire2, this);
    };

      game.time.events.add(100  , this.text1    , this);
      game.time.events.add(5000 , this.text1Kill, this);
      game.time.events.add(15000, this.text2    , this);
      game.time.events.add(20000, this.text2Kill, this);
      game.time.events.add(30000, this.text3    , this);
      game.time.events.add(35000, this.text3Kill, this);
      game.time.events.add(45000, this.end      , this);

    	cursors = game.input.keyboard.createCursorKeys();
  	},

    fire1: function() {eweapon1.fireAtSprite(player);},

	fire2: function() {
		eweapon2.fireAtXY(player.x-240, player.y);
		eweapon3.fireAtXY(player.x+240, player.y);
		eweapon4.fireAtXY(player.x, player.y);
	},

	fire3: function() {
		eweapon2.fireAtXY(250, 450);
		eweapon3.fireAtXY(400, 450);
		eweapon4.fireAtXY(550, 450);
	},

    text1: function(){
      pptext1 = game.add.text(120 , -70, "Ankieta!", style1);
      pptext1.setTextBounds(0, 100, 800, 100);
    },

    text1Kill: function(){pptext1.kill();},

    text2: function(){
      pptext2 = game.add.text(120, -70, "Bardzo dobrze, dostatecznie...", style1);
      pptext2.setTextBounds(0, 100, 800, 100);
    },

    text2Kill: function(){pptext2.kill();},

    text3: function(){
      pptext3 = game.add.text(120, -70, "Tetraplegia!", style1);
      pptext3.setTextBounds(0, 100, 800, 100);
    },

    text3Kill: function(){pptext3.kill();},

  	end: function(){
    	console.log('end');
		game.state.start('s_pp');
  	},

  	update: function() {

        bul5.fireAtSprite(player);

        clock2 += 1;
        if(clock2>=60) {clock1 -= 1; clock2 = 0};
        timer.setText(clock1);

		if(dif = 1) {if(eweapon1.fireRate > 401) {eweapon1.fireRate -= 1   ;};};
		if(dif = 2) {if(eweapon1.fireRate > 351) {eweapon1.fireRate -= 1.25;};};

      	game.physics.arcade.overlap(eweapon1.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrpp -= 2;});
        game.physics.arcade.overlap(eweapon2.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrpp -= 2;});
        game.physics.arcade.overlap(eweapon3.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrpp -= 2;});
        game.physics.arcade.overlap(eweapon4.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrpp -= 2;});
      	game.physics.arcade.overlap(eweapon5.bullets, player, function(sb5, splayer){splayer.kill(); console.log('dostales 5'); scrpp += 5;});
        game.physics.arcade.overlap(bul5.bullets    , player, function(sb5, splayer){splayer.kill(); console.log('dostales 5'); scrpp += 5;});

    	player.body.velocity.x = 0;
    	player.body.velocity.y = 0;

    	if(cursors.left.isDown)  {player.body.velocity.x -= 250;};
    	if(cursors.right.isDown) {player.body.velocity.x += 250;};
  	}
};
