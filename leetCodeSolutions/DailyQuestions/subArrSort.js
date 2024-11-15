/*
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

Return the length of the shortest subarray to remove.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].

Example 2:

Input: arr = [5,4,3,2,1]
Output: 4
Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].

Example 3:

Input: arr = [1,2,3]
Output: 0
Explanation: The array is already non-decreasing. We do not need to remove any elements.
*/

var findLengthOfShortestSubarray = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === right) return 0;

  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let min = Math.min(arr.length - left - 1, right);
  let i = 0,
    j = right;
  while (i <= left && j < arr.length) {
    if (arr[i] <= arr[j]) {
      min = Math.min(min, j - i - 1);
      i++;
    } else {
      j++;
    }
  }
  return min;
};

const test = () => {
  const arrs = [
    [1, 2, 3, 10, 4, 2, 3, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3],
  ];
  arrs.forEach((arr) => {
    console.log(findLengthOfShortestSubarray(arr));
  });
};

test();
