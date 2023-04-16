/*
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase.
Similarly, non-decreasing elements aren't necessarily exclusively increasing, they simply don't decrease.
Note that empty arrays and arrays of one element are monotonic.
*/

function isMonotonic(array) {
  // Write your code here.

  if (array.length < 2) {
    return true;
  }
  const increasingInValue =
    array[array.length - 2] < array[array.length - 1] ? true : false;
  for (let i = 1; i < array.length; i++) {
    if (increasingInValue) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    } else {
      if (array[i - 1] < array[i]) {
        return false;
      }
    }
  }
  return true;
}

//   ---------- Test Case 1 ----------
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])); // true
// ---------- Test Case 2 ----------
console.log(isMonotonic([])); // true
// ---------- Test Case 3 ----------
console.log(isMonotonic([1])); // true
// ---------- Test Case 4 ----------
console.log(isMonotonic([1, 2])); // true
// ---------- Test Case 5 ----------
console.log(isMonotonic([2, 1])); // true
// ---------- Test Case 6 ----------
console.log(isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001])); // true
// ---------- Test Case 7 ----------
console.log(isMonotonic([-1, -5, -10, -1100, -1101, -1102, -9001])); // true
// ---------- Test Case 8 ----------
console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001])); // false
// ---------- Test Case 9 ----------
console.log(isMonotonic([1, 2, 0])); // false
// ---------- Test Case 10 ----------
console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11])); // false
// ---------- Test Case 11 ----------
console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11])); // true
// ---------- Test Case 12 ----------
console.log(
  isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11])
); // false
// ---------- Test Case 13 ----------
console.log(
  isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11])
); // true
// ---------- Test Case 14 ----------
console.log(isMonotonic([-1, -1, -1, -1, -1, -1, -1, -1])); // true
// ---------- Test Case 15 ----------
console.log(isMonotonic([1, 2, -1, -2, -5])); // false
// ---------- Test Case 16 ----------
console.log(isMonotonic([-1, -5, 10])); // false
// ---------- Test Case 17 ----------
console.log(isMonotonic([2, 2, 2, 1, 4, 5])); // false
// ---------- Test Case 18 ----------
console.log(isMonotonic([1, 1, 1, 2, 3, 4, 1])); // false
// ---------- Test Case 19 ----------
console.log(isMonotonic([1, 2, 3, 3, 2, 1])); // false
