let currentPlayer = "X";
let board = [ ["", "", ""], ["", "", ""], ["", "", ""] ];
let gameOver = false;

function makeMove(row, col) {
    if (!gameOver && board[row][col] === "") {
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`).textContent = currentPlayer;

        if (checkForWin(row, col)) {
            document.getElementById("winner").textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (boardIsFull()) {
            document.getElementById("winner").textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkForWin(row, col) {
    return (checkRow(row) || checkCol(col) || checkDiagonals());
}

function checkRow(row) {
    return (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer);
}

function checkCol(col) {
    return (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer);
}

function checkDiagonals() {
    return (checkLeftDiagonal() || checkRightDiagonal());
}

function checkLeftDiagonal() {
    return (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer);
}

function checkRightDiagonal() {
    return (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer);
}

function boardIsFull() {
    for (let row of board) {
        if (row.includes("")) {
            return false;
        }
    }
    return true;
}

function resetGame() {
    currentPlayer = "X";
    board = [ ["", "", ""], ["", "", ""], ["", "", ""] ];
    gameOver = false;

    document.getElementById("winner").textContent = "";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}
