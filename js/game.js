var game = new Phaser.Game(1000, 800, Phaser.AUTO);

var wynikgegra = 0;
var wynikfiz = 0;
var wynikangol = 0;
var wynikpp = 0;
var wynikwf = 0;
var oceny = 0;
var ocenyfiz = 0;
var ocenypp = 0;
var ocenygeg = 0;

game.state.add('init', initState);
game.state.add('tgame', tgameState);
game.state.add('score', scoreState);
game.state.add('pp', podstawyState);
game.state.add('fiza', fizaState);
game.state.add('wynikfiz', wynikfizState);
game.state.add('angol', angolState);
game.state.add('wynikang', wynikangState);
game.state.add('wynikpp', wynikpodstawyState);
game.state.add('wf', wynikwfState);
game.state.add('wynikwf', wynikwfState);
//game.state.add('korzeb', korzebState);

game.state.start('init');
