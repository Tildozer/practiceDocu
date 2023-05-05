/*
Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array.
A subarray must only contain adjacent numbers (numbers next to each other in the input array).
*/

function kadanesAlgorithm(array) {
  // Write your code here.
  let sum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const subArraySum = _findBestSubArray(array, i, i + 1, array[i]);
    if (subArraySum > sum) {
      sum = subArraySum;
    }
  }
  console.log(array);
  console.log(sum);
  return sum;
}

function _findBestSubArray(array, idx, endIdx, bestArraySum) {
  if (endIdx === array.length + 1) {
    return bestArraySum;
  }
  const subArray = array.slice(idx, endIdx);
  let newSum = 0;
  for (let i = 0; i < subArray.length; i++) {
    newSum += subArray[i];
  }
  if (newSum > bestArraySum) {
    return _findBestSubArray(array, idx, endIdx + 1, newSum);
  } else {
    return _findBestSubArray(array, idx, endIdx + 1, bestArraySum);
  }
}

// ---------- Test Case 1 ----------
console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
); // 19
// ---------- Test Case 2 ----------
console.log(kadanesAlgorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
// ---------- Test Case 3 ----------
console.log(kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])); // -1
// ---------- Test Case 4 ----------
console.log(kadanesAlgorithm([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])); // -1

// ---------- Test Case 5 ----------
console.log(kadanesAlgorithm([1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10])); // 35
// ---------- Test Case 6 ----------
console.log(kadanesAlgorithm([1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10])); // 34
// ---------- Test Case 7 ----------
console.log(kadanesAlgorithm([1, 2, -4, 3, 5, -9, 8, 1, 2])); // 11
// ---------- Test Case 8 ----------
console.log(kadanesAlgorithm([3, 4, -6, 7, 8])); // 16
// ---------- Test Case 9 ----------
console.log(kadanesAlgorithm([3, 4, -6, 7, 8, -18, 100])); // 100
// ---------- Test Case 10 ----------
console.log(kadanesAlgorithm([3, 4, -6, 7, 8, -15, 100])); // 101
// ---------- Test Case 11 ----------
console.log(
  kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
); // 23
// ---------- Test Case 12 ----------
console.log(
  kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 6])
); // 24
// ---------- Test Case 13 ----------
console.log(
  kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6])
); // 22
// ---------- Test Case 14 ----------
console.log(
  kadanesAlgorithm([
    8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4,
  ])
); // 35
// ---------- Test Case 15 ----------
console.log(
  kadanesAlgorithm([
    100, 8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1,
    -3, 4,
  ])
); // 135
// ---------- Test Case 16 ----------
console.log(kadanesAlgorithm([-1000, -1000, 2, 4, -5, -6, -7, -8, -2, -100])); // 6
// ---------- Test Case 17 ----------
console.log(kadanesAlgorithm([-2, -1])); // -1
// ---------- Test Case 18 ----------
console.log(kadanesAlgorithm([-2, 1])); // 1
// ---------- Test Case 19 ----------
console.log(kadanesAlgorithm([-10])); // -10
