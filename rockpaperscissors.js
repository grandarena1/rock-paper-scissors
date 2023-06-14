const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const winnerDiv = document.getElementById('winner-parent');

rockBtn.addEventListener("click", function(choice) {getPlayerChoice('ROCK')});
paperBtn.addEventListener("click", function(choice) {getPlayerChoice('PAPER')});
scissorsBtn.addEventListener("click", function(choice) {getPlayerChoice('SCISSORS')});

let playerChoice;

function getPlayerChoice(choice)
{
    playerChoice = choice;
    console.log(`You selected: ${choice.toUpperCase()}`);
    playRound();
    return choice.toUpperCase();
}

function getComputerChoice()
{
    let randomDecision = Math.floor(Math.random() * 3) + 1;
    let choice;

    switch(randomDecision)
    {
        case 1:
            choice = "ROCK";
            break;
        case 2:
            choice = "PAPER";
            break;
        case 3:
            choice = "SCISSORS";
            break;
    }

    console.log(`Computer selected: ${choice}`);
    return choice;
}

const scoreText = document.createElement('p');
scoreText.setAttribute('id', 'score');

let playerScore = 0;
let computerScore = 0;
const winnerH3 = document.getElementById('winner');
scoreText.innerText = `Player score: ${playerScore}\n Computer score: ${computerScore}`;

function playRound()
{
    const computerSelection = getComputerChoice();

    if(playerChoice === computerSelection)
    {
        winnerH3.innerText = "TIE GAME!"
    }
    else if(playerChoice === "ROCK")
    {
        if(computerSelection === "PAPER")
        {
            winnerH3.innerText = "YOU LOSE!\n Computer chose PAPER\n\n PAPER beats ROCK"
            computerScore++;
        }
        else if(computerSelection === "SCISSORS")
        {
            winnerH3.innerText = "YOU WIN!\n Computer chose SCISSORS\n\n ROCK beats SCISSORS"
            playerScore++;
        }
    }
    else if(playerChoice === "PAPER")
    {
        if(computerSelection === "ROCK")
        {
            winnerH3.innerText = "YOU WIN!\n Computer chose ROCK\n\n PAPER beats ROCK";
            playerScore++;
        }
        else if(computerSelection === "SCISSORS")
        {
            winnerH3.innerText = "YOU LOSE!\n Computer chose SCISSORS\n\n SCISSORS beats PAPER";
            computerScore++;
        }
    }
    else if(playerChoice === "SCISSORS")
    {
        if(computerSelection === "ROCK")
        {
            winnerH3.innerText = "YOU LOSE!\n Computer chose ROCK\n\n ROCK beats SCISSORS";
            computerScore++;
        }
        else if(computerSelection === "PAPER")
        {
            winnerH3.innerText = "YOU WIN!\n Computer chose PAPER\n\n SCISSORS beats PAPER";
            playerScore++;
        }
    }

    if(playerScore > 4 && computerScore < 5)
    {
        winnerH3.innerText = "Congratulations! You reached 5 points before the computer. YOU WIN!\n Press reset to play again";
    }
    else if(computerScore > 4 && playerScore < 5)
    {
        winnerH3.innerText = "Unlucky! The computer reached 5 points before you. YOU LOSE!\n Press reset to play again";
    }

    console.log(`Your Score: ${playerScore} || Computer Score: ${computerScore}`);
    scoreText.innerText = `Player score: ${playerScore}\n Computer score: ${computerScore}`;
}

winnerDiv.appendChild(scoreText);

const reset = document.getElementById('reset-btn');
reset.addEventListener("click", resetScore)

function resetScore()
{
    playerScore = 0;
    computerScore = 0;
    winnerH3.innerText = "";
    scoreText.innerText = `Player score: ${playerScore}\n Computer score: ${computerScore}`;
}