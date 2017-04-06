var game = new Phaser.Game(800, 600, Phaser.AUTO);
var ay="lmao";
var krem;
var tow;
var czipsy;
var bullets;
var score;
var timer;
var total = 0;
var updateCounter;
var zzz;

var GameState = {
  preload: function() {
    this.load.image('back', 'obj/vaterland.png');
    this.load.image('worker', 'obj/player.png');
    this.load.image('duda', 'obj/dude.png');
    this.load.image('kremy', 'obj/krem.png');
    this.load.image('dori', 'obj/doritos.png');
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.sprite(0, 0, 'back');

    tow = game.add.sprite(this.game.world.centerX, 540, 'worker');
    game.physics.arcade.enable(tow);
    tow.body.collideWorldBounds = true;
    tow.anchor.setTo(0.5, 0.5);

    dude = game.add.sprite(this.game.world.centerX, 100, 'duda');
    dude.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(dude);

    krem = game.add.weapon(30, 'kremy');
    krem.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    krem.bulletSpeed = 200;
    krem.fireRate = 300;
    krem.bulletAngleVariance = 30;
    krem.trackSprite(dude, 14, 0);
    game.physics.arcade.enable(krem.bullets);

    czipsy = game.add.weapon(30, 'dori');
    czipsy.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    czipsy.bulletSpeed = 250;
    czipsy.fireRate = 2000;
    czipsy.bulletAngleVariance = 33;
    czipsy.trackSprite(dude, 14, 0);

    game.time.events.add(45000, this.end, this);

    cursors = game.input.keyboard.createCursorKeys();
  },

  end: function(){
    console.log('end');
  },

  update: function() {
    krem.fireAtSprite(tow);
    czipsy.fireAtSprite(tow);

    game.physics.arcade.overlap(krem.bullets, tow, function(kremy, worker){worker.kill(); console.log('dostales 1');});
    game.physics.arcade.overlap(czipsy.bullets, tow, function(dori, worker){worker.kill(); console.log('dostales 5');});

    tow.body.velocity.x = 0;
    tow.body.velocity.y = 0;

    if(cursors.left.isDown) {
      tow.body.velocity.x -= 250;
    }
    if(cursors.right.isDown) {
      tow.body.velocity.x += 250;
    }
  }
}

    game.state.add('GameState', GameState);
game.state.start('GameState');
