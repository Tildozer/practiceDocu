/*
Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1], k = 1
Output: 1

Example 2:

Input: nums = [1,2], k = 4
Output: -1

Example 3:

Input: nums = [2,-1,2], k = 3
Output: 3

*/

var shortestSubarray = function (nums, k) {
  let smallest = Infinity;
  const sumArr = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    sumArr[i + 1] = sumArr[i] + nums[i];
  }

  const deQue = [];
  for (let i = 0; i < sumArr.length; i++) {
    while (deQue.length && sumArr[i] - sumArr[deQue[0]] >= k)
      smallest = Math.min(smallest, i - deQue.shift());

    while (deQue.length && sumArr[i] <= sumArr[deQue[deQue.length - 1]])
      deQue.pop();

    deQue.push(i);
  }
  return smallest === Infinity ? -1 : smallest;
};

const test = () => {
  const nums = [[1], [1, 2], [2, -1, 2]];
  const k = [1, 4, 3];
  const expected = [1, -1, 3];
  nums.forEach((num, index) => {
    console.log(shortestSubarray(num, k[index]) === expected[index]);
  });
};
