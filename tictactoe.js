const prompt = require('prompt');

var board = [[0,0,0],[0,0,0],[0,0,0]];

function setMark = (posH, posV,mark) => {
  board[posV][posH] = mark;
}

