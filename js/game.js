var game = new Phaser.Game(800, 600, Phaser.AUTO);

var fireRate = 400;
var nextFire = 0;
var ay="lmao";

var GameState = {
  preload: function() {
    this.load.image('back', 'obj/vaterland.png');
    this.load.image('worker', 'obj/player.png');
    this.load.image('duda', 'obj/dude.jpg');
    this.load.image('krem', 'obj/krem.png');
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.sprite(0, 0, 'back');

    tow = game.add.sprite(this.game.world.centerX, 540, 'worker');
    game.physics.arcade.enable(tow);
    tow.body.collideWorldBounds = true;
    tow.anchor.setTo(0.5, 0.5);

    dude = game.add.sprite(this.game.world.centerX, 100, 'duda');
    dude.scale.setTo(0.4, 0.4);
    dude.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(dude);

    bullet = game.add.group();
        bullet.enableBody = true;
        bullet.scale.setTo(0.2, 0.2);
        bullet.physicsBodyType = Phaser.Physics.ARCADE;
        bullet.createMultiple(30, 'krem', 0, false);
        bullet.setAll('anchor.x', 0.5);
        bullet.setAll('anchor.y', 0.5);
        bullet.setAll('outOfBoundsKill', true);
        bullet.setAll('checkWorldBounds', true);
        bullet.x = 400;
        bullet.y = 100;

    cursors = game.input.keyboard.createCursorKeys();
  },

  update: function() {
    if (game.time.now > nextFire) {
        nextFire = game.time.now + fireRate;
        var shot = bullet.getFirstExists(false);
        shot.reset(0 , 0);
        game.physics.arcade.moveToXY(shot, tow.x-400, tow.y-100, 2000);
      }

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
