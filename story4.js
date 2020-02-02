const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

function preload() {
  game.load.image('bg','assets/story/4.png')
  game.load.image('next','assets/next.png')
  game.load.image('back','assets/back.png')



}


function create() {

  game.add.sprite(0,0,'bg')
  var button = game.add.sprite(860,600,'next')
  button.inputEnabled = true
  button.input.useHandCursor = true
  button.events.onInputDown.add(nextStage,this);

  var button1 = game.add.sprite(100,600,'back')
  button1.inputEnabled = true
  button1.input.useHandCursor = true
  button1.events.onInputDown.add(backStage,this);




 //game.time.events.add(Phaser.Timer.SECOND * 4, drop, this);


}

function update() {



}
//
//
function nextStage () {

  window.location = "story5.html";

}
function backStage () {

  window.location = "story3.html";

}
