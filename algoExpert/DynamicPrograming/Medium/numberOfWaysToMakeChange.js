/*
Given an array of distinct positive integers representing coin denominations and a single nonnegative integer n representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations.
Note that an unlimited amount of coins is at your disposal.
*/

function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  const ways = [];
  for (let i = 0; i < n + 1; i++) {
    ways.push(0);
  }
  ways[0] = 1;
  for (let i = 0; i < denoms.length; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      if (denoms[i] <= j) ways[j] += ways[j - denoms[i]];
    }
  }
  return ways[n];
}

//   ---------- Test Case 1 ----------
console.log(6, [1, 5]); //   2
//   ---------- Test Case 2 ----------
console.log(0, [2, 3, 4, 7]); //   1
//   ---------- Test Case 3 ----------
console.log(9, [5]); //   0
//   ---------- Test Case 4 ----------
console.log(7, [2, 4]); //   0
//   ---------- Test Case 5 ----------
console.log(4, [1, 5, 10, 25]); //   1
//   ---------- Test Case 6 ----------
console.log(5, [1, 5, 10, 25]); //   2
//   ---------- Test Case 7 ----------
console.log(10, [1, 5, 10, 25]); //   4
//   ---------- Test Case 8 ----------
console.log(25, [1, 5, 10, 25]); //   13
//   ---------- Test Case 9 ----------
console.log(12, [2, 3, 7]); //   4
//   ---------- Test Case 10 ----------
console.log(7, [2, 3, 4, 7]); //   3
