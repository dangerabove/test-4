var fizaState = function(game){};

var ay="lmao";
var krem;
var tow;
var czipsy;
var bullets;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var style1 = { font: "bold 32px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
var fiztext1;
var fiztext2;
var fiztext3;
var dif = 1;
var eb1s = 400;
var eb2s = 300;


fizaState.prototype = {

  	create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	background = game.add.sprite(0, 0, 'back');

    	tow = game.add.sprite(this.game.world.centerX, 740, 'worker');
    	game.physics.arcade.enable(tow);
    	tow.body.collideWorldBounds = true;
      tow.anchor.setTo(0.5, 0.5);
			tow.body.setSize(60, 30);

    	dude = game.add.sprite(this.game.world.centerX, 440, 'pawlik');
    	dude.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(dude);
      dude.scale.setTo(0.5, 0.5);

      eweapon1 = game.add.weapon(30, 'kremy');
    eweapon1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon1.bulletSpeed = eb1s*dif*0.75;
    //eweapon1.fireRate = 1000/dif;
    eweapon1.trackSprite(dude, 20, -200, true);
    eweapon1.bullets.setAll('tracking', true);

    eweapon2 = game.add.weapon(30, 'kremy');
    eweapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon2.bulletSpeed = eb1s*dif*0.75;
    //eweapon2.fireRate = 2000/dif;
    eweapon2.trackSprite(dude, 20, -200, true);

    eweapon3 = game.add.weapon(30, 'kremy');
    eweapon3.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon3.bulletSpeed = eb1s*dif*0.75;
    //eweapon3.fireRate = 2000/dif;
    eweapon3.trackSprite(dude, 20, -200, true);

    eweapon4 = game.add.weapon(30, 'kremy');
    eweapon4.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon4.bulletSpeed = eb1s*dif*0.75;
    //eweapon4.fireRate = 2000/dif;
    eweapon4.trackSprite(dude, 20, -200, true);

    eweapon5 = game.add.weapon(8, 'dori');
    eweapon5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    eweapon5.bulletSpeed = eb2s*dif*0.75;
    //eweapon4.fireRate = 2000/dif;
    eweapon5.trackSprite(dude, 20, -200, true);

    czipsy = game.add.weapon(30, 'dori');
    czipsy.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    czipsy.bulletSpeed = 250;
    czipsy.fireRate = 2000;
    czipsy.bulletAngleVariance = 33;
    czipsy.trackSprite(dude, 20, -200);

    if(dif = 1) {
    game.time.events.loop(1000, this.fire1, this);
    game.time.events.loop(1250, this.fire2, this);
    game.time.events.add(2000, this.fire3, this);
    };
    if(dif = 2) {
    game.time.events.loop(500, this.fire1, this);
    game.time.events.loop(1000, this.fire2, this);
    };

      game.time.events.add(500, this.text1, this);
      game.time.events.add(6000, this.text1Kill, this);
      game.time.events.add(17000, this.text2, this);
      game.time.events.add(25000, this.text2Kill, this);
      game.time.events.add(35000, this.text3, this);
      game.time.events.add(45000, this.text3Kill, this);
    	game.time.events.add(60000, this.end, this);

    	cursors = game.input.keyboard.createCursorKeys();
  	},

    fire1: function() {
    eweapon1.fireAtSprite(tow);
  },

  fire2: function() {
    eweapon2.fireAtXY(tow.x-240, tow.y);
    eweapon3.fireAtXY(tow.x+240, tow.y);
    eweapon4.fireAtXY(tow.x, tow.y);
  },

  fire3: function() {
    eweapon2.fireAtXY(250, 450);
    eweapon3.fireAtXY(400, 450);
    eweapon4.fireAtXY(550, 450);
  },

    text1: function(){
      fiztext1 = game.add.text(120 , 70, "Uwaga klaso, dyktuję zadanie!", style1);
      fiztext1.setTextBounds(0, 100, 800, 100);
    },

    text1Kill: function(){
      fiztext1.kill();
    },

    text2: function(){
      fiztext2 = game.add.text(120, 70, "Uwaga trzaśnie!", style1);
      fiztext2.setTextBounds(0, 100, 800, 100);
    },

    text2Kill: function(){
      fiztext2.kill();
    },

    text3: function(){
      fiztext3 = game.add.text(120, 70, "Tyle zostało wam do matury.", style1);
      fiztext3.setTextBounds(0, 100, 800, 100);
    },

    text3Kill: function(){
      fiztext3.kill();
    },

  	end: function(){
    	console.log('end');
			game.state.start('wynikfiz');
  	},

  	update: function() {

        czipsy.fireAtSprite(tow);

        if(dif = 1) {
      if(eweapon1.fireRate > 401) {
      eweapon1.fireRate -= 1;
      };
      };

      if(dif = 2) {
      if(eweapon1.fireRate > 351) {
      eweapon1.fireRate -= 1.25;
      };
      };

      	game.physics.arcade.overlap(eweapon5.bullets, tow, function(kremy, worker){worker.kill(); console.log('dostales 1'); wynikangol = wynikangol - 1;});
        game.physics.arcade.overlap(eweapon2.bullets, tow, function(kremy, worker){worker.kill(); console.log('dostales 1'); wynikangol = wynikangol - 1;});
        game.physics.arcade.overlap(eweapon3.bullets, tow, function(kremy, worker){worker.kill(); console.log('dostales 1'); wynikangol = wynikangol - 1;});
        game.physics.arcade.overlap(eweapon4.bullets, tow, function(kremy, worker){worker.kill(); console.log('dostales 1'); wynikangol = wynikangol - 1;});
      	game.physics.arcade.overlap(eweapon1.bullets, tow, function(dori, worker){worker.kill(); console.log('dostales 5'); wynikangol = wynikangol + 5});
        game.physics.arcade.overlap(czipsy.bullets, tow, function(dori, worker){worker.kill(); console.log('dostales 5'); wynikangol = wynikangol + 5});

    	tow.body.velocity.x = 0;
    	tow.body.velocity.y = 0;

    	if(cursors.left.isDown) {
      	tow.body.velocity.x -= 250;
    	}
    	if(cursors.right.isDown) {
      	tow.body.velocity.x += 250;
    	}
  	}
	};
