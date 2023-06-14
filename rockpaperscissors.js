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

function getPlayerChoice(choice)
{
    const playerChoice = choice;
    console.log(`You selected: ${playerChoice.toUpperCase()}`);
    return playerChoice.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;
let winner;

function playRound(playerSelection, computerSelection)
{
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if(playerSelection === computerSelection)
    {
        winner = "TIE GAME!"
    }
    else if(playerSelection === "ROCK")
    {
        if(computerSelection === "PAPER")
        {
            winner = "You Lose! PAPER beats ROCK"
            computerScore++;
        }
        else if(computerSelection === "SCISSORS")
        {
            winner = "You win! ROCK beats SCISSORS"
            playerScore++;
        }
    }
    else if(playerSelection === "PAPER")
    {
        if(computerSelection === "ROCK")
        {
            winner = "You win! PAPER beats ROCK";
            playerScore++;
        }
        else if(computerSelection === "SCISSORS")
        {
            winner = "You lose! SCISSORS beats PAPER";
            computerScore++;
        }
    }
    else if(playerSelection === "SCISSORS")
    {
        if(computerSelection === "ROCK")
        {
            winner = "You lose! ROCK beats SCISSORS";
            computerScore++;
        }
        else if(computerSelection === "PAPER")
        {
            winner = "You win! SCISSORS beats PAPER";
            playerScore++;
        }
    }

    else if(playerScore > 4 && computerScore < 5)
    {
        winner = "Congratulations! You reached 5 points before the computer. YOU WIN!";
    }
    else if(computerScore > 4 && playerScore < 5)
    {
        winner = "Unlucky! The computer reached 5 points before you. YOU LOSE!";
    }

    console.log(`Your Score: ${playerScore} || Computer Score: ${computerScore}`);
    alert(winner);
    playRound();
}

/*
    1. Computer chooses at random, rock, paper, or scissors [x]

    2. User makes selection of rock, paper, or scissors

    3. Compare choices:
        3a. If both choices are the same, its a draw.
        3b. If the player chooses rock and the computer chooses scissors, player wins.
        3c. If the player chooses rock and the computer chooses paper, computer wins.
        3d. If the player chooses paper and the computer chooses rock, player wins.
        3e. If the player chooses paper and the computer chooses scissors, computer wins.
        3f. If the player chooses scissors and the computer chooses paper, player wins.
        3g. If the player chooses scissors and the computer chooses rock, computer wins.
*/