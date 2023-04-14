/*
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers.
Write a function that takes in an integer `n` and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as `F0 = 0` and `F1 = 1`.
Fir the purpouse of this questions the first fibinoacci number is `F0`;
therefore, `getNthFif(1)` is equal to `F0`, `getNthFib(2)` is equal to `F1`, etc...
*/

// WATCH CORRECT ANSWER
// MY ANSWER
function getNthFib(n) {
    // Write your code here.
    const fibArray = [0];
    while (fibArray.length < n) {
      if(fibArray.length === 1){
        fibArray.push(1);
      }
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }
    return fibArray[fibArray.length - 1];
  }
  



// ---------- Test Case 1 ----------
console.log(getNthFib(6));// 5
// ---------- Test Case 2 ----------
console.log(getNthFib(1));// 0
// ---------- Test Case 3 ----------
console.log(getNthFib(2));// 1
// ---------- Test Case 4 ----------
console.log(getNthFib(3));// 1
// ---------- Test Case 5 ----------
console.log(getNthFib(4));// 2
// ---------- Test Case 6 ----------
console.log(getNthFib(5));// 3
// ---------- Test Case 7 ----------
console.log(getNthFib(7));// 8
// ---------- Test Case 8 ----------
console.log(getNthFib(8));// 13
// ---------- Test Case 9 ----------
console.log(getNthFib(9));// 21
// ---------- Test Case 10 ----------
console.log(getNthFib(10));// 34
// ---------- Test Case 11 ----------
console.log(getNthFib(11));// 55
// ---------- Test Case 12 ----------
console.log(getNthFib(12));// 89
// ---------- Test Case 13 ----------
console.log(getNthFib(13));// 144
// ---------- Test Case 14 ----------
console.log(getNthFib(14));// 233
// ---------- Test Case 15 ----------
console.log(getNthFib(15));// 377
// ---------- Test Case 16 ----------
console.log(getNthFib(16));// 610
// ---------- Test Case 17 ----------
console.log(getNthFib(17));// 987
// ---------- Test Case 18 ----------
console.log(getNthFib(18));// 1597