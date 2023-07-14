const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function updateScoreboard() {
    document.getElementById('player-score').textContent = `Player: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
}

function updateResultMessage(message) {
    document.getElementById('result').textContent = message;
}

function disableButtons() {
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => button.style.pointerEvents = 'none');
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    updateScoreboard();
    updateResultMessage('');
    enableButtons();
}

function enableButtons() {
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => button.style.pointerEvents = 'auto');
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    updateResultMessage(result);
    updateScoreboard();

    if (round === 5) {
        disableButtons();

        let gameResult;
        if (playerScore > computerScore) {
            gameResult = 'Congratulations! You win the game!';
        } else if (playerScore < computerScore) {
            gameResult = 'Computer wins the game!';
        } else {
            gameResult = 'It\'s a tie! The game ends in a draw.';
        }
        updateResultMessage(`${result} ${gameResult}`);

        setTimeout(resetGame, 3000);
    } else {
        round++;
    }
}

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
        const playerSelection = choice.id;
        game(playerSelection);
    });
});
