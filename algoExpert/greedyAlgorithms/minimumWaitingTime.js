/*
You're given a non empty array of positive integers representing the amounts of time that specifict queries take to execute.
Only one query can be executed at a time, but the queries can be executed in any order.
A query's waiting time is defined as the amount of time that it must wait before it execution starts.
In other words, 
    if a query is executed second, then its waiting time is the durations of the first query;
    if a query is executed second, then its waiting time is the durations of the first query;
    if a query is excuted third, then its wiating time is the sum of the durations of the first two queries.

write a function that returns the minimum amount of total waiting time for all of the queries.
For example, if you're given the querise of durations `[1, 4, 5]`, then the total waiting time if the queries were executed in the order of `[5, 1, 4]` would be `(0) + (5) + (5 + 1) = 11`. 
The first query of duration `5` would be executed immediately, so its waiting time would be `0`, the second query of duration `1` would have to wait `5` seconds(the duration of the first query) to be executed, and the last query would have to wait the duration of the first two queries befor being executed.

note: You are allowed to mutate the input array.
*/
// MY SOLUTION

function minimumWaitingTime(queries) {
    // Write your code here.
    let waitTime = 0;
    let allAdded = 0
    const sorted = queries.sort((a, b) => a - b);
    for (let i = 1; i < queries.length; i++) {
      allAdded += sorted[i - 1];
      waitTime += allAdded;
    }
    console.log(waitTime, queries)
    return waitTime;
  }
  

// ---------- Test Case 1 ----------
console.log(minimumWaitingTime([ 1, 2, 2, 3, 6 ]));// 17

// ---------- Test Case 2 ----------
console.log(minimumWaitingTime([ 1, 1, 1, 2 ]));// 6

// ---------- Test Case 3 ----------
console.log(minimumWaitingTime([ 1, 1, 2, 2, 4, 5 ]));// 23

// ---------- Test Case 4 ----------
console.log(minimumWaitingTime([ 1, 2, 25, 30 ]));// 32

// ---------- Test Case 5 ----------
console.log(minimumWaitingTime([ 1, 1, 1, 1, 1 ]));// 10

// ---------- Test Case 6 ----------
console.log(minimumWaitingTime([ 2, 3, 7, 9 ]));// 19

// ---------- Test Case 7 ----------
console.log(minimumWaitingTime([1, 1, 1, 2, 3, 3, 4, 8]));// 45

// ---------- Test Case 8 ----------
console.log(minimumWaitingTime([ 2 ]));// 0

// ---------- Test Case 9 ----------
console.log(minimumWaitingTime([ 7 ]));// 0

// ---------- Test Case 10 ----------
console.log(minimumWaitingTime([ 8, 9 ]));// 8

// ---------- Test Case 11 ----------
console.log(minimumWaitingTime([ 1, 9 ]));// 1

// ---------- Test Case 12 ----------
console.log(minimumWaitingTime([ 1, 2, 3, 4, 5 ]));// 20

// ---------- Test Case 13 ----------
console.log(minimumWaitingTime([ 1, 2, 3, 4, 5 ]));// 20

// ---------- Test Case 14 ----------
console.log(minimumWaitingTime([1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 8]));// 81

// ---------- Test Case 15 ----------
console.log(minimumWaitingTime([ 3, 4, 17 ]));// 10
