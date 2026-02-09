let maxRounds = 5;
let playerName = prompt("What is your name");
if (playerName) {
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
document.getElementById("scoreboard").textContent = "User: " + " | Computer: " + computerWins;

document.getElementById("reset-btn").style.display = "none";
document.getElementById("reset-btn").style.display = "block";

function playRound(userChoice) {
  console.log("User chose:", userChoice);
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];
  console.log("Computer chose:", computerChoice);

  if (roundNumber <= maxRounds) {
  document.getElementById("round-display").textContent = "Round" + " of " + maxRounds;
} else {
  document.getElementById("round-display").textContent = "Game Over";
}
}

let resultMessage = "";
if (userChoice === computerChoice) {
  resultMessage = "Its a tie!" + userChoice + ".";
} 
else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    resultMessafe = "You win!";
    userWins = userWins + 1;
  } else {
    resultMessage = "Computer wins!";
    computerWins = computerWins + 1;
  }
}

else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    resultMessage = "You win!";
    userWins = userWins + 1;
  } else {
    resultMessage = "Computer wins!";
    computerWins = computerWins + 1;
  }
}

else if (userChoice === "scissors") {
  if (computerChoice === "paper") {
    resultMessage = "You win!";
    userWins = userWins + 1;
  } else {
    resultMessage = "Computer wins!";
    computerWins = computerWins + 1;
  }
}

document.getElementById("message").textContent = resultMessage;
document.getElementById("scoreboard").textContent = "User:" + userWins + " | Computer: " + computerWins;

roundNumber = roundNumber + 1;
if (roundNumber === 6) {
  endGame();
} else {
  document.getElementById("round-display").textContent = "Round " + roundNumber + " of 5";
}

function endGame() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.disabled = true;
  });

  document.getElementById("round-display").textContent = "Game Over";
  document.getElementById("message").textContent = "Final Score - User: " + userWins + " | Computer: " + computerWins;
  document.getElementById("reset-btn").style.display = "block";
  
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

  document.getElementById("user-choice").textContent = "";
  document.getElementById("computer-choice").textContent = "";
  document.getElementById("message").textContent = "";

  document.getElementById("scoreboard").textContent = "User: 0 | Computer: 0";

  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.disabled = false;
  })
  document.getElementById("reset-btn").style.display = "none";
  document.getElementById("round-display").textContent = "Round 1 of 5";
}