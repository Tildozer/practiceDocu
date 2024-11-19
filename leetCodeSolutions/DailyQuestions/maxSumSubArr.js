/*
Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.

*/

var maximumSubarraySum = function (nums, k) {
  let maxSum = 0,
    currSum = 0,
    left = 0;
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rightNum = nums[i];
    currSum += rightNum;
    numsMap.set(rightNum, (numsMap.get(rightNum) || 0) + 1);

    if (i - left + 1 === k) {
      if (numsMap.size === k) {
        maxSum = Math.max(currSum, maxSum);
      }

      const leftNum = nums[left];
      currSum -= leftNum;
      numsMap.set(leftNum, numsMap.get(leftNum) - 1);

      if (numsMap.get(leftNum) === 0) numsMap.delete(leftNum);

      left++;
    }
  }
  return maxSum;
};

const test = () => {
  const nums = [1, 5, 4, 2, 9, 9, 9],
    k = 3;
  console.log(maximumSubarraySum(nums, k)); // 15

  const nums2 = [4, 4, 4],
    k2 = 3;
  console.log(maximumSubarraySum(nums2, k2)); // 0
};
