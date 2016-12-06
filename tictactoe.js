const prompt = require('prompt');

var board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

function setMark(posH, posV,mark){
  board[posV][posH] = mark;
}

function printBoard() {
  console.log(`Game Board: \n
  ${board[0][0]} | ${board[0][1]} | ${board[0][2]} \n
  ${board[1][0]} | ${board[1][1]} | ${board[1][2]} \n 
  ${board[2][0]} | ${board[2][1]} | ${board[2][2]} \n`)
}

function checkWin(mark) {
  // horizontal win
  for (var k = 0; k < board.length; k++) {
    var markCount = board[k].reduce((acc, val) => {
      if (val === mark) {
        acc++;
      }
      return acc;
    }, 0)
    if (markCount === 3) {
      return true;
    }
  }
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

var round = 0;

function turn(player) {
  printBoard();
  console.log(`Its player ${player}\'s turn: `);
  console.log('Player ', player, ', select a square to set your mark');
  prompt.get(['row','column'], (err, result) => {
    if (board[result.row][result.column] !== ' ') {
      console.log('');
      console.log('');
      console.log('invalid field chosen try again');
      turn(player);
    } else {
      board[result.row][result.column] = player;
      round++;
      if (checkWin(player)) {
        console.log('');
        console.log(`Player ${player} WINS, WOHOOO`);
        printBoard();
        console.log('');
        console.log('Play again? yes/no')
        prompt.get(['again'], (err, answer) => {
          if (answer.again === 'yes') {
            startGame();
          } else {
            console.log('thanks for playing');
          }
        })
      } else if (round === 9) {
        console.log('');
        console.log(`Its a Draw :(`);
        printBoard();
        console.log('');
        console.log('Play again? yes/no')
        prompt.get(['again'], (err, answer) => {
          if (answer.again === 'yes') {
            startGame();
          } else {
            console.log('');
            console.log('thanks for playing');
          }
        });
      } else {
        player = player === 'X' ? 'O' : 'X';
        turn(player);
      }
    }
  });
}
prompt.start();


function startGame () {
  board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
  round = 0;
  turn('X');
}

startGame();



