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

    return choice;
}

function playRound(playerSelection, computerSelection)
{
    
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