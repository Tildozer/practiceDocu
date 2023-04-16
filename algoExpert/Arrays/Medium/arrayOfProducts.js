/*
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
In other words, the value at output [i] is equal to the product of every number in the input array other than input[i].
Note that you're expected to solve this problem without using division.
*/

function arrayOfProducts(array) {
  // Write your code here.
  const newArray = [];
  let newSum = 1;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    for (let j = 0; j < array.length; j++) {
      if (newSum === 0) {
        newSum = 0;
        break;
      }
      if (j !== i) {
        newSum *= array[j];
      }
    }
    newArray.push(newSum);
    newSum = 1;
  }
  console.log(array, newArray);
  return newArray;
}

// ---------- Test Case 1 ----------
console.log(arrayOfProducts([5, 1, 4, 2])); //  [ 8, 40, 10, 20 ]
// ---------- Test Case 2 ----------
console.log(arrayOfProducts([1, 8, 6, 2, 4])); //  [ 384, 48, 64, 192, 96 ]
// ---------- Test Case 3 ----------
console.log(arrayOfProducts([-5, 2, -4, 14, -6])); //  [ 672, -1680, 840, -240, 560 ]
// ---------- Test Case 4 ----------
console.log(arrayOfProducts([9, 3, 2, 1, 9, 5, 3, 2]));
// [
//    1620, 4860, 7290,
//   14580, 1620, 2916,
//    4860, 7290
// ]
// ---------- Test Case 5 ----------
console.log(arrayOfProducts([4, 4])); // [ 4, 4 ]
// ---------- Test Case 6 ----------
console.log(arrayOfProducts([0, 0, 0, 0])); // [ 0, 0, 0, 0 ]
// ---------- Test Case 7 ----------
console.log(arrayOfProducts([1, 1, 1, 1])); // [ 1, 1, 1, 1 ]
// ---------- Test Case 8 ----------
console.log(arrayOfProducts([-1, -1, -1])); // [ 1, 1, 1 ]
// ---------- Test Case 9 ----------
console.log(arrayOfProducts([-1, -1, -1, -1])); // [ -1, -1, -1, -1 ]
// ---------- Test Case 10 ----------
console.log(arrayOfProducts([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [
//   0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0,
//   0
// ]
// ---------- Test Case 11 ----------
console.log(arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [
//   362880, 0, 0,
//        0, 0, 0,
//        0, 0, 0,
//        0
// ]
