
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber == 0) {
        return ('ROCK')
    } else if (randomNumber == 1) {
        return ('PAPER')
    } else {
        return ('SCISSORS')
    }
}
const playerSelection = prompt('Enter rock or scissors or paper').toUpperCase();
const computerSelection = getComputerChoice();

