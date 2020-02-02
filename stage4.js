const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

function preload() {
  game.load.image('bg','assets/stage8/bg.png')
  game.load.image('kompor','assets/stage7/kompor.png')
  game.load.image('kompor1','assets/stage7/kompor1.png')
  game.load.image('kompor2','assets/stage7/kompor2.png')
  game.load.image('char','assets/stage4/char.png')
  game.load.image('mentega','assets/stage8/mentega.png')
  game.load.image('mentega1','assets/stage8/mentega1.png')
  game.load.image('minyak','assets/stage8/minyak.png')
  game.load.image('pan','assets/stage8/pan.png')
  game.load.image('pan2','assets/stage8/pan2.png')
  game.load.image('kentang','assets/stage8/kentang.png')



  game.load.image('finish','assets/1.bmp')
}


function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  game.add.sprite(0,0,'bg')

var pan = game.add.sprite(70,300,'pan')
  platforms2 = game.add.group()
  platforms2.enableBody = true



  platforms = game.add.group()
  platforms.enableBody = true



  //
  // let tisu = platforms.create(200,570,'tisu')
  // tisu.body.immovable = true
  // tisu.body.setSize(300,100, 5, 25);
  //
  //

  let mentega1 = platforms.create(0,445,'mentega1')
  mentega1.body.immovable = true

  let mentega = platforms.create(0,355,'mentega')
  mentega.body.immovable = true

  let minyak = platforms2.create(90,400,'minyak')
  minyak.body.immovable = true

  let kompor = platforms.create(0,555,'kompor')
  kompor.body.immovable = true

  let kompor1 = platforms.create(270,500,'kompor1')
  kompor1.body.immovable = true

  let kompor2 = platforms.create(200,525,'kompor2')
  kompor2.body.immovable = true

  let pan2 = platforms.create(920,350,'pan2')
  pan2.body.immovable = true

  kentang = game.add.sprite(180,388,'kentang')
  game.physics.arcade.enable(kentang)
  kentang.enableBody = true
  kentang.body.immovable = true

  kentang2 = game.add.sprite(580,390,'kentang')
  game.physics.arcade.enable(kentang2)
  kentang2.enableBody = true
  kentang2.body.immovable = true



  fin = game.add.sprite(1015,320,'finish')
  game.physics.arcade.enable(fin)
  fin.enableBody = true
  fin.body.immovable = true


  player = game.add.sprite(0,300,'char')
  game.physics.arcade.enable(player)
  player.body.bounce.y = 0.1
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

  cursors = game.input.keyboard.createCursorKeys()




}

function update() {
game.physics.arcade.collide(player, platforms)
game.physics.arcade.collide(player, kentang,drop, null, this)
game.physics.arcade.collide(player, kentang2,drop2,null,this)
game.physics.arcade.collide(player, platforms2, reload, null , this)


game.physics.arcade.collide(player, fin, nextStage, null, this);

player.body.velocity.x = 1

if(cursors.left.isDown){
  player.body.velocity.x = -150
} else if (cursors.right.isDown){
  player.body.velocity.x = 150
}

if(cursors.up.isDown && player.body.touching.down){
  player.body.velocity.y = -350
}


}
//
//
function nextStage (obj1, obj2) {

  window.location = "stage5.html";

}

function reload (obj1, obj2) {

  window.location = "stage4.html";

}
function drop (obj1,obj2){
  // player.body.bounce.y = 0
  // spon.body.bounce.y = 0
  kentang.y += 1.5
  kentang2.y +=1
}
function drop2 (obj1,obj2){
  // player.body.bounce.y = 0
  // spon.body.bounce.y = 0

  kentang2.y +=0.6
}
