const playerName = prompt("What is your name") || "Player";
const yourName = `<p>Welcome <b>${playerName}</b> to Mario Kart Rock Paper Scissors</p>`
document.getElementById("player-name").innerHTML = yourName
if (playerName) {
  playerName = "Player";
}


