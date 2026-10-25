const WINNING_SCORE = 5;
const CHOICES = ["rock", "paper", "scissors"];
const START_MESSAGE = "Choose rock, paper, or scissors to start.";

// Maps each choice to the choice it beats.
const winningChoice = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Everything the page displays is derived from this state by render().
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
let roundMessage = START_MESSAGE;
let gameMessage = "";

const choiceButtons = document.querySelectorAll(".choice");
const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const roundMessageEl = document.querySelector("#round-message");
const gameMessageEl = document.querySelector("#game-message");
const resetButton = document.querySelector("#reset");

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Returns the outcome instead of showing it, so the UI code decides how to display it.
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return {
      message: `Tie. You both chose ${humanChoice}.`,
      winner: null,
    };
  }

  if (winningChoice[humanChoice] === computerChoice) {
    return {
      message: `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`,
      winner: "human",
    };
  }

  return {
    message: `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`,
    winner: "computer",
  };
}

function handleChoice(humanChoice) {
  // The buttons are disabled after the game ends; this guards against any other trigger.
  if (gameOver) return;

  const result = playRound(humanChoice, getComputerChoice());

  if (result.winner === "human") humanScore++;
  if (result.winner === "computer") computerScore++;
  roundMessage = result.message;

  if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    endGame();
  }

  render();
}

function endGame() {
  gameOver = true;
  gameMessage =
    humanScore === WINNING_SCORE
      ? "Congratulations! You won the game!"
      : "Game over. The computer won.";
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  roundMessage = START_MESSAGE;
  gameMessage = "";

  render();
}

// Draws the current state to the page. Call it after any state change.
function render() {
  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
  roundMessageEl.textContent = roundMessage;
  gameMessageEl.textContent = gameMessage;

  choiceButtons.forEach((button) => (button.disabled = gameOver));
  resetButton.hidden = !gameOver;
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => handleChoice(button.dataset.choice));
});

resetButton.addEventListener("click", resetGame);

render();
