/*
You are given an m x n binary matrix matrix.

You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from 0 to 1 or vice versa).

Return the maximum number of rows that have all values equal after some number of flips.

 

Example 1:

Input: matrix = [[0,1],[1,1]]
Output: 1
Explanation: After flipping no values, 1 row has all values equal.

Example 2:

Input: matrix = [[0,1],[1,0]]
Output: 2
Explanation: After flipping values in the first column, both rows have equal values.

Example 3:

Input: matrix = [[0,0,0],[0,0,1],[1,1,0]]
Output: 2
Explanation: After flipping values in the first two columns, the last two rows have equal values.

*/

const findMaxIdentical = (arr, matrix, m) => {
  let count = 1;
  let l = arr.length;
  for (let i = 0; i < m; i++) {
    const matchArr = matrix[i];
    let diff = 0;
    for (let j = 0; j < l; j++) {
      if (matchArr[j] !== arr[j]) diff++;
    }
    if (diff === arr.length || diff === 0) count++;
  }

  return count;
};

var maxEqualRowsAfterFlips = function (matrix) {
  const m = matrix.length;
  let i = 0;
  let max = 0;
  while (i < m) {
    const currArr = matrix.shift();
    max = Math.max(max, findMaxIdentical(currArr, matrix, m - 1));
    matrix.push(currArr);
    i++;
  }
  return max;
};

const test = () => {
  const matrixes = [
    [
      [0, 1],
      [1, 1],
    ],
    [
      [0, 1],
      [1, 0],
    ],
    [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ],
  ];
  const results = [1, 2, 2];

  for (let i = 0; i < matrixes.length; i++) {
    console.log(maxEqualRowsAfterFlips(matrixes[i]) === results[i]);
  }
};

test();
