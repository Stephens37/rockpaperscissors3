const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let computerSelection = getComputerChoice();
let playerSelection = "rock";
let playerPoint = document.getElementById("playerScore");
let playerScore = 0;
playerPoint.innerHTML = playerScore;
let computerPoint = document.getElementById("computerScore");
let computerScore = 0;
computerPoint.innerHTML = computerScore;

document.getElementById('rock').onclick = () =>{
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if(playerScore == 5 || computerScore == 5){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    }
  }
document.getElementById('paper').onclick = () =>{
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if(playerScore == 5 || computerScore == 5){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}
document.getElementById('scissors').onclick = () =>{
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if(playerScore == 5 || computerScore == 5){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}

  
function win(playerSelection, computerSelection){
    playerScore++
    playerPoint.innerHTML = playerScore;
    results.innerHTML = "You win! " + playerSelection + " beats " + computerSelection + ".";
    if(playerScore == 5){
    finalResults.innerHTML = "You win the game!";
  }
}

function lose(playerSelection, computerSelection){
    computerScore++
    computerPoint.innerHTML = computerScore;
    results.innerHTML = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    if(computerScore == 5){
    finalResults.innerHTML = "You lose the game!";
  }
}

function tie(){
  results.innerHTML = "Its a tie!";
}


function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    win(playerSelection, computerSelection);
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    win(playerSelection, computerSelection);
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    win(playerSelection, computerSelection);
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    lose(playerSelection, computerSelection);
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    lose(playerSelection, computerSelection);
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    lose(playerSelection, computerSelection);
  } else if (
    computerSelection.toLowerCase() === playerSelection.toLowerCase()
  ) {
    tie();
} else document.getElementById("results").innerHTML = "That's strange";;
}

