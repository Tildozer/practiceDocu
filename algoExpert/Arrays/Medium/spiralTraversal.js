/*
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.
Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.
*/

function spiralTraverse(array) {
  // Write your code here.
  return _spiral([], array, 0, 0, array[0].length - 1, array.length - 1);
}

function _spiral(newArray, array, startCol, startRow, endCol, endRow) {
  if (endRow < startRow || startCol > endCol) {
    return newArray;
  }
  for (let i = startCol; i < endCol; i++) {
    newArray.push(array[startRow][i]);
  }
  for (let i = startRow; i <= endRow; i++) {
    newArray.push(array[i][endCol]);
  }
  if (startRow !== endRow) {
    for (let i = endCol - 1; i > startCol; i--) {
      newArray.push(array[endRow][i]);
    }
  }
  if (endCol !== startCol) {
    for (let i = endRow; i > startRow; i--) {
      newArray.push(array[i][startRow]);
    }
  }

  return _spiral(
    newArray,
    array,
    startCol + 1,
    startRow + 1,
    endCol - 1,
    endRow - 1
  );
}

// ---------- Test Case 1 ----------
console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);
// [
//    1,  2,  3,  4,  5,  6,
//    7,  8,  9, 10, 11, 12,
//   13, 14, 15, 16
// ]

// ---------- Test Case 2 ----------
console.log(spiralTraverse([[1]])); // [ 1 ]
// ---------- Test Case 3 ----------
console.log(
  spiralTraverse([
    [1, 2],
    [4, 3],
  ])
); // [ 1, 2, 3, 4 ]
// ---------- Test Case 4 ----------
console.log(
  spiralTraverse([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
// ---------- Test Case 5 ----------
console.log(
  spiralTraverse([
    [19, 32, 33, 34, 25, 8],
    [16, 15, 14, 13, 12, 11],
    [18, 31, 36, 35, 26, 9],
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [17, 30, 29, 28, 27, 10],
  ])
);
// [
//   19, 32, 33, 34, 25,  8, 11,  9,  6,
//    7, 10, 27, 28, 29, 30, 17, 20,  1,
//   18, 16, 15, 14, 13, 12, 26,  5, 24,
//   23, 22, 21,  2, 31, 36, 35,  4,  3
// ]

// ---------- Test Case 6 ----------
console.log(
  spiralTraverse([
    [4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
    [12, 19, 15, 16, 20, 18, 13, 17, 11, 14],
  ])
);
// [
//    4,  2,  3,  6,  7,  8,  1,
//    9,  5, 10, 14, 11, 17, 13,
//   18, 20, 16, 15, 19, 12
// ]
// ---------- Test Case 7 ----------
console.log(
  spiralTraverse([
    [27, 12, 35, 26],
    [25, 21, 94, 11],
    [19, 96, 43, 56],
    [55, 36, 10, 18],
    [96, 83, 31, 94],
    [93, 11, 90, 16],
  ])
);
// [
//   27, 12, 35, 26, 11, 56, 18, 94,
//   16, 90, 11, 93, 96, 55, 19, 25,
//   21, 94, 43, 10, 31, 83, 36, 96
// ]

// ---------- Test Case 8 ----------
console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6],
  ])
);
// [
//    1,  2, 3, 4,  5,
//    6,  7, 8, 9, 10,
//   11, 12
// ]

// ---------- Test Case 9 ----------
console.log(
  spiralTraverse([
    [1, 2, 3],
    [12, 13, 4],
    [11, 14, 5],
    [10, 15, 6],
    [9, 8, 7],
  ])
);
// [
//    1,  2,  3,  4,  5,  6,
//    7,  8,  9, 10, 11, 12,
//   13, 14, 15
// ]
// ---------- Test Case 10 ----------
console.log(
  spiralTraverse([
    [1, 11],
    [2, 12],
    [3, 13],
    [4, 14],
    [5, 15],
    [6, 16],
    [7, 17],
    [8, 18],
    [9, 19],
    [10, 20],
  ])
);
// [
//    1, 11, 12, 13, 14, 15, 16,
//   17, 18, 19, 20, 10,  9,  8,
//    7,  6,  5,  4,  3,  2
// ]

// ---------- Test Case 11 ----------
console.log(spiralTraverse([[1, 3, 2, 5, 4, 7, 6]]));
// [
//   1, 3, 2, 5,
//   4, 7, 6
// ]
// ---------- Test Case 12 ----------
console.log(spiralTraverse([[1], [3], [2], [5], [4], [7], [6]]));
// [
//   1, 3, 2, 5,
//   4, 7, 6
// ]
