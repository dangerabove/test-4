var game = new Phaser.Game(1000, 800, Phaser.AUTO);

var scrgeo = 0;
var scrfiz = 0;
var scrang = 0;
var scrpp = 0;
var cntgeo = 0;
var cntfiz = 0;
var cntang = 0;
var cntpp = 0;


game.state.add('init', initState);

game.state.add('m_geo', m_geoState);
game.state.add('s_geo', s_geoState);

game.state.add('m_fiz', m_fizState);
game.state.add('s_fiz', s_fizState);

game.state.add('m_ang', m_angState);
game.state.add('s_ang', s_angState);

game.state.add('m_pp', m_ppState);
game.state.add('s_pp', s_ppState);

game.state.add('m_wf', m_wfState);
game.state.add('s_wf', s_wfState);

game.state.start('init');
