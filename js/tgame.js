var tgameState = function(game){};

var ay="lmao";
var krem;
var tow;
var czipsy;
var bullets;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var style1 = { font: "bold 32px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
var text1;
var text2;
var text3;

tgameState.prototype = {

  	create: function() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	background = game.add.sprite(0, 0, 'back');

    	tow = game.add.sprite(this.game.world.centerX, 740, 'worker');
    	game.physics.arcade.enable(tow);
    	tow.body.collideWorldBounds = true;
    	tow.anchor.setTo(0.5, 0.5);
			tow.body.setSize(60, 30);

    	dude = game.add.sprite(this.game.world.centerX, 400, 'duda');
    	dude.anchor.setTo(0.5, 0.5);
    	game.physics.arcade.enable(dude);

    	krem = game.add.weapon(30, 'kremy');
    	krem.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    	krem.bulletSpeed = 200;
    	krem.fireRate = 300;
    	krem.bulletAngleVariance = 30;
    	krem.trackSprite(dude, 0, -80);
    	game.physics.arcade.enable(krem.bullets);

    	czipsy = game.add.weapon(30, 'dori');
    	czipsy.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    	czipsy.bulletSpeed = 250;
    	czipsy.fireRate = 1500;
    	czipsy.bulletAngleVariance = 33;
    	czipsy.trackSprite(dude, 0, -80);

      game.time.events.add(500, this.text1, this);
      game.time.events.add(6000, this.text1Kill, this);
      game.time.events.add(17000, this.text2, this);
      game.time.events.add(25000, this.text2Kill, this);
      game.time.events.add(35000, this.text3, this);
      game.time.events.add(45000, this.text3Kill, this);
    	game.time.events.add(60000, this.end, this);

    	cursors = game.input.keyboard.createCursorKeys();
  	},

    text1: function(){
      text1 = game.add.text(100 , -50, "Pytania, prośby, skargi, wnioski?", style1);
      text1.setTextBounds(0, 100, 800, 100);
    },

    text1Kill: function(){
      text1.kill();
    },

    text2: function(){
      text2 = game.add.text(100, -50, "CZUJESZ TO???", style1);
      text2.setTextBounds(0, 100, 800, 100);
    },

    text2Kill: function(){
      text2.kill();
    },

    text3: function(){
      text3 = game.add.text(100, -50, "No dobre pomarańczowe no...", style1);
      text3.setTextBounds(0, 100, 800, 100);
    },

    text3Kill: function(){
      text3.kill();
    },

  	end: function(){
    	console.log('end');
			game.state.start('score');
  	},

  	update: function() {
    	krem.fireAtSprite(tow);
    	czipsy.fireAtSprite(tow);

    	game.physics.arcade.overlap(krem.bullets, tow, function(kremy, worker){worker.kill(); console.log('dostales 1'); wynikgegra += 1; ocenygeg+=1;});
    	game.physics.arcade.overlap(czipsy.bullets, tow, function(dori, worker){worker.kill(); console.log('dostales 5'); wynikgegra += 5; ocenygeg+=1;});

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
