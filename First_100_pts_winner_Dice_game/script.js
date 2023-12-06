'use strict';

const playerEL0 = document.querySelector('.player--0');
const playerEL1 = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');

let scores,currentScore,activePlayer,playing;
const init = function(){
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing=true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent=0;
  current1EL.textContent=0;

  diceEL.classList.add('hidden');
  playerEL0.classList.remove('player--winner');
  playerEL1.classList.remove('player--winner');
  playerEL0.classList.add('player--active');
  playerEL1.classList.remove('player--winner');
}
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //   document.getElementById(`current--${activePlayer}`).textContent =
  //  currentScore;
  playerEL0.classList.toggle('player--active');
  playerEL1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEL.classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${dice}.png`;
  
    if (dice !== 1) {
      console.log(dice);
  
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //currentEL.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
  
});

btnHold.addEventListener('click', function () {
  if(playing){
    console.log(scores[activePlayer] += currentScore);

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player's score is >=100
  
    if (scores[activePlayer] >= 100) {
      playing=false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
     diceEL.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
  // 1.add current score to active player
  
  //finish thw game
  //switch to another player
});

btnNew.addEventListener('click', function(){
init();
})