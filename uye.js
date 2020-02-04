const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

var platforms
var platforms2
var player
var fin
var kompor
var showDebug = true;
function preload() {
  //inserting asset
  game.load.image('bg','assets/stage7/bg.png')
  game.load.image('char','assets/stage4/char.png')
  game.load.image('persegi','assets/button_shape_rectangle-512.png')
  game.load.image('lingkaran','assets/lingkaran.png')
  game.load.image('segitiga','assets/segitiga.png')
  game.load.image('plima','assets/segilima.png')
  game.load.image('api','assets/stage7/api.png')
  game.load.physics('sprite_physics','assets/stage7/p2_physics2_try.json')

  //inserting asset position of finish
}


function create() {
    game.stage.backgroundColor = "#FFFFFF";
  //add game physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // lingkaran = game.add.sprite(100, 200, 'lingkaran');
     //plima = game.add.sprite(100, 200, 'plima');
    //segitiga = game.add.sprite(100, 200, 'segitiga');
     //persegi = game.add.sprite(100, 200, 'persegi');
	 char = game.add.sprite(550, 200, 'char');
	 api = game.add.sprite(300, 400, 'api');

    game.physics.arcade.enable(char);
    game.physics.arcade.enable(api);
    game.input.onDown.add(toggle, this);
    // game.physics.p2.enable([ block, wizball ], true);


	// //	Convex polys
	// char.body.clearShapes();
	// char.body.loadPolygon('sprite_physics', 'char');

	// persegi.body.clearShapes();
	// persegi.body.loadPolygon('sprite_physics', 'button_shape_rectangle-512');
}

function update() {
    game.debug.body(char);
    game.debug.body(api);
}
function toggle() {

    showDebug = (showDebug) ? false : true;

    if (!showDebug)
    {
        game.debug.reset();
    }

}
