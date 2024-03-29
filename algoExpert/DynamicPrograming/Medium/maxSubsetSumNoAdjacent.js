/*
Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.
If the input array is empty, the function should return 0.
*/

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  let maxSums = [array[0], Math.max(array[0], array[1])];
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }
  return maxSums[maxSums.length - 1];
}

// optimal
function maxSubsetSumNoAdjacentOptimal(array) {
  // Write your code here.
  if (!array.length) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}
