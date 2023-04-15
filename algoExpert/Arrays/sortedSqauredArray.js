/*
Write a function that takes in a non empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in asscending order.
*/

function sortedSquaredArray(array) {
  // Write your code here.
  return array.map((num) => num * num).sort((a, b) => a - b);
}

// ---------- Test Case 1 ----------
console.log(sortedSquaredNumber([1, 2, 3, 5, 6, 8, 9])); // [1,  4,  9, 25, 36, 64, 81]
// ---------- Test Case 2 ----------
console.log(sortedSquaredNumber([1])); // [ 1 ]
// ---------- Test Case 3 ----------
console.log(sortedSquaredNumber([1, 2])); // [ 1, 4 ]
// ---------- Test Case 4 ----------
console.log(sortedSquaredNumber([1, 2, 3, 4, 5])); // [ 1, 4, 9, 16, 25 ]
// ---------- Test Case 5 ----------
console.log(sortedSquaredNumber([0])); // [ 0 ]
// ---------- Test Case 6 ----------
console.log(sortedSquaredNumber([10])); // [ 100 ]
// ---------- Test Case 7 ----------
console.log(sortedSquaredNumber([-1])); // [ 1 ]
// ---------- Test Case 8 ----------
console.log(sortedSquaredNumber([-2, -1])); // [ 1, 4 ]
// ---------- Test Case 9 ----------
console.log(sortedSquaredNumber([-5, -4, -3, -2, -1]));
// [ 1, 4, 9, 16, 25 ]
// ---------- Test Case 10 ----------
console.log(sortedSquaredNumber([-10])); // [ 100 ]
// ---------- Test Case 11 ----------
console.log(sortedSquaredNumber([-10, -5, 0, 5, 10]));
// [ 0, 25, 25, 100, 100 ]
// ---------- Test Case 12 ----------
console.log(sortedSquaredNumber([-7, -3, 1, 9, 22, 30]));
// [ 1, 9, 49, 81, 484, 900 ]
// ---------- Test Case 13 ----------
console.log(sortedSquaredNumber([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]));
// [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
// ---------- Test Case 14 ----------
console.log(sortedSquaredNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ---------- Test Case 15 ----------
console.log(sortedSquaredNumber([-1, -1, 2, 3, 3, 3, 4]));
// [1, 1,  4, 9, 9, 9, 16]
// ---------- Test Case 16 ----------
console.log(sortedSquaredNumber([-3, -2, -1])); // [ 1, 4, 9 ]
// ---------- Test Case 17 ----------
console.log(sortedSquaredNumber([-3, -2, -1])); // [ 1, 4, 9 ]
