const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let player
let fin

function preload() {
  game.load.image('bg','assets/start/bg0.png')
  game.load.image('bg1','assets/start/bg1.png')
  game.load.image('char','assets/start/char.png')
  game.load.image('toilet','assets/start/toilet.png')
  game.load.image('finish','assets/1.bmp')
}


function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.sprite(0,0,'bg')
  game.add.sprite(0,1,'bg1')



  platforms = game.add.group()
  platforms.enableBody = true

  let ground = platforms.create(0,39,'toilet')
  ground.body.setSize(800,110, 0, 630);
  ground.body.immovable = true

  fin = game.add.sprite(800,750,'finish')
  //fin.enableBody = true
  //fin.body.immovable = true

  player = game.add.sprite(450,0,'char')
  game.physics.arcade.enable(player)
  player.body.bounce.y = 0.1
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  cursors = game.input.keyboard.createCursorKeys()


}

function update() {
game.physics.arcade.collide(player, platforms)

player.body.velocity.x = 1

if(cursors.left.isDown){
  player.body.velocity.x = -150
} else if (cursors.right.isDown){
  player.body.velocity.x = 150
}

if(cursors.up.isDown && player.body.touching.down){
  player.body.velocity.y = -400
}

if(player.body.x > 700 && player.body.y > 700){
  nextStage();
}

}

function nextStage() {
window.location = "stage1.html";

}
