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
let opponentChoice = opponentMovesList[Math.floor(Math.random() * 3)];

// select one of the cards
let playerChoice = null;
let result = null;
let playerHealth = document
  .getElementById("player-health-bar")
  .getElementsByTagName("p")[0];

let enemyHealth = document
  .getElementById("enemy-health-bar")
  .getElementsByTagName("p")[0];

let playerRock = document.getElementById("player-rock");
playerRock.addEventListener("click", function() {
  opponentHandReturn();
  playerChoice = "rock";
  result = winorlose(playerChoice, opponentChoice);
  healthCalc(result);
  hurt();
  versus();
  winCon();
  opponentHand();
  randomOpp();
});
let playerPaper = document.getElementById("player-paper");
playerPaper.addEventListener("click", function() {
  opponentHandReturn();
  playerChoice = "paper";
  result = winorlose(playerChoice, opponentChoice);
  healthCalc(result);
  hurt();
  versus();
  winCon();
  opponentHand();
  randomOpp();
});
let playerScissors = document.getElementById("player-scissors");
playerScissors.addEventListener("click", function() {
  opponentHandReturn();
  playerChoice = "scissors";
  result = winorlose(playerChoice, opponentChoice);
  healthCalc(result);
  hurt();
  versus();
  winCon();
  opponentHand();
  randomOpp();
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
let enemyTimesHit = 0;
let playerTimesHit = 0;
function healthCalc(result) {
  switch (result) {
    case "win":
      enemyHealth.innerHTML -= 10;
      enemyTimesHit++;
      document.getElementById("enemy-floating-health").style.width = (400 - (enemyTimesHit*40)) + "px";
      break;
    case "lose":
      playerHealth.innerHTML -= 10;
      playerTimesHit++;
      document.getElementById("player-floating-health").style.width = (400 - (playerTimesHit*40)) + "px";
      break;
    default:
      break;
  }
}

// function too see win or lose condition
function winCon() {
  if (playerHealth.innerHTML == 0) {
    alert("YOU LOSE!");
  } else if (enemyHealth.innerHTML == 0) {
    alert("YOU WIN!");
  }
}

// function to change the versus screen to suit the result
function versus() {
  switch (result) {
    case "win":
      versusScreen.innerHTML = "YOU WON THE FIGHT!";
      break;
    case "lose":
      versusScreen.innerHTML = "YOU LOST THE FIGHT!";
      break;
    case "draw":
      versusScreen.innerHTML = "IT'S A DRAW!";
      break;
  }
}

// function to randomize opponent's move
function randomOpp() {
  opponentChoice = opponentMovesList[Math.floor(Math.random() * 3)];
}

// function to highlight what the opponent has chosen
let enemyRock = document.getElementById("enemy-rock");
let enemyPaper = document.getElementById("enemy-paper");
let enemyScissors = document.getElementById("enemy-scissors");

function opponentHand() {
  switch (opponentChoice) {
    case "rock":
      enemyRock.style.transform = "scale(1.2)";
      break;
    case "paper":
      enemyPaper.style.transform = "scale(1.2)";
      break;
    case "scissors":
      enemyScissors.style.transform = "scale(1.2)";
      break;
  }
}

// function to turn back the size of opponent's hand to normal
function opponentHandReturn() {
  enemyRock.style.transform = "scale(1)";
  enemyPaper.style.transform = "scale(1)";
  enemyScissors.style.transform = "scale(1)";
}

// function to show hit effect
let enemyHit = document.getElementById("enemy-hit");
let playerHit = document.getElementById("player-hit");
enemyHit.style.visibility = "hidden";
playerHit.style.visibility = "hidden";

function hurt() {
  switch (result) {
    case "win":
      enemyHit.style.visibility = "visible";
      setTimeout(function() {
        enemyHit.style.visibility = "hidden";
      }, 250);
      break;
    case "lose":
      playerHit.style.visibility = "visible";
      setTimeout(function() {
        playerHit.style.visibility = "hidden";
      }, 250);
      break;
  }
}
