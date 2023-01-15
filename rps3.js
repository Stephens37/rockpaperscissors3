const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

let computerSelection = getComputerChoice();
let playerSelection = "rock";
let playerScore = 0;
let computerScore = 0;
//function getPlayerChoice() {
 // playerSelection = prompt("Rock paper scissors", "paper");
//}

function playRound(playerSelection, computerSelection) {
  console.log({computerSelection});
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    playerScore += 1;
    document.getElementById("results").innerHTML = "You win! Rock beats scissors.";
  }
  else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    playerScore += 1;
    document.getElementById("results").innerHTML = "You win! Paper beats rock.";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    playerScore += 1;
    document.getElementById("results").innerHTML = "You win! scissors beats paper.";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    computerScore += 1;
    document.getElementById("results").innerHTML = "You lose! Paper beats rock.";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    computerScore += 1;
    document.getElementById("results").innerHTML = "You lose! Scissors beats paper.";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    computerScore += 1;
    document.getElementById("results").innerHTML = "You lose! Rock beats scissors.";
  } else if (
    computerSelection.toLowerCase() === playerSelection.toLowerCase()
  ) {
    document.getElementById("results").innerHTML = "It's a tie!";
} else document.getElementById("results").innerHTML = "That's strange";
}

function game() {
  /*for (let i = 0; i < 5; i++) {
    getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }*/
  document.getElementById('rock').onclick = () =>{
    //playRound(playerSelection, computerSelection);
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  document.getElementById('paper').onclick = () =>{
    //playRound(playerSelection, computerSelection);
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  document.getElementById('scissors').onclick = () =>{
    //playRound(playerSelection, computerSelection);
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
      

  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("Tie game!");
  }
  console.log({ playerScore, computerScore });
}
game();

