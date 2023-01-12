const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}
console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;


function getPlayerChoice(){
let playerSelection;
do {playerSelection = (prompt("Rock paper scissors"))}

while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
}
const computerSelection = getComputerChoice();
const playerSelection = "paper";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore += 1;
        console.log("You win! Rock beats scissors.");
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore += 1;
        console.log("You win! Paper beats rock.");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore += 1;
        console.log("You win! scissors beats paper.");
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats rock.");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beats paper.");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats scissors.");
    }
    else console.log("It's a tie!");
  } 

  
  function game(){
    for(let i = 0; i < 5; i++){
        getPlayerChoice();
        getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerScore > computerScore){
            console.log("Player wins!");
        }
        else if (playerScore < computerScore){
            console.log("Computer wins!");
        }
        else {
        console.log("Tie game!");
        }
    }
    console.log(playerScore);
    console.log(computerScore);
}
game();