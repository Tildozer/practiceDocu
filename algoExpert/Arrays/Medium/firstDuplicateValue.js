/*
Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).
In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.
If no integer appears more than once, your function should return
-1
Note that you're allowed to mutate the input array.
*/

function firstDuplicateValue(array) {
  // Write your code here.
  const arraySet = new Set();
  for (let i = 0; i < array.length; i++) {
    if (arraySet.has(array[i])) {
      return array[i];
    } else {
      arraySet.add(array[i]);
    }
  }
  return -1;
}

// ---------- Test Case 1 ----------
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])); //  2
// ---------- Test Case 2 ----------
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])); //  3
// ---------- Test Case 3 ----------
console.log(firstDuplicateValue([1, 1, 2, 3, 3, 2, 2])); //  1
// ---------- Test Case 4 ----------
console.log(firstDuplicateValue([3, 1, 3, 1, 1, 4, 4])); //  3
// ---------- Test Case 5 ----------
console.log(firstDuplicateValue([])); // -1
// ---------- Test Case 6 ----------
console.log(firstDuplicateValue([1])); //  -1
// ---------- Test Case 7 ----------
console.log(firstDuplicateValue([1, 1])); //  1
// ---------- Test Case 8 ----------
console.log(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])); //  10
// ---------- Test Case 9 ----------
console.log(firstDuplicateValue([2, 1, 1])); //  1
// ---------- Test Case 10 ----------
console.log(firstDuplicateValue([2, 2, 2, 2, 2, 2, 2, 2, 2])); //  2
// ---------- Test Case 11 ----------
console.log(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // -1
// ---------- Test Case 12 ----------
console.log(firstDuplicateValue([7, 6, 5, 3, 6, 4, 3, 5, 2])); //  6
// ---------- Test Case 13 ----------
console.log(
  firstDuplicateValue([9, 13, 6, 2, 3, 5, 5, 5, 3, 2, 2, 2, 2, 4, 3])
); //  5
// ---------- Test Case 14 ----------
console.log(
  firstDuplicateValue([
    23, 21, 22, 5, 3, 13, 11, 16, 5, 11, 9, 14, 23, 3, 2, 2, 5, 11, 6, 11, 23,
    8, 1,
  ])
); //  5
// ---------- Test Case 15 ----------
console.log(
  firstDuplicateValue([
    8, 20, 4, 12, 14, 9, 19, 17, 14, 20, 22, 9, 6, 15, 1, 15, 10, 9, 17, 7, 22,
    17,
  ])
); //  14

// ---------- Test Case 16 ----------
console.log(firstDuplicateValue([3, 3, 2])); //  3
// ---------- Test Case 17 ----------
console.log(firstDuplicateValue([6, 6, 5, 1, 3, 7, 7, 8])); //  6
// ---------- Test Case 18 ----------
console.log(
  firstDuplicateValue([
    23, 25, 9, 26, 2, 19, 24, 18, 25, 17, 13, 3, 14, 17, 9, 20, 26, 15, 21, 2,
    6, 11, 2, 12, 23, 5, 4, 20,
  ])
); //  25
// ---------- Test Case 19 ----------
console.log(
  firstDuplicateValue([
    12, 22, 6, 18, 5, 17, 18, 22, 22, 4, 6, 14, 12, 8, 5, 6, 10, 7, 13, 22, 17,
    18,
  ])
); //  18
// ---------- Test Case 20 ----------
console.log(
  firstDuplicateValue([
    16, 6, 6, 18, 6, 13, 28, 9, 3, 26, 10, 2, 23, 5, 20, 21, 11, 20, 6, 11, 26,
    20, 26, 25, 13, 3, 12, 4,
  ])
); //  6
// ---------- Test Case 21 ----------
console.log(
  firstDuplicateValue([
    15, 2, 6, 3, 3, 22, 14, 16, 6, 21, 4, 16, 2, 17, 9, 13, 1, 3, 5, 6, 1, 2,
    23, 16, 16,
  ])
); //  3
// ---------- Test Case 22 ----------
console.log(firstDuplicateValue([4, 7, 9, 7, 1, 3, 2, 3, 1, 12, 12, 5])); //  7
// ---------- Test Case 23 ----------
console.log(
  firstDuplicateValue([
    9, 21, 9, 22, 3, 23, 4, 26, 7, 11, 25, 25, 19, 13, 23, 28, 5, 23, 19, 13,
    10, 26, 28, 9, 28, 16, 7, 13, 22,
  ])
); //  9
// ---------- Test Case 24 ----------
console.log(
  firstDuplicateValue([
    29, 3, 23, 16, 1, 22, 21, 14, 15, 21, 12, 27, 9, 12, 11, 3, 22, 5, 21, 24,
    14, 26, 11, 5, 21, 25, 15, 19, 13, 4,
  ])
); //  21
// ---------- Test Case 25 ----------
console.log(firstDuplicateValue([13, 2, 8, 8, 10, 11, 13, 11, 9, 13, 4, 5, 7])); //  8
// ---------- Test Case 26 ----------
console.log(
  firstDuplicateValue([
    4, 7, 7, 14, 14, 10, 15, 14, 14, 16, 14, 11, 5, 12, 17, 7, 1, 6, 13,
  ])
); //  7
// ---------- Test Case 27 ----------
console.log(firstDuplicateValue([2, 5, 1, 4, 1])); //  1
// ---------- Test Case 28 ----------
console.log(firstDuplicateValue([11, 10, 5, 3, 1, 7, 10, 6, 10, 11, 7])); //  10
// ---------- Test Case 29 ----------
console.log(
  firstDuplicateValue([2, 13, 3, 9, 1, 9, 1, 11, 11, 5, 3, 1, 9, 12])
); //  9
// ---------- Test Case 30 ----------
console.log(firstDuplicateValue([3, 3, 1, 1])); //  3
// ---------- Test Case 31 ----------
console.log(
  firstDuplicateValue([
    26, 18, 21, 26, 26, 16, 16, 3, 19, 9, 10, 24, 21, 9, 8, 11, 17, 21, 18, 22,
    17, 27, 6, 7, 6, 10, 4,
  ])
); // 26

// ---------- Test Case 32 ----------
console.log(
  firstDuplicateValue([
    27, 16, 15, 21, 10, 21, 3, 21, 5, 12, 27, 24, 20, 26, 5, 13, 26, 22, 26, 8,
    23, 10, 14, 17, 7, 5, 3,
  ])
); //  21
// ---------- Test Case 33 ----------
console.log(
  firstDuplicateValue([
    11, 6, 1, 1, 4, 19, 10, 12, 19, 8, 12, 15, 26, 9, 6, 20, 17, 12, 26, 15, 25,
    18, 26, 5, 3, 5, 16, 5,
  ])
); //  1
// ---------- Test Case 34 ----------
console.log(
  firstDuplicateValue([
    16, 22, 20, 22, 26, 19, 8, 17, 18, 24, 17, 19, 19, 11, 18, 13, 10, 20, 6,
    23, 20, 19, 21, 6, 17, 7,
  ])
); //  22
// ---------- Test Case 35 ----------
console.log(
  firstDuplicateValue([11, 13, 6, 12, 4, 15, 4, 9, 3, 10, 5, 8, 15, 5, 8])
); //  4
// ---------- Test Case 36 ----------
console.log(firstDuplicateValue([7, 9, 5, 6, 4, 11, 2, 8, 2, 5, 1])); //  2
// ---------- Test Case 37 ----------
console.log(firstDuplicateValue([8, 1, 5, 2, 9, 12, 9, 6, 9, 9, 5, 13, 5, 9])); //  9
// ---------- Test Case 38 ----------
console.log(firstDuplicateValue([11, 5, 2, 7, 11, 11, 3, 11, 4, 2, 9])); //  11
// ---------- Test Case 39 ----------
console.log(
  firstDuplicateValue([
    2, 22, 3, 20, 18, 8, 29, 25, 7, 12, 12, 17, 1, 28, 3, 6, 11, 2, 28, 16, 23,
    27, 8, 28, 4, 29, 24, 12, 29,
  ])
); //  12
// ---------- Test Case 40 ----------
console.log(firstDuplicateValue([5, 1, 3, 5, 1])); //  5
// ---------- Test Case 41 ----------
console.log(
  firstDuplicateValue([
    20, 12, 3, 18, 9, 16, 4, 18, 6, 19, 14, 23, 10, 13, 6, 1, 22, 11, 11, 16,
    13, 15, 17, 19, 14, 12, 20,
  ])
); //  18
// ---------- Test Case 42 ----------
console.log(
  firstDuplicateValue([
    23, 15, 11, 5, 13, 11, 9, 9, 13, 8, 22, 12, 2, 24, 6, 2, 15, 24, 12, 9, 13,
    13, 22, 18,
  ])
); //  11
// ---------- Test Case 43 ----------
console.log(firstDuplicateValue([4, 1, 5, 1, 4])); //  1

// ---------- Test Case 44 ----------
console.log(
  firstDuplicateValue([
    7, 14, 4, 6, 17, 17, 3, 14, 1, 16, 18, 4, 12, 13, 8, 19, 1, 2, 4, 14,
  ])
); //  17
// ---------- Test Case 45 ----------
console.log(firstDuplicateValue([5, 6, 6, 4, 3, 5])); //  6
// ---------- Test Case 46 ----------
console.log(firstDuplicateValue([3, 2, 3, 1])); //  3
// ---------- Test Case 47 ----------
console.log(
  firstDuplicateValue([9, 12, 14, 6, 14, 2, 4, 9, 13, 2, 10, 5, 7, 1])
); //  14
// ---------- Test Case 48 ----------
console.log(
  firstDuplicateValue([
    9, 2, 11, 5, 6, 8, 10, 15, 5, 7, 11, 6, 19, 19, 14, 15, 3, 9, 16,
  ])
); //  5
// ---------- Test Case 49 ----------
console.log(firstDuplicateValue([2, 6, 1, 7, 1, 6, 6])); //  1
// ---------- Test Case 50 ----------
console.log(firstDuplicateValue([6, 3, 1, 8, 2, 2, 1, 7, 10, 8, 6, 4])); //  2
// ---------- Test Case 51 ----------
console.log(
  firstDuplicateValue([
    21, 17, 1, 8, 22, 8, 22, 8, 23, 3, 21, 5, 18, 2, 8, 21, 21, 22, 10, 24, 13,
    4, 20, 24,
  ])
); //  8
// ---------- Test Case 52 ----------
console.log(
  firstDuplicateValue([
    16, 9, 13, 10, 18, 17, 11, 5, 11, 4, 2, 16, 15, 6, 3, 7, 15, 10, 1,
  ])
); //  11
// ---------- Test Case 53 ----------
console.log(firstDuplicateValue([5, 5, 5, 4, 6, 6, 2])); //  5
// ---------- Test Case 54 ----------
console.log(firstDuplicateValue([5, 3, 8, 2, 9, 6, 8, 1, 6])); //  8
// ---------- Test Case 55 ----------
console.log(firstDuplicateValue([5, 5, 1, 5, 3, 7, 4, 4])); //  5
// ---------- Test Case 56 ----------
console.log(
  firstDuplicateValue([
    19, 4, 1, 6, 2, 5, 20, 13, 8, 6, 11, 12, 12, 12, 11, 18, 7, 13, 6, 10,
  ])
); //  6
// ---------- Test Case 57 ----------
console.log(
  firstDuplicateValue([3, 11, 11, 10, 11, 8, 8, 11, 10, 11, 10, 8, 10])
); //  11
// ---------- Test Case 58 ----------
console.log(
  firstDuplicateValue([
    15, 3, 15, 6, 13, 3, 12, 10, 17, 8, 13, 1, 12, 9, 14, 7, 16,
  ])
); //  15
// ---------- Test Case 59 ----------
console.log(firstDuplicateValue([2, 2, 2])); // 2
// ---------- Test Case 60 ----------
console.log(firstDuplicateValue([11, 6, 8, 8, 8, 9, 10, 6, 4, 1, 10, 1, 6])); //  8
// ---------- Test Case 61 ----------
console.log(
  firstDuplicateValue([
    2, 3, 16, 9, 11, 14, 13, 1, 10, 12, 5, 17, 4, 16, 10, 5, 4,
  ])
); //  16
// ---------- Test Case 62 ----------
console.log(
  firstDuplicateValue([13, 4, 10, 10, 8, 13, 13, 7, 11, 6, 3, 2, 11])
); //  10
// ---------- Test Case 63 ----------
console.log(
  firstDuplicateValue([6, 15, 7, 10, 9, 14, 10, 1, 10, 1, 2, 11, 1, 6, 8])
); //  10
