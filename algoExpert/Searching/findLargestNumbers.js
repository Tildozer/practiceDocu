/*
Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.
The function should return duplicate integers if necessary; 
for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12]
*/
// WATCH SOLUTION
//MY ANSWER

function findThreeLargestNumbers(array) {
  // Write your code here.
  let largestNumbers = [array[0], array[1], array[2]].sort((a, b) => a - b);
  for (let i = 3; i < array.length; i++) {
    if (array[i] > largestNumbers[2]) {
      largestNumbers[0] = largestNumbers[1];
      largestNumbers[1] = largestNumbers[2];
      largestNumbers[2] = array[i];
    } else if (array[i] > largestNumbers[1]) {
      largestNumbers[0] = largestNumbers[1];
      largestNumbers[1] = array[i];
    } else if (array[i] > largestNumbers[0]) largestNumbers[0] = array[i];
  }
  console.log(array, largestNumbers);
  return largestNumbers;
}

// ---------- Test Case 1 ----------
console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
); // [ 18, 141, 541 ]
// ---------- Test Case 2 ----------
console.log(findThreeLargestNumbers([55, 7, 8])); //  [ 7, 8, 55 ]
// ---------- Test Case 3 ----------
console.log(findThreeLargestNumbers([55, 43, 11, 3, -3, 10])); // [ 11, 43, 55 ]
// ---------- Test Case 4 ----------
console.log(findThreeLargestNumbers([7, 8, 3, 11, 43, 55])); // [ 11, 43, 55 ]
// ---------- Test Case 5 ----------
console.log(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])); // [ 11, 43, 55 ]
// ---------- Test Case 6 ----------
console.log(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7])); // [ 7, 7, 7 ]
// ---------- Test Case 7 ----------
console.log(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])); //  [ 7, 7, 8 ]
// ---------- Test Case 8 ----------
console.log(
  findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])
); // [ -2, -1, 7 ]
