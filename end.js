const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

function preload() {
  game.load.image('bg','assets/end.png')
  game.load.image('menu','assets/menu.png')



}


function create() {

  game.add.sprite(0,0,'bg')


  var button1 = game.add.sprite(600,600,'menu')
  button1.inputEnabled = true
  button1.input.useHandCursor = true
  button1.events.onInputDown.add(backStage,this);




 //game.time.events.add(Phaser.Timer.SECOND * 4, drop, this);


}

function update() {



}
//
//

function backStage () {

  window.location = "index.html";

}
