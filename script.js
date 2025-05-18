let humanScore = 0;
let computerScore = 0;
let tieGame = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    let computerMove;

    if (randomNum <= .33) {
        computerMove = 'Rock';
    } else if (randomNum >= .67) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
    return computerMove;
}

function getHumanChoice() {
    let humanMove;
    const selectMove = prompt('Please select a move');
    if (selectMove === 'Rock' || selectMove === 'Paper' || selectMove === 'Scissors') {
        humanMove = selectMove;
    } else if (selectMove != 'Rock' || selectMove != 'Paper' || selectMove != 'Scissors' ) {
        alert(`${selectMove} isn't a playable move, please use: Rock, Paper or Scissors`);
    }
    return humanMove;
}

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(`Computer picked: ${computerChoice}`)
    console.log(`You picked: ${humanChoice}`)
    let result;

    if (humanChoice === computerChoice) {
        result = 'Tie!';
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        result = 'Computer wins!'
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        result = 'You win!'
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        result = 'You win!'
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        result = 'Computer wins!'
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        result = 'Computer wins!'
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result = 'You win!'
    }

    if (result === 'Computer wins!') {
        computerScore++
    } else if (result === 'You win!') {
        humanScore++
    } else if (result === 'Tie!') {
        tieGame++
    }

    alert(`You picked: ${humanChoice}
Computer picked: ${computerChoice}
Result: ${result}
Score:
You ${humanScore} 
Computer ${computerScore} 
Ties ${tieGame}`)
}

playRound()