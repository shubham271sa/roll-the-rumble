'use strict';

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const Musice= document.querySelector('.sound');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');
 
//starting things
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// assigning a variable
const scores=[0,0];
let currentscore = 0; 
let activePlayer = 0; 
let gameplaying = true;

//let Play = document.getElementById('musice');
function playMusic(){
   let audio = new Audio("Music2.mp3");
   audio.play()
}
//Play.addEventListener("click", playMusic);

const changeplayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentscore = 0;
        // change the active player and also the colour change
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
} 
Musice.addEventListener('click',playMusic);

btnRoll.addEventListener('click',function(){
    // it is creating a random number
    if(gameplaying){
      
    const dice= Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice!==1){
        currentscore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent= currentscore;
    
    }
    else{
        changeplayer();
    }
}
   

});

btnHold.addEventListener('click',function(){
    if(gameplaying){
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent=  scores[activePlayer];

    if(scores[activePlayer]>=50){
        gameplaying = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }

    else{
    changeplayer();
    }
}
});
















