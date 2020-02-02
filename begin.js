const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

function preload() {
  game.load.image('bg','assets/bg.png')
  game.load.image('tale','assets/tale.png')
  game.load.image('of','assets/of.png')
  game.load.image('the','assets/the.png')
  game.load.image('egg','assets/egg.png')
  game.load.image('start','assets/start.png')
}


function create() {

  game.add.sprite(0,0,'bg')
  game.add.sprite(200,100,'tale')
  game.add.sprite(570,130,'of')
  game.add.sprite(550,180,'the')
  game.add.sprite(660,100,'egg')

  var button = game.add.sprite(470,350,'start')
  button.inputEnabled = true
  button.input.useHandCursor = true
  button.events.onInputDown.add(nextStage,this);






 //game.time.events.add(Phaser.Timer.SECOND * 4, drop, this);


}

function update() {



}
//
//
function nextStage () {

  window.location = "story1.html";

}
