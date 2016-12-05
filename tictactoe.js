const prompt = require('prompt');

var board = [[0,0,0],[0,0,0],[0,0,0]];

function setMark(posH, posV,mark){
  board[posV][posH] = mark;
}

function printBoard() {
  console.log(`Game Board: \n
  ${board[0][0]} | ${board[0][1]} | ${board[0][0]} \n
  ${board[1][0]} | ${board[1][1]} | ${board[1][0]} \n 
  ${board[2][0]} | ${board[2][1]} | ${board[2][0]} \n`)
}

function checkWin(mark) {
  // horizontal win
  board.forEach((row) => {
    var markCount = row.reduce((acc, val) => {
      if (val === mark) {
        acc++;
      }
      return acc;
    }, 0)
    if (markCount === 3) {
      return true;
    }
  })
  // vertical win
  for (var i = 0; i < board.length; i++) {
    if (board[0][i] === mark && board[1][i] === mark && board[2][i] === mark) {
      return true
    }
  }
  // diagonal win
  if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark || 
      board[0][2] === mark && board[1][1] === mark && board[2][0] === mark) {
    return true;
  }
  return false;
}





