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

printBoard();
