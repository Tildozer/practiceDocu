/*
You are given an array nums of non-negative integers and an integer k.

An array is called special if the bitwise OR of all of its elements is at least k.

Return the length of the shortest special non-empty
subarray
of nums, or return -1 if no special subarray exists.

 

Example 1:

Input: nums = [1,2,3], k = 2

Output: 1

Explanation:

The subarray [3] has OR value of 3. Hence, we return 1.

Example 2:

Input: nums = [2,1,8], k = 10

Output: 3

Explanation:

The subarray [2,1,8] has OR value of 11. Hence, we return 3.

Example 3:

Input: nums = [1,2], k = 0

Output: 1

Explanation:

The subarray [1] has OR value of 1. Hence, we return 1.

*/
const MAX_BITS = 30; // 1 + Math.floor(log2(1e9));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minimumSubarrayLength(nums, k) {
  const freqs = new Array(MAX_BITS).fill(0);

  let left = -1;
  let minLen = nums.length + 1;
  for (let right = 0; right < nums.length; ++right) {
    updateFreqs(freqs, nums[right], 1);
    while (left < right && freqsToNum(freqs) >= k) {
      minLen = Math.min(minLen, right - left);
      updateFreqs(freqs, nums[++left], -1);
    }
  }

  return minLen <= nums.length ? minLen : -1;
}

function freqsToNum(freqs) {
  let num = 0;
  for (let bit = 0; bit < MAX_BITS; ++bit) {
    num |= +(freqs[bit] > 0) << bit;
  }
  return num;
}

function updateFreqs(freqs, num, value) {
  for (let bit = 0; num > 0; ++bit) {
    freqs[bit] += -(num & 1) & value;
    num >>= 1;
  }
}

const nums = [
  [1, 2, 3],
  [2, 1, 8],
  [1, 2],
];

const k = [2, 10, 0];

const test = () => {
  for (let i = 0; i < nums.length; i++) {
    console.log(minimumSubarrayLength(nums[i], k[i]));
  }
};
