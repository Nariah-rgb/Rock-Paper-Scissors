let maxRounds = 5;
let playerName = prompt("What is your name?");
if (!playerName) playerName = "Player";

document.getElementById("player-name").innerHTML =
  `<p>Welcome <b>${playerName}</b> to Mario Kart Rock Paper Scissors</p>`;
document.getElementById("playername").textContent = playerName;

let roundNumber = 1;
let userWins = 0;
let computerWins = 0;
let choices = ["rock", "paper", "scissors"];

document.getElementById("round-display").textContent =
  "Round " + roundNumber + " of " + maxRounds;
document.getElementById("reset-btn").style.display = "none";

function playRound(userChoice) {
  if (roundNumber > maxRounds) return;


  let computerChoice = choices[Math.floor(Math.random() * 3)];
  while (computerChoice === userChoice) {
    computerChoice = choices[Math.floor(Math.random() * 3)];
  }

  document.getElementById("user-choice").textContent = "You chose: " + userChoice;
  document.getElementById("computer-choice").textContent = "Computer chose: " + computerChoice;


  let resultMessage = "";
  if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors")
  ) {
    resultMessage = "Computer wins this round!";
    userWins++;
  } else {
    resultMessage = "You win this round!";
    computerWins++;
  }

  document.getElementById("message").textContent = resultMessage;

  updateStars();


  if (userWins === 3 || computerWins === 3 || roundNumber >= maxRounds) {
    endGame();
    return;
  }

  roundNumber++;
  document.getElementById("round-display").textContent =
    "Round " + roundNumber + " of " + maxRounds;
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

function endGame() {
  updateStars();

  let finalMessage = "";
  if (userWins > computerWins) {
    finalMessage = "HaHa, you lose. " + playerName + ", better luck next time.";
  } else if (computerWins > userWins) {
    finalMessage = "Congrats " + playerName + "! You won the Grand Prix!";
  } else {

    finalMessage = "Oh no, it's a tie. Rematch?";
  }

  document.getElementById("message").textContent = finalMessage;
  document.getElementById("round-display").textContent = "Game Over";
  document.getElementById("reset-btn").style.display = "block";
}


function resetGame() {
  roundNumber = 1;
  userWins = 0;
  computerWins = 0;

  document.getElementById("message").textContent = "";
  document.getElementById("user-choice").textContent = "";
  document.getElementById("computer-choice").textContent = "";

  document.getElementById("round-display").textContent =
    "Round " + roundNumber + " of " + maxRounds;

  document.querySelectorAll("#player-stars .star, #computer-stars .star").forEach(star => {
    star.style.visibility = "visible";
  });

  document.getElementById("reset-btn").style.display = "none";
}
