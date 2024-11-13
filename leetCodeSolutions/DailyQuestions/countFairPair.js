/*
Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

A pair (i, j) is fair if:

    0 <= i < j < n, and
    lower <= nums[i] + nums[j] <= upper

 

Example 1:

Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
Output: 6
Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).

Example 2:

Input: nums = [1,7,9,2,5], lower = 11, upper = 11
Output: 1
Explanation: There is a single fair pair: (2,3).

*/

function countLessThan(nums, sum) {
    let res = 0;
    let j = nums.length - 1;
  
    for (let i = 0; i < j; ++i) {
      while (i < j && nums[i] + nums[j] > sum) {
          --j;
      }
        res += j - i;
    }
  
    return res;
  }
  var countFairPairs = function (nums, lower, upper) {
      nums.sort((a, b) => a - b);
      return countLessThan(nums, upper) - countLessThan(nums, lower - 1);
  };

    const test = () => { 
        const nums = [[0,1,7,4,4,5], [1,7,9,2,5]];
        const lower = [3, 11];
        const upper = [6, 11];

        for (let i = 0; i < nums.length; i++) {
            console.log(countFairPairs(nums[i], lower[i], upper[i]));
        }
    };