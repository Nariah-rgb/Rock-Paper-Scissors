let playerName = prompt("What is your name");
if (playerName) {
  playerName = "Player";
}
const yourName = `<p>Welcome <b>${playerName}</b> to Mario Kart Rock Paper Scissors</p>`;
document.getElementById("player-name").innerHTML = yourName;

document.getElementById("playername").textContent = playerName;
