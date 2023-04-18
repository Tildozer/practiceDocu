/*
You're given an unordered list of unique integers nums in the range [1, n] , where n represents the length of nums + 2. 
This means that two numbers in this range are missing from the list.
Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.
*/

function missingNumbers(nums) {
  // Write your code here.
  const sorted = nums.sort((a, b) => a - b);
  let missing = [];
  let idx = 0;
  for (let i = 0; i < sorted.length + 2; i++) {
    if (sorted[Math.min(idx, sorted.length - 1)] !== i + 1) {
      missing.push(i + 1);
    } else {
      idx += 1;
    }
  }
  return missing;
}

//   ---------- Test Case 1 ----------
console.log(missingNumbers([])); //   [ 1, 2 ]
//   ---------- Test Case 2 ----------
console.log(missingNumbers([1])); //   [ 2, 3 ]
//   ---------- Test Case 3 ----------
console.log(missingNumbers([2])); //   [ 1, 3 ]
//   ---------- Test Case 4 ----------
console.log(missingNumbers([3])); //   [ 1, 2 ]
//   ---------- Test Case 5 ----------
console.log(missingNumbers([1, 3])); //   [ 2, 4 ]
//   ---------- Test Case 6 ----------
console.log(missingNumbers([1, 3])); //   [ 2, 4 ]
//   ---------- Test Case 7 ----------
console.log(missingNumbers([1, 2, 3])); //   [ 4, 5 ]
//   ---------- Test Case 8 ----------
console.log(missingNumbers([1, 2, 3])); //   [ 4, 5 ]
//   ---------- Test Case 9 ----------
console.log(missingNumbers([1, 2, 3])); //   [ 4, 5 ]
//   ---------- Test Case 10 ----------
console.log(missingNumbers([3, 4, 5])); //   [ 1, 2 ]
//   ---------- Test Case 11 ----------
console.log(missingNumbers([3, 4, 5])); //   [ 1, 2 ]
//   ---------- Test Case 12 ----------
console.log(missingNumbers([1, 3, 4, 5])); //   [ 2, 6 ]
//   ---------- Test Case 13 ----------
console.log(missingNumbers([1, 3, 4, 5])); //   [ 2, 6 ]
//   ---------- Test Case 14 ----------
console.log(missingNumbers([1, 2, 4, 5, 7])); //   [ 3, 6 ]
//   ---------- Test Case 15 ----------
console.log(missingNumbers([1, 2, 4, 5, 7])); //   [ 3, 6 ]
//   ---------- Test Case 16 ----------
console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7])); //   [ 8, 9 ]
//   ---------- Test Case 17 ----------
console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7])); //   [ 8, 9 ]
//   ---------- Test Case 18 ----------
console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7])); //   [ 8, 9 ]
//   ---------- Test Case 19 ----------
console.log(
  missingNumbers([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22,
  ])
); //   [ 14, 19 ]
//   ---------- Test Case 20 ----------
console.log(
  missingNumbers([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22,
  ])
); //   [ 14, 19 ]
//   ---------- Test Case 21 ----------
console.log(
  missingNumbers([
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  ])
); //   [ 1, 2 ]
//   ---------- Test Case 22 ----------
console.log(
  missingNumbers([
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  ])
); // [ 1, 2 ]
//   ---------- Test Case 23 ----------
console.log(
  missingNumbers([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ])
); //   [ 23, 24 ]
//   ---------- Test Case 24 ----------
console.log(
  missingNumbers([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ])
); //   [ 23, 24 ]
