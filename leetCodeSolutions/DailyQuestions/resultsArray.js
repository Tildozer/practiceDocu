/*
You are given an array of integers nums of length n and a positive integer k.

The power of an array is defined as:

    Its maximum element if all of its elements are consecutive and sorted in ascending order.
    -1 otherwise.

You need to find the power of all
subarrays
of nums of size k.

Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].

 

Example 1:

Input: nums = [1,2,3,4,3,2,5], k = 3

Output: [3,4,-1,-1,-1]

Explanation:

There are 5 subarrays of nums of size 3:

    [1, 2, 3] with the maximum element 3.
    [2, 3, 4] with the maximum element 4.
    [3, 4, 3] whose elements are not consecutive.
    [4, 3, 2] whose elements are not sorted.
    [3, 2, 5] whose elements are not consecutive.

Example 2:

Input: nums = [2,2,2,2,2], k = 4

Output: [-1,-1]

Example 3:

Input: nums = [3,2,3,2,3,2], k = 2

Output: [-1,3,-1,3,-1]

*/

var resultsArray = function (nums, k) {
  const results = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > n - k || results.length === n - k + 1) break;

    let isAscending = true;
    let j = i + 1;
    while (j < k + i && isAscending) {
      if (nums[j - 1] + 1 !== nums[j]) isAscending = false;
      j++;
    }
    results.push(isAscending ? nums[i + k - 1] : -1);
  }
  return results;
};

const test = () => {
  const nums = [
    [1, 2, 3, 4, 3, 2, 5],
    [2, 2, 2, 2, 2],
    [3, 2, 3, 2, 3, 2],
  ];
  const k = [3, 4, 2];

  for (let i = 0; i < nums.length; i++) {
    console.log(resultsArray(nums[i], k[i]));
  }
};
