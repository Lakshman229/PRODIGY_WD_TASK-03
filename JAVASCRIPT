let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(event) {
  const cell = event.target;
  const index = parseInt(cell.getAttribute('data-index'));

  if (board[index] === "" && gameActive) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      message.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (!board.includes("")) {
      message.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin(player) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return board[index] === player;
    });
  });
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  message.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = "";
  });
}
