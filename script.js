// DECLARE SCORES
let playerScore = 0;
let computerScore = 0;

// MAKE COMPUTER PLAY
function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// DECLARING (HTML + JS)
const playerScoreNumber = document.querySelector('.playerScore');  
const computerScoreNumber = document.querySelector('.computerScore');  

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const gameResult = document.querySelector('.result');

// addEventListener Buttons
rockButton.addEventListener('click', chooseRock);
paperButton.addEventListener('click', choosePaper);
scissorsButton.addEventListener('click', chooseScissors);

// USING CHOICES
function chooseRock(){
    playRound('rock', computerPlay());
}

function choosePaper(){
    playRound('paper', computerPlay());
}

function chooseScissors(){
    playRound('scissors', computerPlay());
}

// GAME RULES
function playRound(playerSelection, computerSelection){
    switch (true) {
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            playerWin(playerSelection, computerSelection); //Player win, we add one point to playerScore
            break;

        case (computerSelection == 'rock' && playerSelection == 'scissors'):
        case (computerSelection == 'paper' && playerSelection == 'rock'):
        case (computerSelection == 'scissors' && playerSelection == 'paper'):
            computerWin(playerSelection, computerSelection); //Computer win, we add one point to computerScore
            break;

        case (playerSelection == computerSelection):
            tie(playerSelection, computerSelection);
            break;
    }

    if (computerScore == 5){
        result('Computer scored 5, it won.')
    }
    else if (playerScore == 5){
        result('Well done! You won!')
    }

}

// OUTCOMES
function playerWin(playerChoice, computerChoice){
    playerScore++;
    playerScoreNumber.textContent = playerScore; // Update scoreboard
    gameResult.textContent = `You win ! ${playerChoice} beats ${computerChoice}`;
}

function computerWin(playerChoice, computerChoice){
    computerScore++;
    computerScoreNumber.textContent = computerScore; // Update scoreboard
    gameResult.textContent = `You lose ! ${computerChoice} beats ${playerChoice}`;
}

function tie(playerChoice, computerChoice){
    gameResult.textContent = `Tie ! You both chose ${playerChoice}`;
}

function result(text){
    document.body.innerHTML = `<p>${text}</p><a href="${window.location.href}">Play again?</a>`;
    // DISPLAY NEW HTML PAGE : WE HAVE RESULT OF FIRST TO 5 POINTS THEN ASKING FOR PLAY AGAIN ?
}

function restartGame(){
    window.location.reload();
}
