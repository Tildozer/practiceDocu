/**
 * who goes next - tic tac toe
whoGoesNext takes an array of 'x's and 'o's and ''
these values represent the 9 spaces of a tic-tac-toe board
it returns 'x' if 'x' goes next
it returns 'o' if 'o' goes next
it returns false if there are no spaces
 */

//TODO
const whoGoesNext = (board) => {
  const pieceCount = board.reduce(
    (howMany, piece) => {
      howMany[piece]++;
      return howMany;
    },
    { x: 0, o: 0 }
  );

  if (pieceCount.x + pieceCount.o === 9) {
    return false;
  }
  if (pieceCount.x > pieceCount.o) {
    return "o";
  }
  return "x";
};

let board = ["x", "o", "x", "", "", "", "", "", ""];
console.log(whoGoesNext(board)); //'o'
board[4] = "o"; //
console.log(whoGoesNext(board)); //'x'
board = ["x", "o", "x", "o", "x", "o", "o", "x", "x"];
console.log(whoGoesNext(board)); //false
