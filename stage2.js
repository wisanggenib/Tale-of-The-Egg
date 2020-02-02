const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

function preload() {
  game.load.image('bg','assets/stage3/bg.png')
    game.load.image('air','assets/stage3/air.png')
  game.load.image('char','assets/stage3/char.png')
  game.load.image('spon','assets/stage3/spon.png')
  game.load.image('block','assets/stage3/block.png')
  game.load.image('block2','assets/stage3/block2.png')
  game.load.image('spon','assets/stage3/spon.png')
  game.load.image('kanan','assets/stage3/kanan.png')
  game.load.image('kiri','assets/stage3/kiri.png')
  game.load.image('tisu','assets/stage3/tisu.png')
  game.load.image('sikat','assets/stage3/sikat.png')


  game.load.image('finish','assets/1.bmp')
}


function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.sprite(0,0,'bg')
  platforms2 = game.add.group()
  platforms2.enableBody = false

  platforms3 = game.add.group()
  platforms3.enableBody = true

  platforms = game.add.group()
  platforms.enableBody = true



  //
  // let tisu = platforms.create(200,570,'tisu')
  // tisu.body.immovable = true
  // tisu.body.setSize(300,100, 5, 25);
  //
  //


  let ground = platforms.create(0,500,'sikat')
  ground.body.immovable = true

  let air = platforms3.create(150,620,'air')
  air.body.immovable = true

  let kiri = platforms.create(110,480,'kiri')
  kiri.body.immovable = true

  let kanan = platforms.create(580,480,'kanan')
  kanan.body.immovable = true

  let block2 = platforms2.create(150,480,'block2')

  let block = platforms.create(630,480,'block')
  block.body.immovable = true

  let tisu = platforms.create(850,610,'tisu')
  tisu.body.immovable = true


  fin = game.add.sprite(1015,590,'finish')
  game.physics.arcade.enable(fin)
  fin.enableBody = true
  fin.body.immovable = true

  spon = game.add.sprite(230,550,'spon')
  game.physics.arcade.enable(spon)
  spon.enableBody = true
  spon.body.immovable = true



  player = game.add.sprite(40,0,'char')
  game.physics.arcade.enable(player)
  player.body.bounce.y = 0.1
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  cursors = game.input.keyboard.createCursorKeys()

 //game.time.events.add(Phaser.Timer.SECOND * 4, drop, this);


}

function update() {
game.physics.arcade.collide(player, platforms)
game.physics.arcade.collide(player, platforms3, reload, null, this)
game.physics.arcade.collide(player, spon, drop, null,this)
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

  window.location = "stage3.html";

}

function reload (obj1, obj2) {

  window.location = "stage2.html";

}

function drop (obj1,obj2){
  // player.body.bounce.y = 0
  // spon.body.bounce.y = 0
  spon.y += 10
}
