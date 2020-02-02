const game = new Phaser.Game(1024, 768, Phaser.AUTO, '',
{ preload: preload, create: create ,update: update });

let platforms
let platforms2
let player
let fin

function preload() {
  game.load.image('bg','assets/stage9/bg.png')
  game.load.image('next','assets/next.png')
  game.load.image('back','assets/back.png')



}


function create() {

  game.add.sprite(0,0,'bg')
  var button = game.add.sprite(860,600,'next')
  button.inputEnabled = true
  button.input.useHandCursor = true
  button.events.onInputDown.add(nextStage,this);



 //game.time.events.add(Phaser.Timer.SECOND * 4, drop, this);


}

function update() {



}
//
//
function nextStage (obj1, obj2) {

  window.location = "story_end1.html";

}
