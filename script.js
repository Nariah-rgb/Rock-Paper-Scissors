let maxRounds = 5;
let playerName = prompt("What is your name");
if (!playerName) {
  playerName = "Player";
}
const yourName = `<p>Welcome <b>${playerName}</b> to Mario Kart Rock Paper Scissors</p>`;
document.getElementById("player-name").innerHTML = yourName;

document.getElementById("playername").textContent = playerName;

let roundNumber = 1;
let userWins = 0;
let computerWins = 0;

let choices = ["rock", "paper", "scissors"];

document.getElementById("round-display").textContent = "round" + roundNumber + "of 5";

document.getElementById("reset-btn").style.display = "none";
document.getElementById("reset-btn").style.display = "block";

function playRound(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultMessage = "";

  if (userChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage = "You win!";
    userWins++;
  } else {
    resultMessage = "Computer wins!";
    computerWins++;
  }

  document.getElementById("message").textContent = resultMessage;

  // update stars after each round
  updateStars();

  // increment round
  roundNumber++;

  if (roundNumber > maxRounds) {
    endGame();
  } else {
    document.getElementById("round-display").textContent =
      "Round " + roundNumber + " of " + maxRounds;
  }
}

document.getElementById("message").textContent = resultMessage;
updateStars();

roundNumber = roundNumber + 1;
if (roundNumber === 6) {
  endGame();
} else {
  document.getElementById("round-display").textContent = "Round " + roundNumber + " of 5";
}

function endGame() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => btn.disabled = true);

  document.getElementById("round-display").textContent = "Game Over";
  
  let finalMessage = "";

  if (userWins > computerWins) {
    finalMessage = "Congreats " + playerName + "| you have won the Grand Prix!";
  } else if (computerWins > userWins) {
  finalMessage = "HaHa you lose. " + playerName + "Better luck next time.";
  } else {
    finalMessage = "Oh no its a tie. Rematch?";
  }
  document.getElementById("message").textContent = finalMessage;
  document.getElementById("reset-btn").style.display = "block";
}

function resetGame() {
  roundNumber = 1;
  userWins = 0;
  computerWins = 0;

  document.getElementById("message").textContent = "";
  document.getElementById("round-display").textContent = "Round 1 of " + maxRounds;

  document.querySelectorAll(".btn").forEach(btn => btn.disabled = false);

  document.querySelectorAll("#player-stars .star, #computer-stars .star").forEach(star => {
    star.style.visibility = "visible";
  });

  document.getElementById("reset-btn").style.display = "none";
}


function updateStars() {
  const playerStars = document.querySelectorAll("#player-stars .star");
  const computerStars = document.querySelectorAll("#computer-stars .star");

  playerStars.forEach((star, index) => {
    star.style.visibility = index < 3 - userWins ? "visible" : "hidden";
  });

  computerStars.forEach((star, index) => {
    star.style.visibility = index < 3 - computerWins ? "visible" : "hidden";
  });
}
