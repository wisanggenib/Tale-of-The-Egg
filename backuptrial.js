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
  //add game physics
    game.physics.startSystem(Phaser.Physics.P2JS)
    var platformsCollison = game.physics.p2.createCollisionGroup()
    var playerCollison = game.physics.p2.createCollisionGroup()
    game.physics.p2.updateBoundsCollisionGroup()

    platforms = game.add.group()
    platforms.enableBody = true
    game.physics.p2.enable(platforms)
    //platforms.body.setCollisionGroup(playerCollison)
    
    game.physics.p2.gravity.y = 8600;
    
    //add background
    

     mentega = platforms.create(900,350,'mentega')
    //make mentega body can't be moved
    mentega.body.immovable = true
  
    mentega1 = platforms.create(810,440,'mentega1')
    mentega1.body.immovable = true
  
    kompor = platforms.create(0,555,'kompor')
    kompor.body.immovable = true
    kompor.enableBody = true
    
    kompor1 = platforms.create(215,500,'kompor1')
    
    
    
    kompor2 = platforms.create(150,525,'kompor2')
    kompor2.body.immovable = true
    // mentega = game.add.sprite(100,100,'mentega')
    // kompor = game.add.sprite(0,500,'kompor')

   
    // // game.physics.arcade.enable(kompor)
    // // kompor.enableBody = true
    // // kompor.body.immovable = true


    
    // // game.physics.arcade.enable(fin)
    // // fin.enableBody = true
    // // fin.body.immovable = true


    player = game.add.sprite(100,500,'char')
    game.physics.p2.enable(player)
    player.body.gravity.y = 800
    //player.body.setZeroDamping()
    player.body.fixedRotation = true
    player.body.collideWorldBounds = true
    player.body.setCollisionGroup(playerCollison)
    player.body.clearShapes();
	  player.body.loadPolygon('sprite_physics', 'char');
    //player.body.collides(platformsCollison, hitpanda(), this);
    
    // player.body.bounce.y = 0.1
    // player.body.gravity.y = 800
    // player.body.collideWorldBounds = true

    cursors = game.input.keyboard.createCursorKeys();




}

function update() {
      // game.physics.arcade.collide(player, platforms)
      // game.physics.arcade.collide(player, kompor)

      // game.physics.arcade.collide(player, platforms3, reload, null, this)
      // game.physics.arcade.collide(player, spon, drop, null,this)
//      game.physics.arcade.collide(player, fin, nextStage, null, this);

      // player.body.velocity.x = 1
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
        player.body.moveUp(400);
      }
      else if (cursors.down.isDown)
      {
        player.body.moveDown(400);
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
