const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let player
let fin

function preload() {
  game.load.image('bg','assets/stage1/bg.png')
  game.load.image('char','assets/stage1/char.png')
  game.load.image('toilet','assets/stage1/toilet.png')
  game.load.image('ground','assets/stage1/ground.png')
  game.load.image('finish','assets/1.bmp')
}


function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.sprite(0,0,'bg')



  platforms = game.add.group()
  platforms.enableBody = true

  let ground = platforms.create(0,610,'ground')
  ground.body.immovable = true

  let toilet = platforms.create(0,2,'toilet')
  toilet.body.immovable = true;

  // let fin = platforms.create(1015,500,'finish')
  // //fin.body.setSize(1000,1000, 0, 0);
  // fin.body.immovable = true;

  fin = game.add.sprite(1015,500,'finish')
  game.physics.arcade.enable(fin)
  fin.enableBody = true
  fin.body.immovable = true

  player = game.add.sprite(450,0,'char')
  game.physics.arcade.enable(player)
  player.body.bounce.y = 0.1
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  cursors = game.input.keyboard.createCursorKeys()


}

function update() {
game.physics.arcade.collide(player, platforms)
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


function nextStage (obj1, obj2) {

  window.location = "stage2.html";

}
