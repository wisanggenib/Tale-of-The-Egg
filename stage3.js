const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

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


  //inserting asset position of finish
  game.load.image('finish','assets/1.bmp')
}


function create() {
  //add game physics
  game.physics.startSystem(Phaser.Physics.ARCADE)
  
  //add background
  game.add.sprite(0,0,'bg')

  //define group called platforms
  platforms2 = game.add.group()
  //make platforms group physics body enabled
  platforms2.enableBody = true


  //define group called platforms
  platforms = game.add.group()
  //make platforms group physics body enabled
  platforms.enableBody = true



  //
  // let tisu = platforms.create(200,570,'tisu')
  // tisu.body.immovable = true
  // tisu.body.setSize(300,100, 5, 25);
  //
  //

  //create sprite mentega which mentega is part of platfroms group
  let mentega = platforms.create(900,350,'mentega')
  //make mentega body can't be moved
  mentega.body.immovable = true

  let mentega1 = platforms.create(810,440,'mentega1')
  mentega1.body.immovable = true

  let kompor = platforms.create(0,555,'kompor')
  kompor.body.immovable = true

  let kompor1 = platforms.create(215,500,'kompor1')
  kompor1.body.immovable = true

  let kompor2 = platforms.create(150,525,'kompor2')
  kompor2.body.immovable = true


  //create sprite api which is part of platfroms2
  var api = platforms2.create(260,440,'api')
  // make api body can't be moved
  api.body.immovable = true

  var api2 = platforms2.create(310,440,'api')
  api2.body.immovable = true

  var api3 = platforms2.create(500,440,'api')
  api3.body.immovable = true

  var api4 = platforms2.create(550,440,'api')
  api4.body.immovable = true


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


  fin = game.add.sprite(1015,320,'finish')
  game.physics.arcade.enable(fin)
  fin.enableBody = true
  fin.body.immovable = true


  player = game.add.sprite(0,500,'char')
  game.physics.arcade.enable(player)
  player.body.bounce.y = 0.1
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  cursors = game.input.keyboard.createCursorKeys()




}

function update() {
game.physics.arcade.collide(player, platforms)
game.physics.arcade.collide(player, platforms2, reload, null , this)

// game.physics.arcade.collide(player, platforms3, reload, null, this)
// game.physics.arcade.collide(player, spon, drop, null,this)
game.physics.arcade.collide(player, fin, nextStage, null, this);

player.body.velocity.x = 1

if(cursors.left.isDown){
  player.body.velocity.x = -150
} else if (cursors.right.isDown){
  player.body.velocity.x = 150
}

if(cursors.up.isDown && player.body.touching.down){
  player.body.velocity.y = -420
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
