function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
console.log(getComputerChoice());

/*let playerPrompt = prompt("Rock paper scissors");
    if (playerPrompt != playerSelection) {
        alert("Rock paper scissors");
    }*/
function playRound(playerSelection, computerSelection) {
    let playerPrompt = prompt("Rock paper scissors");
    if (playerPrompt.toLowerCase() != options) {
        prompt("Rock paper scissors");
    }
    if (playerSelection.getLowerCase === "rock" && computerSelection.getLowerCase === "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection.getLowerCase === "paper" && computerSelection.getLowerCase === "rock") {
        return "You win! Paper beats rock.";
    }
    else if (playerSelection.getLowerCase === "scissors" && computerSelection.getLowerCase === "paper") {
        return "You win! scissors beats paper.";
    }
    else if (playerSelection.getLowerCase === "rock" && computerSelection.getLowerCase === "paper") {
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection.getLowerCase === "paper" && computerSelection.getLowerCase === "scissors") {
        return "You lose! Scissors beats paper.";
    }
    else if (playerSelection.getLowerCase === "scissors" && computerSelection.getLowerCase === "rock") {
        return "You lose! Rock beats scissors.";
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));