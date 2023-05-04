/*
Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.
Note that you have access to an unlimited amount of coins. 
In other words, if the denominations are [1, 5, 10], you have access to an unlimited amount of 1 s, 5 s, and 10 s.
If it's impossible to make change for the target amount, return -1
*/


// MY SOLUTION
function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  let minAmount = [0];
  for (let i = 0; i < denoms.length; i++) {
    if (denoms[i] === n) return 1;
    for (let j = 1; j < n + 1; j++) {
      if (!minAmount[j]) {
        minAmount[j] = Infinity;
      }
      if (denoms[i] <= j) {
        const diff = j - denoms[i];
        minAmount[j] = Math.min(minAmount[j], 1 + minAmount[diff]);
      }
    }
  }
  return minAmount[n] !== Infinity ? minAmount[n] : -1;
}
