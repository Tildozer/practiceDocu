let game = {
    playing: false,
    timer: 0,
}

let playbtn = document.querySelector('#play');
let timer = document.querySelector('#timer');

playbtn.addEventListener('click', () => {
 timer.innerText = game.timer;
  game.playing = !game.playing;
  if(game.playing){
    playbtn.innerText = 'pa'
  } else {

  } 
});

const advanceTime = () => {
    if(game.playing === false){
        return;
    }
    timer.innerText = ++game.timer;
}
setInterval(advanceTime, 1000);