/*
Write a function that takes in a sorted array of integers as well as a target integer. 
The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.
If you're unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.
*/

// WATCH SOLUTION
//MY ANSWER

function binarySearch(array, target) {
  // Write your code here.
  const sortedArray = array.sort((a, b) => a - b);
  const length = sortedArray.length;
  const half = Math.floor(length / 2);
  if (sortedArray[half] === target) {
    return half;
  }
  return _search(0, length, array, target);
}
function _search(leftPointer, rightPointer, array, target) {
  if (leftPointer > rightPointer) {
    return -1;
  }
  if (array[leftPointer] === target) {
    return leftPointer;
  }
  if (array[rightPointer] === target) {
    return rightPointer;
  }
  return _search(leftPointer + 1, rightPointer - 1, array, target);
}

// ---------- Test Case 1 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33); // 3
// ---------- Test Case 2 ----------
console.log([1, 5, 23, 111], 111); // 3
// ---------- Test Case 3 ----------
console.log([1, 5, 23, 111], 5); // 1
// ---------- Test Case 4 ----------
console.log([1, 5, 23, 111], 35); //  -1
// ---------- Test Case 5 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 0); // 0
// ---------- Test Case 6 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1); // 1
// ---------- Test Case 7 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 21); // 2
// ---------- Test Case 8 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 45); //5
// ---------- Test Case 9 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 61); //6
// ---------- Test Case 10 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 71); //  7
// ---------- Test Case 11 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72); // 8
// ---------- Test Case 12 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73); // 9
// ---------- Test Case 13 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70); // -1
// ---------- Test Case 14 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355); // 10
// ---------- Test Case 15 ----------
console.log([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354); // -1
// ---------- Test Case 16 ----------
console.log([1, 5, 23, 111], 120); // -1
// ---------- Test Case 17 ----------
console.log([5, 23, 111], 3); //  -1
