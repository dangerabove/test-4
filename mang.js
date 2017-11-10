var m_angState = function(game){};

var bul1;
var player;
var bul1;
var bullets;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var style1 = { font: "bold 32px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
var pptext1;
var pptext2;
var pptext3;
var dif = 1;
var eb1s = 400;
var eb2s = 300;


m_angState.prototype = {

  	create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	background = game.add.sprite(0, 0, 'back');

    	player = game.add.sprite(this.game.world.centerX, 740, 'splayer');
    	game.physics.arcade.enable(player);
    	player.body.collideWorldBounds = true;
		player.anchor.setTo(0.5, 0.5);
		player.body.setSize(30, 60, 5, 5);

    	enemy = game.add.sprite(this.game.world.centerX, 400, 'p_ang');
    	enemy.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(enemy);

    /*eweapon1 = game.add.weapon(30, 'sb1');
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

    eweapon5 = game.add.weapon(8, 'sb1');
    eweapon5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon5.bulletSpeed = eb2s*dif*0.75;
    //eweapon4.fireRate = 2000/dif;
    eweapon5.trackSprite(enemy, 20, -200, true);*/

    bul1 = game.add.weapon(30, 'sb1');
    bul1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul1.bulletSpeed = 200;
    bul1.fireRate = 4000;
    bul1.trackSprite(enemy, 5, -200);
    bul1.fireAngle = 90;

    bul2 = game.add.weapon(30, 'sb1');
    bul2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul2.bulletSpeed = 200;
    bul2.fireRate = 4000;
    bul2.trackSprite(enemy, 5, -200);
    bul2.fireAngle = 70;

    bul3 = game.add.weapon(30, 'sb1');
    bul3.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul3.bulletSpeed = 200;
    bul3.fireRate = 4000;
    bul3.trackSprite(enemy, 5, -200);
    bul3.fireAngle = 110;

    bul4 = game.add.weapon(30, 'sb1');
    bul4.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul4.bulletSpeed = 300;
    bul4.fireRate = 2000;
    bul4.trackSprite(enemy, 5, -200);
    bul4.fireAngle = 90;

    bul11 = game.add.weapon(30, 'sb1');
    bul11.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul11.bulletSpeed = 150;
    bul11.fireRate = 6000;
    bul11.trackSprite(enemy, 5, -200);
    bul11.fireAngle = 60;

    bul12 = game.add.weapon(30, 'sb1');
    bul12.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul12.bulletSpeed = 150;
    bul12.fireRate = 6000;
    bul12.trackSprite(enemy, 5, -200);
    bul12.fireAngle = 75;

    bul13 = game.add.weapon(30, 'sb1');
    bul13.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul13.bulletSpeed = 150;
    bul13.fireRate = 6000;
    bul13.trackSprite(enemy, 5, -200);
    bul13.fireAngle = 90;

    bul14 = game.add.weapon(30, 'sb1');
    bul14.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul14.bulletSpeed = 150;
    bul14.fireRate = 6000;
    bul14.trackSprite(enemy, 5, -200);
    bul14.fireAngle = 105;

    bul15 = game.add.weapon(30, 'sb1');
    bul15.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul15.bulletSpeed = 150;
    bul15.fireRate = 6000;
    bul15.trackSprite(enemy, 5, -200);
    bul15.fireAngle = 120;

    bord1 = game.add.weapon(30, 'sb1');
    bord1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bord1.bulletSpeed = 300;
    bord1.fireRate = 1000;
    bord1.trackSprite(enemy, -350, -400);
    bord1.fireAngle = 90;

    bord2 = game.add.weapon(30, 'sb1');
    bord2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bord2.bulletSpeed = 300;
    bord2.fireRate = 1000;
    bord2.trackSprite(enemy, 350, -400);
    bord2.fireAngle = 90;


    /* if(dif = 1) {
    game.time.events.loop(1250, this.fire1, this);
    game.time.events.loop(1500, this.fire2, this);
    game.time.events.add(4000 , this.fire3, this);
    game.time.events.add(7000 , this.fire3, this);
    };
    if(dif = 2) {
    //game.time.events.loop(500, this.fire1, this);
    //game.time.events.loop(1000, this.fire2, this);
  }; */

      game.time.events.add(500  , this.text1    , this);
      game.time.events.add(6000 , this.text1Kill, this);
      game.time.events.add(17000, this.text2    , this);
      game.time.events.add(25000, this.text2Kill, this);
      game.time.events.add(35000, this.text3    , this);
      game.time.events.add(45000, this.text3Kill, this);
      game.time.events.add(60000, this.end      , this);

      /*game.time.events.add(1000  , this.fire1a, this);
      game.time.events.add(1000  , this.fire2a, this);
      game.time.events.add(1000  , this.fire3a, this);
      game.time.events.add(1000  , this.fire4a, this);
      game.time.events.add(1000  , this.fire5a, this);*/

    	cursors = game.input.keyboard.createCursorKeys() ;


		/*var slang = this.add.sprite(100, 200, 'slang');
		slang.inputEnabled = true;
		slang.events.onInputUp.add(this.end, this);*/
  	},

    /*fire1a: function(){game.time.events.loop(100, this.fire1b, this)},
    fire2a: function(){game.time.events.loop(100, this.fire2b, this)},
    fire3a: function(){game.time.events.loop(100, this.fire3b, this)},
    fire4a: function(){game.time.events.loop(100, this.fire4b, this)},
    fire11a: function(){game.time.events.loop(100, this.fire11b, this)},
    fire12a: function(){game.time.events.loop(100, this.fire12b, this)},
    fire13a: function(){game.time.events.loop(100, this.fire13b, this)},
    fire14a: function(){game.time.events.loop(100, this.fire14b, this)},
    fire15a: function(){game.time.events.loop(100, this.fire15b, this)},
    fireB1a: function(){game.time.events.loop(300, this.fireB1b, this)},
    fireB2a: function(){game.time.events.loop(300, this.fireB2b, this)},

    fireB1b: function() {bord1.fire()},
    fireB2b: function() {bord2.fire()},
    fire1b: function() {bul1.fire()},
    fire2b: function() {bul2.fire()},
    fire3b: function() {bul3.fire()},
    fire4b: function() {bul4.fire()},
    fire11b: function() {bul11.fire()},
    fire12b: function() {bul12.fire()},
    fire13b: function() {bul13.fire()},
    fire14b: function() {bul14.fire()},
    fire15b: function() {bul15.fire()},*/

	/*fire2: function() {
		eweapon2.fireAtXY(player.x-240, player.y);
		eweapon3.fireAtXY(player.x+240, player.y);
		eweapon4.fireAtXY(player.x, player.y);
	},

	fire3: function() {
		eweapon2.fireAtXY(250, 450);
		eweapon3.fireAtXY(400, 450);
		eweapon4.fireAtXY(550, 450);
  }, */

    text1: function(){
      pptext1 = game.add.text(120 , -70, "Ochotnicy? Nie ma? Wszyscy wygineli w Wietnamie...", style1);
      pptext1.setTextBounds(0, 100, 800, 100);
    },

    text1Kill: function(){pptext1.kill();},

    text2: function(){
      pptext2 = game.add.text(120, -70, "Credit for you!", style1);
      pptext2.setTextBounds(0, 100, 800, 100);
    },

    text2Kill: function(){pptext2.kill();},

    text3: function(){
      pptext3 = game.add.text(120, -70, "Rozpoczynamy następne ogniwo lekcyjne...", style1);
      pptext3.setTextBounds(0, 100, 800, 100);
    },

    text3Kill: function(){pptext3.kill();},

  	end: function(){
    	console.log('end');
		game.state.start('s_ang');
  	},

  	update: function() {

        bul1.fire();
        bul2.fire();
        bul3.fire();
        bul4.fire();

        bul11.fire();
        bul12.fire();
        bul13.fire();
        bul14.fire();
        bul15.fire();


        bord1.fire();
        bord2.fire();

		/*if(dif = 1) {if(eweapon1.fireRate > 401) {eweapon1.fireRate -= 1   ;};};
		if(dif = 2) {if(eweapon1.fireRate > 351) {eweapon1.fireRate -= 1.25;};};

      	game.physics.arcade.overlap(eweapon1.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(eweapon2.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(eweapon3.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(eweapon4.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
      	game.physics.arcade.overlap(eweapon5.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 5'); scrang += 5;});*/
        game.physics.arcade.overlap(bul1.bullets,     player, function(sb1, splayer){splayer.kill(); console.log('dostales 5'); scrang += 5;});

    	player.body.velocity.x = 0;
    	player.body.velocity.y = 0;

    	if(cursors.left.isDown)  {player.body.velocity.x -= 250;};
    	if(cursors.right.isDown) {player.body.velocity.x += 250;};
  	}
};
