/*
You're given an array of integers and an integer. 
Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.
*/

function moveElementToEnd(array, toMove) {
  // Write your code here.
  console.log(array, toMove);
  if (!array.length) {
    return [];
  }
  return console.log(_searchForElement(array, toMove, 0, array.length - 1));
}

function _searchForElement(array, toMove, leftPointer, rightPointer) {
  if (rightPointer < leftPointer) {
    return array;
  }
  if (array[leftPointer] === toMove) {
    const splice = array.splice(leftPointer, 1)[0];
    array.push(splice);
    return _searchForElement(array, toMove, leftPointer, rightPointer - 1);
  }
  if (array[rightPointer] === toMove) {
    const splice = array.splice(rightPointer, 1)[0];
    array.push(splice);
    return _searchForElement(array, toMove, leftPointer, rightPointer - 1);
  }
  return _searchForElement(array, toMove, leftPointer + 1, rightPointer - 1);
}

// ---------- Test Case 1 ----------
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)); // [1, 3, 4, 2, 2, 2, 2, 2]

// ---------- Test Case 2 ----------
console.log(moveElementToEnd([], 3)); //[]

// ---------- Test Case 3 ----------
console.log(moveElementToEnd([1, 2, 4, 5, 6], 3)); // [ 1, 2, 4, 5, 6 ]
// ---------- Test Case 4 ----------
console.log(moveElementToEnd([3, 3, 3, 3, 3], 3)); // [ 3, 3, 3, 3, 3 ]
// ---------- Test Case 5 ----------
console.log(moveElementToEnd([3, 1, 2, 4, 5], 3)); // [ 1, 2, 4, 5, 3 ]
// ---------- Test Case 6 ----------
console.log(moveElementToEnd([1, 2, 4, 5, 3], 3)); // [ 1, 2, 4, 5, 3 ]
// ---------- Test Case 7 ----------
console.log(moveElementToEnd([1, 2, 3, 4, 5], 3)); // [ 1, 2, 4, 5, 3 ]
// ---------- Test Case 8 ----------
console.log(moveElementToEnd([2, 4, 2, 5, 6, 2, 2], 2)); // [4, 5, 6, 2, 2, 2, 2]
// ---------- Test Case 9 ----------
console.log(
  moveElementToEnd([5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12], 5)
);
// [
//   1,  2,  3,  4, 6, 7, 8,
//   9, 10, 11, 12, 5, 5, 5,
//   5,  5,  5
// ]
// ---------- Test Case 10 ----------
console.log(
  moveElementToEnd([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5], 5)
);
// [
//   1,  2,  3,  4, 6, 7, 8,
//   9, 10, 11, 12, 5, 5, 5,
//   5,  5,  5
// ]
// ---------- Test Case 11 ----------
console.log(
  moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5)
);
// [
//   1,  2,  3,  4, 6, 7, 8,
//   9, 10, 11, 12, 5, 5, 5,
//   5,  5,  5
// ]
