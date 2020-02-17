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


  mentega = game.add.sprite(980,390,'mentega')
  game.physics.p2.enable(mentega)
  mentega.body.clearShapes()
  mentega.body.loadPolygon('sprite_physics','mentega')
  mentega.body.mass = 6;
  mentega.body.setMaterial(boxMaterial);
  mentega.body.kinematic = true;

  mentega1 = game.add.sprite(950,500,'mentega1')
  game.physics.p2.enable(mentega1)
  mentega1.body.clearShapes()
  mentega1.body.loadPolygon('sprite_physics','mentega1')
  mentega1.body.mass = 6;
  mentega1.body.setMaterial(boxMaterial);
  mentega1.body.kinematic = true;

  mentega1 = game.add.sprite(950,500,'mentega1')
  game.physics.p2.enable(mentega1)
  mentega1.body.clearShapes()
  mentega1.body.loadPolygon('sprite_physics','mentega1')
  mentega1.body.mass = 6;
  mentega1.body.setMaterial(boxMaterial);
  mentega1.body.kinematic = true;

  var api4 = game.add.sprite(550,505,'api')
  game.physics.p2.enable(api4)
  api4.body.clearShapes()
  api4.body.loadPolygon('sprite_physics','api')
  api4.body.mass = 6
  api4.body.setMaterial(boxMaterial)
  api4.body.kinematic = true

  var api3 = game.add.sprite(500,505,'api')
  game.physics.p2.enable(api3)
  api3.body.clearShapes()
  api3.body.loadPolygon('sprite_physics','api')
  api3.body.mass = 6
  api3.body.setMaterial(boxMaterial)
  api3.body.kinematic = true

  var api2 = game.add.sprite(350,505,'api')
  game.physics.p2.enable(api2)
  api2.body.clearShapes()
  api2.body.loadPolygon('sprite_physics','api')
  api2.body.mass = 6
  api2.body.setMaterial(boxMaterial)
  api2.body.kinematic = true

  var api = game.add.sprite(300,505,'api')
  game.physics.p2.enable(api)
  api.body.clearShapes()
  api.body.loadPolygon('sprite_physics','api')
  api.body.mass = 6
  api.body.setMaterial(boxMaterial)
  api.body.kinematic = true
  
  var fire = [ api, api2, api3, api4 ];
  var i = 0;

  //funtion that give event to every singgle value in array
  fire.forEach(
    function(fire) {


                     fire.visible = false;
                     //make random time to call showPicture function.
                     game.time.events.add(1000 + (i * 500), this.showPicture, this, fire);
                     i++;
                     
                    }
              );

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