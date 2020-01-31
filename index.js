// start of the game
let versusScreen = document.getElementById("versus-text");

window.addEventListener("load", function() {
  versusScreen.innerHTML = "A NEW CHALLENGER!";
  this.setTimeout(() => {
    versusScreen.innerHTML = "PICK YOUR MOVE!";
  }, 1000);
});

// opponent's choice
let opponentMovesList = ["rock", "paper", "scissors"];
// let opponentChoice = opponentMovesList[Math.floor(Math.random() * 3)];
let opponentChoice = opponentMovesList[0];

// select one of the cards
let playerChoice = null;
let result = null;
let playerHealth = document.getElementById("player-health-bar");
let enemyHealth = document.getElementById("enemy-health-bar");

let playerRock = document.getElementById("player-rock");
playerRock.addEventListener("click", function() {
  playerChoice = "rock";
  result = winorlose(playerChoice, opponentChoice);
  healthCalc(result);
  winCon();
});
let playerPaper = document.getElementById("player-paper");
playerPaper.addEventListener("click", function() {
  playerChoice = "paper";
  result = winorlose(playerChoice, opponentChoice);
  healthCalc(result);
  winCon();
});
let playerScissors = document.getElementById("player-scissors");
playerScissors.addEventListener("click", function() {
  playerChoice = "scissors";
  result = winorlose(playerChoice, opponentChoice);
  healthCalc(result);
  winCon();
});

// logic to determine who's going to win
function winorlose(playerChoice, opponentChoice) {
  let result = null;
  switch (playerChoice) {
    case "rock":
      switch (opponentChoice) {
        case "rock":
          result = "draw";
          break;
        case "paper":
          result = "lose";
          break;
        case "scissors":
          result = "win";
          break;
      }
      break;
    case "paper":
      switch (opponentChoice) {
        case "rock":
          result = "win";
          break;
        case "paper":
          result = "draw";
          break;
        case "scissors":
          result = "lose";
          break;
      }
      break;
    case "scissors":
      switch (opponentChoice) {
        case "rock":
          result = "lose";
          break;
        case "paper":
          result = "Win";
          break;
        case "scissors":
          result = "draw";
          break;
      }
      break;
  }
  return result;
}

// function to reduce health
function healthCalc(result) {
  switch (result) {
    case "win":
      enemyHealth.innerHTML -= 10;
      break;
    case "lose":
      playerHealth.innerHTML -= 10;
      break;
    default:
      break;
  }
}

// function too see win or lose condition
function winCon() {
  if (playerHealth.innerHTML == 0) {
    alert("YOU WIN!");
  } else if (enemyHealth.innerHTML == 0) {
    alert("YOU LOSE");
  }
}

// function to change the versus screen to suit the result
function versus() {
  switch (result) {
    case "win":
        versusScreen.innerHTML = "YOU WON THE FIGHT!"
      break;
    case "lose":
      break;
    case "draw":
      break;
  }
}
