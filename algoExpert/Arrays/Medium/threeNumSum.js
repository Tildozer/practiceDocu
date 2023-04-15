/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. 
The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
If no three numbers sum up to the target sum, the function should return an empty array.
*/

// MY SOLUTION
//  WATCH ACTUAL SOLUTION

function threeNumberSum(array, targetSum) {
  // Write your code here.
  const sorted = array.sort((a, b) => a - b);
  const sumToTarget = [];
  for (let i = 1; i < array.length; i++) {
    _findSums(sorted, sumToTarget, i - 1, i, i + 1, targetSum);
  }
  return sumToTarget.sort((a, b) => a[0] - b[0]);
}

function _findSums(array, sumToTarget, left, middle, right, targetSum) {
  if (right === array.length - 1 && left === -1) {
    return;
  }
  const total = array[left] + array[right] + array[middle];
  if (total === targetSum) {
    sumToTarget.push([array[left], array[middle], array[right]]);
    return _findSums(array, sumToTarget, left - 1, middle, right, targetSum);
  } else if (total > targetSum) {
    if (left - 1 > -1) {
      return _findSums(array, sumToTarget, left - 1, middle, right, targetSum);
    } else {
      return _findSums(array, sumToTarget, left, middle, right + 1, targetSum);
    }
  } else if (total < targetSum) {
    if (right + 1 < array.length) {
      return _findSums(array, sumToTarget, left, middle, right + 1, targetSum);
    } else {
      return _findSums(array, sumToTarget, left - 1, middle, right, targetSum);
    }
  }
}

// ---------- Test Case 1 ----------
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); // [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
// ---------- Test Case 2 ----------
console.log(threeNumberSum([1, 2, 3], 6)); // [ [ 1, 2, 3 ] ]
// ---------- Test Case 3 ----------
console.log(threeNumberSum([1, 2, 3], 7)); // []
// ---------- Test Case 4 ----------
console.log(threeNumberSum([8, 10, -2, 49, 14], 57)); // [ [ -2, 10, 49 ] ]
// ---------- Test Case 5 ----------
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)); // [ [ -8, 3, 5 ], [ -6, 1, 5 ], [ -1, 0, 1 ] ]
// ---------- Test Case 6 ----------
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0));
// [
//   [-8, 2, 6],
//   [-8, 3, 5],
//   [-6, 0, 6],
//   [-6, 1, 5],
//   [-1, 0, 1],
// ];
// ---------- Test Case 7 ----------
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0));
// [
//   [-8, 2, 6],
//   [-8, 3, 5],
//   [-6, 0, 6],
//   [-6, 1, 5],
//   [-5, -1, 6],
//   [-5, 0, 5],
//   [-5, 2, 3],
//   [-1, 0, 1],
// ];
// ---------- Test Case 8 ----------
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
// [
//   [ 1, 2, 15 ],
//   [ 1, 8, 9 ],
//   [ 2, 7, 9 ],
//   [ 3, 6, 9 ],
//   [ 3, 7, 8 ],
//   [ 4, 5, 9 ],
//   [ 4, 6, 8 ],
//   [ 5, 6, 7 ]
// ]
// ---------- Test Case 9 ----------
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32)); // [ [ 8, 9, 15 ] ]
// ---------- Test Case 10 ----------
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33)); // []
// ---------- Test Case 11 ----------
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5)); // []
