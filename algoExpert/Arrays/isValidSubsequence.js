/*
Given two non-empty arrays of integers, write a functin that determines whether the second array is a subsequence of the first one.
a subsequence of an array is a set of numbers that aren't nexassarily adjacent in the array but that are in the same order as they appear in the array.
for instance, the numbers `[1, 3, 4]` form a subsequnce of the array `[1, 2, 3, 4]`, and so do the numbers `[2, 4]`.
note that a single number in an array and the array itself are both valid subsequnces of the array.
*/

// GO BACK AND WATCH VIDEO SOLUTION
// MY SOLUTION
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let increment = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] === sequence[increment]){
        increment++
      }
      if(increment === sequence.length){
        return true;
      }
    }
    return increment === sequence.length
  }
  


// ---------- Test Case 1 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10],
  [1, 6, -1, 10]
));// true
// ---------- Test Case 2 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10],
  [5,  1, 22, 25, 6, -1,  8, 10]
));// true
// ---------- Test Case 3 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [5, 1, 22, 6, -1, 8, 10]
));// true
// ---------- Test Case 4 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [22, 25, 6]
));// true
// ---------- Test Case 5 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [1, 6, 10]
));// true
// ---------- Test Case 6 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [5, 1, 22, 10]
));// true
// ---------- Test Case 7 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [5, -1, 8, 10]
));// true
// ---------- Test Case 8 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [25]
));// true

// ---------- Test Case 9 ----------
console.log(isValidSubsequence(
  [ 1, 1, 1, 1, 1 ], 
  [ 1, 1, 1 ]
));// true
// ---------- Test Case 10 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [5, 1, 22, 25, 6, -1, 8, 10, 12]
));// false
// ---------- Test Case 11 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [4,  5, 1, 22, 25, 6, -1, 8, 10]
));// false
// ---------- Test Case 12 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25,6, -1,  8, 10], 
  [5,  1, 22, 23, 6, -1,  8, 10]
));// false
// ---------- Test Case 13 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [5,  1, 22, 22, 25, 6, -1,  8, 10]
));// false
// ---------- Test Case 14 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10],
  [5,  1, 22, 22, 6, -1,  8, 10]
));// false
// ---------- Test Case 15 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [1, 6, -1, -1]
));// false
// ---------- Test Case 16 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [1, 6, -1, -1, 10]
));// false
// ---------- Test Case 17 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [1, 6, -1, -2]
));// false
// ---------- Test Case 18 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [26]
));// false
// ---------- Test Case 19 ----------
console.log(isValidSubsequence(
    [5,  1, 22, 25, 6, -1,  8, 10], 
    [5,  1, 25, 22, 6, -1,  8, 10]
));// false
// ---------- Test Case 20 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10],
  [5, 26, 22, 8]
));// false
// ---------- Test Case 21 ----------
console.log(isValidSubsequence(
  [1, 1, 6, 1],
  [1, 1, 1, 6]
));// false
// ---------- Test Case 22 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10],
  [1,  6, -1, 10, 11, 11, 11, 11]
));// false
// ---------- Test Case 23 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10],
  [5, 1, 22, 25, 6, -1, 8, 10, 10]
));// false
// ---------- Test Case 24 ----------
console.log(isValidSubsequence(
  [5,  1, 22, 25, 6, -1,  8, 10], 
  [1, 6, -1, 5]
));// false