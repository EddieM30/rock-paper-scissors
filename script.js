let humanScore = 0;
        let computerScore = 0;
        
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
            } 
            return humanMove;
        }

        function playRound(humanChoice, computerChoice) {
            computerChoice = getComputerChoice();
            humanChoice = getHumanChoice();
            console.log(`Computer picked: ${computerChoice}`)
            console.log(`You picked: ${humanChoice}`)

            if (humanChoice === computerChoice) {
                console.log('Result: Tie!');
            } else if (humanChoice === "Rock" && computerChoice === "Paper") {
                console.log('Result: Computer Wins!')
            }
        }

        playRound()