
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber == 0) {
        return ('ROCK');
    } else if (randomNumber == 1) {
        return ('PAPER');
    } else {
        return ('SCISSORS');
    }
}

const playerSelection = prompt('Enter rock or scissors or paper').toUpperCase();
const computerSelection = getComputerChoice();

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
        return ('You Win! Scissors beats Paper ');
    } else {
        return (`No one won. Your choice - ${playerSelection}, computer choice - ${computerSelection}`);
    }
};




