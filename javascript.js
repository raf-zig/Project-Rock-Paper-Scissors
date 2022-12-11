const rock = document.querySelector('#btn1');
const paper = document.querySelector('#btn2');
const scissors = document.querySelector('#btn3');
const para = document.querySelector('p');
const user = document.querySelector('#user');
const comp = document.querySelector('#comp');
const winner = document.querySelector('#winner');
const finish = document.querySelector('#finish');
const buttons = document.querySelectorAll('.btn');
const start = document.querySelector ('#start')
const button =  document.querySelector('#btn')
let user_score = 0;
let comp_score = 0;

rock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const score = (playRound("ROCK", computerSelection));
  para.textContent = score
  display_score(para.textContent) 
});

paper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const score = (playRound("PAPER", computerSelection));
  para.textContent = score
  display_score(para.textContent) 
});

scissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const score = (playRound("SCISSORS", computerSelection));
  para.textContent = score
  display_score(para.textContent) 
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return ('You Lose! Paper beats Rock');
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return ('You Win! Rock beats Scissors');
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return ('You Lose! Scissors beats Paper');
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return ('You Win! Paper beats Rock');
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return ('You Lose! Rock beats Scissors');
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return ('You Win! Scissors beats Paper');
    } else {
        return (`No one won. Your choice - ${playerSelection}, computer choice - ${computerSelection}`);
    }
};
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber == 0) {
      return ('ROCK');
    } else if (randomNumber == 1) {
        return ('PAPER');
    } else {
      return ('SCISSORS');
    }
};

function display_score(para) {
  if(para === 'You Win! Rock beats Scissors' || para ===  'You Win! Paper beats Rock' || para === 'You Win! Scissors beats Paper'){
    user_score++;
    user.textContent = user_score
    if(user_score === 5) {
      finish.textContent = 'You Win!';
      buttons.forEach(el => el.disabled = true)
      start.textContent = 'If you want to play again, press start'
      but()
    }
  } else if ( para === 'You Lose! Paper beats Rock' || para === 'You Lose! Scissors beats Paper' || para === 'You Lose! Rock beats Scissors') {
    comp_score++
    comp.textContent = comp_score
    if(comp_score === 5) {
      finish.textContent = 'Computer Win!';
      buttons.forEach(el => el.disabled = true)
      start.textContent = 'If you want to play again, press start'
      but()
    }
  }
}

function but(){
  button.style.visibility = "visible";
}











