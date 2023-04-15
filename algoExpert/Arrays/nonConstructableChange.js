/*
Given an array of positive integers representing a value of coins in your possesion, 
write a function that return the minimum amount of change(the minumum sum of money)
 that you CANNOT create. The given coins can have a positive integer value and aren't necessarily unique
 
 for example if you're given `const coins = [1, 2, 5] the minimum amount you cannot create is 4.
 if you are given no coin the minimum amount is one
*/

function nonConstructibleChange(coins) {
  // Write your code here.
  const sortedCoins = coins.sort((a, b) => a - b);
  let change = 0;
  for (let i = 0; i < sortedCoins.length; i++) {
    if (sortedCoins[i] <= change + 1) {
      change += sortedCoins[i];
    }
  }
  return change + 1;
}

// ---------- Test Case 1 ----------
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); //20
// ---------- Test Case 2 ----------
console.log(nonConstructibleChange([1, 1, 1, 1, 1])); //6
// ---------- Test Case 3 ----------
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); //55
// ---------- Test Case 4 ----------
console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9])); //3
// ---------- Test Case 5 ----------
console.log(nonConstructibleChange([])); //1
// ---------- Test Case 6 ----------
console.log(nonConstructibleChange([87])); //1
// ---------- Test Case 7 ----------
console.log(nonConstructibleChange([5, 6, 1, 1, 2, 3, 4, 9])); //32
// ---------- Test Case 8 ----------
console.log(nonConstructibleChange([5, 6, 1, 1, 2, 3, 43])); //19
// ---------- Test Case 9 ----------
console.log(nonConstructibleChange([1, 1])); //3
// ---------- Test Case 10 ----------
console.log(nonConstructibleChange([2])); //1
// ---------- Test Case 11 ----------
console.log(nonConstructibleChange([1])); //2
// ---------- Test Case 12 ----------
console.log(
  nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4])
); //87
// ---------- Test Case 13 ----------
console.log(nonConstructibleChange([1, 2, 3, 4, 5, 6, 7])); //29
