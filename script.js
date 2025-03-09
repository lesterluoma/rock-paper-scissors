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
      message: alert(`Tie. You both chose ${humanChoice}.`),
    };
  }

  const winningChoice = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winningChoice[humanChoice] === computerChoice) {
    return {
      message: alert(
        `You win! ${capitalizeFirstLetter(
          humanChoice
        )} beats ${computerChoice}.`
      ),
      winner: "human",
    };
  }

  return {
    message: alert(
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
  }
  if (humanScore === computerScore) {
    if (confirm("Tie. Would you like to play again?")) {
      playGame();
    } else {
      return;
    }
  } else if (humanScore > computerScore) {
    return alert("Congratulations! You win!");
  } else {
    return alert("Game over.");
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

playGame();
