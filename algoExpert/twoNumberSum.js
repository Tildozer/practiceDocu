/*
Write a function that takes in a non-empty array of distinct integers representing a target sum. 
If any two numbers in the input array sum up to the target sum, the fucntion should return the in an array, in any order.
If no two numbers sum up to the target sum, the function should return an empty array.
Note that the target sum has to be obtained by summing the two defferent integer in the array;
you can't add a single integer to itself in order to obtain the target sum.

You can assume that tere will be at most one pair of numbers summing up to the target sum.
*/

// GO BACK AND WATCH VIDEO SOLUTION

// MY SOLUTION
function twoNumberSum(array, targetSum) {
    // Write your code here.
    for(let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === targetSum){
          return [array[i], array[j]]
        }
      }
    }
    return []
  }

// ---------- Test Case 1 ----------
console.log(twoNumberSum(
  [3, 5, -4, 8, 11, 1, -1, 6],
  10
))// [11, -1]
// ---------- Test Case 2 ----------
console.log(twoNumberSum([4, 6], 10))// [4, 6]
// ---------- Test Case 3 ----------
console.log(twoNumberSum(
  [ 4, 6, 1 ],
  5
))// [4, 1]
// ---------- Test Case 4 ----------
console.log(twoNumberSum(
  [ 4, 6, 1, -3 ],
  3
))// [6, -3]
// ---------- Test Case 5 ----------
console.log(twoNumberSum(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  17
))// [8, 9]
// ---------- Test Case 6 ----------
console.log(twoNumberSum(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
  18
))// [3, 15]
// ---------- Test Case 7 ----------
console.log(twoNumberSum(
  [-7, -5, -3, -1, 0, 1, 3, 5, 7],
  -5
))// [-5, 0]
// ---------- Test Case 8 ----------
console.log(twoNumberSum(
  [-21, 301,  12, 4,  65, 56, 210, 356, 9, -47],
  163
))//[210, -47]
// ---------- Test Case 9 ----------
console.log(twoNumberSum(
  [-21, 301,  12, 4,  65,  56, 210, 356, 9, -47],
  164
))//[]
// ---------- Test Case 10 ----------
console.log(twoNumberSum(
  [3, 5, -4, 8,  11, 1, -1, 6], 
  15
))// []
// ---------- Test Case 11 ----------
console.log(twoNumberSum(
  [14],
  15
))// []
// ---------- Test Case 12 ----------
console.log(twoNumberSum(
  [15],
  15
))// []

