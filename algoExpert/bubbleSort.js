/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Bubble Sort algorithm to sort the array.

*/

// WATCH SOLUTION
//MY ANSWER

function bubbleSort(array) {
  // Write your code here.
  console.log(array);
  return _sorting(array, false);
}

function _sorting(array, isSorted) {
  if (isSorted) {
    console.log(array);
    return array;
  }
  isSorted = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isSorted = false;
      let tempItem = array[i - 1];
      array[i - 1] = array[i];
      array[i] = tempItem;
    }
  }
  return _sorting(array, isSorted);
}

//   ---------- Test Case 1 ----------
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3])); //[ 2, 3, 5, 5, 6, 8, 9]
//   ---------- Test Case 2 ----------
console.log(bubbleSort([1])); //[ 1 ]
//   ---------- Test Case 3 ----------
console.log(bubbleSort([1, 2])); //[ 1, 2 ]
//   ---------- Test Case 4 ----------
console.log(bubbleSort([2, 1])); //[ 1, 2 ]
//   ---------- Test Case 5 ----------
console.log(bubbleSort([1, 3, 2])); //[ 1, 2, 3 ]
//   ---------- Test Case 6 ----------
console.log(bubbleSort([3, 1, 2])); //[ 1, 2, 3 ]
//   ---------- Test Case 7 ----------
console.log(bubbleSort([1, 2, 3])); //[ 1, 2, 3 ]
//   ---------- Test Case 8 ----------
console.log(
  bubbleSort([
    -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8,
  ])
); //[ -10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1,  1,  3, 5,  5,  6,  8,  8, 10]
//   ---------- Test Case 9 ----------
console.log(
  bubbleSort([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8])
); //[ -10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
//   ---------- Test Case 10 ----------
console.log(
  bubbleSort([
    8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2,
    4,
  ])
); //[ -10, -10, -9, -6, -5, -2, -2, -1, 1, 2, 4, 4, 6, 7, 7, 8, 8, 8, 8, 9, 10, 10]
//   ---------- Test Case 11 ----------
console.log(bubbleSort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1])); //[-10, -8, -6, -2, -2, -1, 1, 1, 2, 2, 3, 5, 9]
