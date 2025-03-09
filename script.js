function getHumanChoice() {
  let choice = prompt("Ready? Rock, Paper, Scissors, Shoot!", "rock");

  return choice.toLowerCase();
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); // 0 - 2

  if (choice === 2) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return {
      message: confirm(`Tie. You both chose ${humanChoice}.`),
    };
  }

  const winningChoice = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winningChoice[humanChoice] === computerChoice) {
    return {
      message: confirm(
        `You win! ${capitalizeFirstLetter(
          humanChoice
        )} beats ${computerChoice}.`
      ),
      winner: "human",
    };
  }

  return {
    message: confirm(
      `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`
    ),
    winner: "computer",
  };
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);

    if (result.winner === "human") {
      humanScore++;
    }
    if (result.winner === "computer") {
      computerScore++;
    }
    console.log(`humanScore: ${humanScore} computerScore: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    return confirm("Congratulations! You win!");
  } else {
    return confirm("Game over.");
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

playGame();
