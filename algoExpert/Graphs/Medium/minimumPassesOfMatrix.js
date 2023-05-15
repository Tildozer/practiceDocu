/*
Write a function that takes in an integer matrix of potentially unequal height and width and returns the minimum number of passes required to convert all negative integers in the matrix to positive integers.
A negative integer in the matrix can only be converted to a positive integer if one or more of its adjacent elements is positive. 
An adjacent element is an element that is to the left, to the right, above, or below the current element in the matrix. 
Converting a negative to a positive simply involves multiplying it by -1.
Note that the 0 value is neither positive nor negative, meaning that a 0 can't convert an adjacent negative to a positive.
A single pass through the matrix involves converting all the negative integers that can be converted at a particular point in time.
*/

function minimumPassesOfMatrix(matrix) {
  // Write your code here.
  let passes = convertNegatives(matrix);

  return containsNegative(matrix) ? -1 : passes - 1;
}

function convertNegatives(matrix) {
  let nextPassQueue = getAllPositivePositions(matrix);

  let passes = 0;

  while (nextPassQueue.length) {
    let currentPassQueue = nextPassQueue;
    nextPassQueue = [];

    while (currentPassQueue.length) {
      let [currentRow, currentCol] = currentPassQueue.shift();

      let adjacentPositions = getAdjacentPositions(
        currentRow,
        currentCol,
        matrix
      );
      for (let i = 0; i < adjacentPositions.length; i++) {
        let position = adjacentPositions[i];
        let [row, col] = position;

        let value = matrix[row][col];

        if (value < 0) {
          matrix[row][col] = value * -1;
          nextPassQueue.push([row, col]);
        }
      }
    }
    passes++;
  }
  return passes;
}

function getAllPositivePositions(matrix) {
  let positivePositions = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
      const value = row[j];
      if (value > 0) {
        positivePositions.push([i, j]);
      }
    }
  }
  return positivePositions;
}

function getAdjacentPositions(row, col, matrix) {
  let adjacentPositions = [];

  if (row > 0) {
    adjacentPositions.push([row - 1, col]);
  }
  if (row < matrix.length - 1) {
    adjacentPositions.push([row + 1, col]);
  }
  if (col > 0) {
    adjacentPositions.push([row, col - 1]);
  }
  if (col < matrix[0].length - 1) {
    adjacentPositions.push([row, col + 1]);
  }

  return adjacentPositions;
}

function containsNegative(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        return true;
      }
    }
  }
  return false;
}
