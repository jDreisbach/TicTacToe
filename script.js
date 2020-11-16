//check to make sure that javascript is linked
console.log("ready to go!");

//variable declaration.
//declare the initial state of the game with a blank tic-tac-toe board
let gameState = ["", "", "", "", "", "", "", "", ""];

//declare the status variable to ease of use later on.
let gameStatus = document.querySelector(".status");

//declare a variable to check click events
let isClicked = false;

//declare current player to monitor who's turn it is.
let currentPlayer = "X";

//set winner variable to null until we have a winner
let winner = null;

//declare dynamic messages to update game status with correct information
const winMessage = () => `${winner} has won the game!`;
const drawMessage = () => "It is a Draw!";
const yourTurnMessage = () => `It is ${currentPlayer}'s turn!`;

//next we have to create a function to toggle which players turn it is
const togglePlayer = () => {
  isClicked ? (currentPlayer = "O") : (currentPlayer = "X");

  gameStatus.innerHTML = yourTurnMessage();
};

//next we need to create a function to make each cell clickable and update the game state on each click, we will also check to see if there is
//a draw here.
let cells = document.querySelectorAll(".cell");

const handleClick = () => {
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.addEventListener("click", () => {
      cell.innerHTML = currentPlayer;
      isClicked = !isClicked;
      gameState.splice(i, 1, cell.innerHTML);
      winMet();

      return gameState;
    });
  }
};

//declare win conditions.  Conditions are marked as an array of indexes that make the necessary matches on our grid.
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//create a function to check if a player has met any of the win conditions.

const winMet = () => {
  winConditions.forEach((condition) => {
    if (
      gameState[condition[0]] &&
      gameState[condition[0]] === gameState[condition[1]] &&
      gameState[condition[0]] === gameState[condition[2]]
    ) {
      winner = gameState[condition[0]];
      gameStatus = gameStatus.innerHTML = winMessage();
    } else if (winner === null && gameState.includes("")) {
      togglePlayer();
    } else {
      gameStatus.innerHTML = drawMessage();
    }
  });

  return winner;
};

handleClick();
