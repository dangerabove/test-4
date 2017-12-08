var m_angState = function(game){};

var bul1;
var player;
var bul1;
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


m_angState.prototype = {

  	create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	background = game.add.sprite(0, 0, 'back');

    	player = game.add.sprite(this.game.world.centerX, 740, 'splayer');
    	game.physics.arcade.enable(player);
    	player.body.collideWorldBounds = true;
		player.anchor.setTo(0.5, 0.5);
		player.body.setSize(20, 55, 10, 2);

    	enemy = game.add.sprite(this.game.world.centerX, 400, 'p_ang');
    	enemy.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(enemy);

    bul1 = game.add.weapon(30, 'sb1');
    bul1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul1.bulletSpeed = 200*dif;
    bul1.fireRate = 4000/dif;
    bul1.trackSprite(enemy, 5, -200);
    bul1.fireAngle = 90;

    bul2 = game.add.weapon(30, 'sb1');
    bul2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul2.bulletSpeed = 200*dif;
    bul2.fireRate = 4000/dif;
    bul2.trackSprite(enemy, 5, -200);
    bul2.fireAngle = 70;

    bul3 = game.add.weapon(30, 'sb1');
    bul3.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul3.bulletSpeed = 200*dif;
    bul3.fireRate = 4000/dif;
    bul3.trackSprite(enemy, 5, -200);
    bul3.fireAngle = 110;

    bul4 = game.add.weapon(30, 'sb1');
    bul4.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul4.bulletSpeed = 300*dif;
    bul4.fireRate = 2000/dif;
    bul4.trackSprite(enemy, 5, -200);
    bul4.fireAngle = 90;

    bul5 = game.add.weapon(30, 'sb5');
    bul5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul5.bulletSpeed = 200*dif;
    bul5.fireRate = 4000/dif;
    bul5.trackSprite(enemy, 5, -200);

    bul11 = game.add.weapon(30, 'sb1');
    bul11.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul11.bulletSpeed = 150*dif;
    bul11.fireRate = 6000/dif;
    bul11.trackSprite(enemy, 5, -200);
    bul11.fireAngle = 60;

    bul12 = game.add.weapon(30, 'sb1');
    bul12.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul12.bulletSpeed = 150*dif;
    bul12.fireRate = 6000/dif;
    bul12.trackSprite(enemy, 5, -200);
    bul12.fireAngle = 75;

    bul13 = game.add.weapon(30, 'sb1');
    bul13.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul13.bulletSpeed = 150*dif;
    bul13.fireRate = 6000/dif;
    bul13.trackSprite(enemy, 5, -200);
    bul13.fireAngle = 90;

    bul14 = game.add.weapon(30, 'sb1');
    bul14.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul14.bulletSpeed = 150*dif;
    bul14.fireRate = 6000/dif;
    bul14.trackSprite(enemy, 5, -200);
    bul14.fireAngle = 105;

    bul15 = game.add.weapon(30, 'sb1');
    bul15.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bul15.bulletSpeed = 150*dif;
    bul15.fireRate = 6000/dif;
    bul15.trackSprite(enemy, 5, -200);
    bul15.fireAngle = 120;

    bord1 = game.add.weapon(30, 'sb1');
    bord1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bord1.bulletSpeed = 300*dif;
    bord1.fireRate = 1000/dif;
    bord1.trackSprite(enemy, -350, -400);
    bord1.fireAngle = 90;

    bord2 = game.add.weapon(30, 'sb1');
    bord2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    bord2.bulletSpeed = 300*dif;
    bord2.fireRate = 1000/dif;
    bord2.trackSprite(enemy, 350, -400);
    bord2.fireAngle = 90;

    timer = game.add.text(0 , 0, clock1, style2);
    timer.setTextBounds(50, 50, 900, 0);


      game.time.events.add(100  , this.text1    , this);
      game.time.events.add(5000 , this.text1Kill, this);
      game.time.events.add(15000, this.text2    , this);
      game.time.events.add(20000, this.text2Kill, this);
      game.time.events.add(30000, this.text3    , this);
      game.time.events.add(35000, this.text3Kill, this);
      game.time.events.add(45000, this.end      , this);

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
      dif += 0.5;
    },

    text2Kill: function(){pptext2.kill();},

    text3: function(){
      pptext3 = game.add.text(120, -70, "Rozpoczynamy następne ogniwo lekcyjne...", style1);
      pptext3.setTextBounds(0, 100, 800, 100);
      dif += 0.5;
    },

    text3Kill: function(){pptext3.kill();},

  	end: function(){
    	console.log('end');
		game.state.start('s_ang');
  	},

  	update: function() {
      game.debug.body(player);

        /*bul1.fireAtSprite(player);
        bul1.bulletSpeed = 200*dif;
        bul1.fireRate = 4000/dif;*/
        bul2.fireAtXY(player.x-200,player.y);
        bul2.bulletSpeed = 200*dif;
        bul2.fireRate = 4000/dif;
        bul3.fireAtXY(player.x,player.y);
        bul3.bulletSpeed = 200*dif;
        bul3.fireRate = 4000/dif;
        bul4.fireAtXY(player.x+200,player.y);
        bul4.bulletSpeed = 200*dif;
        bul4.fireRate = 4000/dif;
        bul5.fireAtXY(game.rnd.integerInRange(0.3,1.7)*this.game.world.centerX, player.y);
        bul5.bulletSpeed = 200*(3*dif/4);
        bul5.fireRate = 4000*(3*dif/4);

        bul11.fire();
        bul12.fire();
        bul13.fire();
        bul14.fire();
        bul15.fire();

        bord1.fire();
        bord1.bulletSpeed = 300*dif;
        bord1.fireRate = 1000/dif;
        bord2.fire();
        bord2.bulletSpeed = 300*dif;
        bord2.fireRate = 1000/dif;

        clock2 += 1;
        if(clock2>=60) {clock1 -= 1; clock2 = 0};
        timer.setText(clock1);

		/*if(dif = 1) {if(eweapon1.fireRate > 401) {eweapon1.fireRate -= 1   ;};};
		if(dif = 2) {if(eweapon1.fireRate > 351) {eweapon1.fireRate -= 1.25;};};

      	game.physics.arcade.overlap(eweapon5.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 5'); scrang += 5;});*/
        game.physics.arcade.overlap(bul1.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul2.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul3.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul4.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul11.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul12.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul13.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul14.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul15.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bord1.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bord2.bullets, player, function(sb1, splayer){splayer.kill(); console.log('dostales 1'); scrang -= 2;});
        game.physics.arcade.overlap(bul5.bullets, player, function(sb5, splayer){splayer.kill(); console.log('dostales 5'); scrang -= 5;});

    	player.body.velocity.x = 0;
    	player.body.velocity.y = 0;

    	if(cursors.left.isDown)  {player.body.velocity.x -= 250;};
    	if(cursors.right.isDown) {player.body.velocity.x += 250;};
  	}
};
