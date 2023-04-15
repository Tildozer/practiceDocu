/*
Write a functin that takes in an array of integers and returns a sorted versions of that array.
Use the selection Sort algorithm to sort the array.
*/

function selectionSort(array) {
  // Write your code here.
  let unsortedIdx = 0;
  while (unsortedIdx < array.length) {
    let smallestIdx = unsortedIdx;
    for (let i = unsortedIdx; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    _swap(unsortedIdx, smallestIdx, array);
    unsortedIdx += 1;
  }
  return array;
}

function _swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}

// ---------- Test Case 1 ----------
console.log(selectionSort([8, 5, 2, 9, 5, 6, 3])); // [2, 3, 5, 5, 6, 8, 9]
// ---------- Test Case 2 ----------
console.log(selectionSort([1])); // [ 1 ]
// ---------- Test Case 3 ----------
console.log(selectionSort([1, 2])); // [ 1, 2 ]
// ---------- Test Case 4 ----------
console.log(selectionSort([2, 1])); // [ 1, 2 ]
// ---------- Test Case 5 ----------
console.log(selectionSort([1, 3, 2])); // [ 1, 2, 3 ]
// ---------- Test Case 6 ----------
console.log(selectionSort([3, 1, 2])); // [ 1, 2, 3 ]
// ---------- Test Case 7 ----------
console.log(selectionSort([1, 2, 3])); // [ 1, 2, 3 ]
// ---------- Test Case 8 ----------
console.log(
  selectionSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
  ])
); // [-10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10];
// ---------- Test Case 9 ----------
console.log(
  selectionSort([
    -7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8,
  ])
); // [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10];
// ---------- Test Case 10 ----------
console.log(
  selectionSort([
    8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2,
    4,
  ])
);
// [-10, -10, -9, -6, -5, -2, -2, -1, 1, 2, 4, 4, 6, 7, 7, 8, 8, 8, 8, 9, 10, 10];
