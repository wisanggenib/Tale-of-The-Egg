const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

var platforms
var platforms2
var player
var fin
var kompor

function preload() {
  //inserting asset
  game.load.image('bg','assets/stage7/bg.png')
  game.load.image('kompor','assets/stage7/kompor.png')
  game.load.image('kompor1','assets/stage7/kompor1.png')
  game.load.image('kompor2','assets/stage7/kompor2.png')
  game.load.image('char','assets/stage4/char.png')
  game.load.image('api','assets/stage7/api.png')
  game.load.image('mentega','assets/stage7/mentega.png')
  game.load.image('mentega1','assets/stage7/mentega1.png')
  game.load.physics('sprite_physics','assets/stage7/p2_physics.json')


  //inserting asset position of finish
  game.load.image('finish','assets/1.bmp')
}


function create() {
  game.add.sprite(0,0,'bg')
  game.physics.startSystem(Phaser.Physics.P2JS);

  game.physics.p2.gravity.y = 9350;
  game.physics.p2.world.defaultContactMaterial.friction = 0.3;
  game.physics.p2.world.setGlobalStiffness(1e5);

  
  player = game.add.sprite(200, 00, 'char');
  game.physics.p2.enable(player);
  player.body.clearShapes();
	player.body.loadPolygon('sprite_physics', 'char');
  player.body.collideWorldBounds = true;
  player.body.fixedRotation = true;
  player.body.damping = 0.5;


  var spriteMaterial = game.physics.p2.createMaterial('spriteMaterial', player.body);
  var worldMaterial = game.physics.p2.createMaterial('worldMaterial');
  var boxMaterial = game.physics.p2.createMaterial('worldMaterial');

  game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

  kompor2 = game.add.sprite(450,550,'kompor2')
  game.physics.p2.enable(kompor2)
  kompor2.body.clearShapes()
  kompor2.body.loadPolygon('sprite_physics','kompor2')
  kompor2.body.kinematic = true;
  kompor2.body.mass = 6;
  kompor2.body.setMaterial(boxMaterial);


  var groundPlayerCM = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { friction: 0.0 });
  var groundBoxesCM = game.physics.p2.createContactMaterial(worldMaterial, boxMaterial, { friction: 0.6 });


  kompor = game.add.sprite(515,670,'kompor')
  game.physics.p2.enable(kompor)
  kompor.body.clearShapes()
  kompor.body.loadPolygon('sprite_physics','kompor')
  kompor.body.mass = 6;
  kompor.body.setMaterial(boxMaterial);
  kompor.body.kinematic = true;

  //player.body.gravity.y = 800
  


  cursors = game.input.keyboard.createCursorKeys();
}

function update() {

      player.body.setZeroVelocity();
      if (cursors.left.isDown)
      {
        player.body.moveLeft(400);
      }
      else if (cursors.right.isDown)
      {
        player.body.moveRight(400);
      }

      if (cursors.up.isDown)
      {
        player.body.moveUp(1000);
      }
      
      

}
//
//
function nextStage (obj1, obj2) {

  window.location = "stage4.html";

}

function reload (obj1, obj2) {

  window.location = "stage3.html";

}

function showPicture(fire) {

    //when showPicture called, make fire show in the game and body is enabled.
    fire.visible = true
    fire.body.enable = true

    // game.time.events.add(2000, this.removePicture, this, pic);
    //make randomtime to call funtion remove picture.
    game.time.events.add(game.rnd.between(1000, 3000), this.removePicture, this, fire);

}

function removePicture(fire) {


    fire.visible = false
    fire.body.enable = false

    // game.time.events.add(4000, this.showPicture, this, pic);
     game.time.events.add(game.rnd.between(1000, 3000), this.showPicture, this, fire);

}
