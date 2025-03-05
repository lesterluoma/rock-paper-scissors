let computerScore = 0;
let humanScore = 0;

function computerChoice() {
  let choice = Math.floor(Math.random() * 2); // 0 - 2

  if (choice === 2) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function humanChoice() {
  let choice = prompt("Ready? Rock, Paper, Scissors, Shoot!", "rock");

  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  const winningChoice = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };

  if (humanChoice === computerChoice) {
    return {
      winner: "tie",
      score: 0,
    };
  }
}

const humanSelection = humanChoice();
const computerSelection = computerChoice();

playRound(humanSelection, computerSelection);
