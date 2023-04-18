/*
You're given a list of integers nums.
Write a function that returns a boolean representing whether there exists a zero-sum subarray of nums.
A zero-sum subarray is any subarray where all of the values add up to zero. 
A subarray is any contiguous section of the array. 
For the purposes of this problem, a subarray can be as small as one element and as long as the original array.
*/

// MY SOLUTION

function zeroSumSubarray(nums) {
  // Write your code here.
  let sum;
  for (let i = 0; i < nums.length; i++) {
    if (sum === undefined) {
      sum = nums[i];
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (sum === 0) {
        return true;
      }
      sum += nums[j];
    }
    if (sum === 0) {
      return true;
    }
    sum = undefined;
  }
  return false;
}

// ---------- Test Case 1 ----------
console.log(zeroSumSubArrays([])); // false
// ---------- Test Case 2 ----------
console.log(zeroSumSubArrays([0])); // true
// ---------- Test Case 3 ----------
console.log(zeroSumSubArrays([1])); // false
// ---------- Test Case 4 ----------
console.log(zeroSumSubArrays([1, 2, 3])); // false
// ---------- Test Case 5 ----------
console.log(zeroSumSubArrays([1, 1, 1])); // false
// ---------- Test Case 6 ----------
console.log(zeroSumSubArrays([-1, -1, -1])); // false
// ---------- Test Case 7 ----------
console.log(zeroSumSubArrays([0, 0, 0])); // true
// ---------- Test Case 8 ----------
console.log(zeroSumSubArrays([1, 2, -2, 3])); // true
// ---------- Test Case 9 ----------
console.log(zeroSumSubArrays([2, -2])); // true
// ---------- Test Case 10 ----------
console.log(zeroSumSubArrays([-1, 2, 3, 4, -5, -3, 1, 2])); // true
// ---------- Test Case 11 ----------
console.log(zeroSumSubArrays([-2, -3, -1, 2, 3, 4, -5, -3, 1, 2])); // true

// ---------- Test Case 12 ----------
console.log(zeroSumSubArrays([2, 3, 4, -5, -3, 4, 5])); // true
// ---------- Test Case 13 ----------
console.log(zeroSumSubArrays([2, 3, 4, -5, -3, 5, 5])); // false
// ---------- Test Case 14 ----------
console.log(zeroSumSubArrays([1, 2, 3, 4, 0, 5, 6, 7])); // true
// ---------- Test Case 15 ----------
console.log(zeroSumSubArrays([1, 2, 3, -2, -1])); // true
// ---------- Test Case 16 ----------
console.log(
  zeroSumSubArrays([-8, -22, 104, 73, -120, 53, 22, -12, 1, 14, -90, 13, -22])
); // false
// ---------- Test Case 17 ----------
console.log(
  zeroSumSubArrays([
    -8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22,
  ])
); // true
