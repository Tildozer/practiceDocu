let score = 0;

let theScore = document.getElementById('score');

let holes = document.getElementsByClassName('hole');

setInterval(function(){
    let idx = Math.random() * holes.length;
    idx = Math.floor(idx)
    holes[idx].classList.toggle('mole')
}, 300); 
const whack = document.getElementById('whack-a-mole')
whack.addEventListener('click', function(ev){
    if(ev.target.matches('.mole')){
        score++;
        console.log(score)
        theScore.innerText = score;
    }
})


