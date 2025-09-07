let humanScore = 0;
let computerScore = 0;
let tieGame = 0;
const resultOutput = document.querySelector('.results');
const moveSelectDiv = document.querySelector('.select-move');

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

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const chooseMove = document.querySelectorAll('button');

rock.addEventListener('click', () => {
    resultOutput.innerHTML = "";
    newGame()

    let humanChoice = "Rock";
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)

});

paper.addEventListener('click', () => {
    newGame()
    resultOutput.innerHTML = "";
    let humanChoice = "Paper";
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
});

scissors.addEventListener('click', () => {
    newGame()
    resultOutput.innerHTML = "";
    let humanChoice = "Scissors";
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
})



function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
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

    const para = document.createElement('p');
    para.innerHTML = `You picked: ${humanChoice} <br>
Computer picked: ${computerChoice}<br>
Result: ${result}<br>
Score: <br>
You: ${humanScore} <br>
Computer: ${computerScore}<br> 
Ties: ${tieGame}`

    resultOutput.appendChild(para)



};

function newGame() {
    const div = document.createElement('div');
    const button = document.createElement('button');

    if (humanScore === 5) {
        moveSelectDiv.remove();
        resultOutput.remove();

        div.textContent = "You've won this match!";
        button.textContent = "Play Again?";
        button.addEventListener('click', () => {
            score = 0;
            ties = 0;
            window.location.reload()
        })
        document.body.appendChild(div);
        document.body.appendChild(button);


    } else if (computerScore === 5) {
        moveSelectDiv.remove();
        resultOutput.remove();

        div.textContent = "The computer has won this match!";
        button.textContent = "Play Again?";
        button.addEventListener('click', () => {
            score = 0;
            ties = 0;
            window.location.reload()
        })
        document.body.appendChild(div);
        document.body.appendChild(button);
    }
}
