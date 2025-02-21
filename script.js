let playerScore = 0;
        let computerScore = 0;
        const choices = ['rock', 'paper', 'scissors'];
        
       
        const playerScoreElement = document.getElementById('player-score');
        const computerScoreElement = document.getElementById('computer-score');
        const resultMessage = document.getElementById('result-message');
        const choicesDisplay = document.getElementById('choices-display');
        const choiceButtons = document.querySelectorAll('.choice-btn');
        const resetButton = document.getElementById('reset-btn');

      
        function getComputerChoice() {
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function determineWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) return 'draw';
            if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                return 'player';
            }
            return 'computer';
        }

        function updateScores(winner) {
            if (winner === 'player') playerScore++;
            if (winner === 'computer') computerScore++;
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        }

        function updateDisplay(playerChoice, computerChoice, winner) {
            const choiceEmojis = {
                rock: '✊',
                paper: '✋',
                scissors: '✌️'
            };
            
            choicesDisplay.textContent = `${choiceEmojis[playerChoice]} vs ${choiceEmojis[computerChoice]}`;
            
            switch(winner) {
                case 'player':
                    resultMessage.textContent = 'You Win!';
                    resultMessage.className = 'text-green-600';
                    break;
                case 'computer':
                    resultMessage.textContent = 'Computer Wins!';
                    resultMessage.className = 'text-red-600';
                    break;
                default:
                    resultMessage.textContent = "It's a Draw!";
                    resultMessage.className = 'text-gray-600';
            }
        }

       
        choiceButtons.forEach(button => {
            button.addEventListener('click', () => {
                const playerChoice = button.dataset.choice;
                const computerChoice = getComputerChoice();
                const winner = determineWinner(playerChoice, computerChoice);
                
                updateScores(winner);
                updateDisplay(playerChoice, computerChoice, winner);
            });
        });

        resetButton.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            playerScoreElement.textContent = '0';
            computerScoreElement.textContent = '0';
            resultMessage.textContent = '';
            choicesDisplay.textContent = '';
            resultMessage.className = '';
        });