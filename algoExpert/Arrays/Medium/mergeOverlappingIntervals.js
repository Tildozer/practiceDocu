/*
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.
Each interval interval is an array of two integers, with interval [0] as the start of the interval and interval [1] as the end of the interval.
Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping, however, [1, 6] and [6, 7] are indeed overlapping.
Also note that the start of any particular interval will always be less than or equal to the end of that interval.
*/

function mergeOverlappingIntervals(array) {
  // Write your code here.
  const sorted = array.sort((a, b) => a[0] - b[0]);
  const nonOverlappingArray = [sorted[0]];
  for (let i = 1; i < array.length; i++) {
    const current = sorted[i];
    const previous = nonOverlappingArray[nonOverlappingArray.length - 1];
    if (previous[1] < current[0]) {
      nonOverlappingArray.push(current);
    } else {
      if (previous[1] < current[1]) {
        previous[1] = current[1];
      }
    }
  }
  return nonOverlappingArray;
}

//   ---------- Test Case 1 ----------
console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 8],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
); // [ [ 1, 2 ], [ 3, 8 ], [ 9, 10 ] ]
// ---------- Test Case 2 ----------
console.log(
  mergeOverlappingIntervals([
    [1, 8],
    [2, 8],
    [9, 10],
  ])
); // [ [ 1, 8 ], [ 9, 10 ] ]
// ---------- Test Case 3 ----------
console.log(
  mergeOverlappingIntervals([
    ([1, 100],
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90],
    [90, 100]),
  ])
); // [[1, 100]];

// ---------- Test Case 4 ----------
console.log(
  mergeOverlappingIntervals([
    [1, 10],
    [11, 20],
    [21, 30],
    [31, 40],
    [41, 50],
    [51, 60],
    [61, 70],
    [71, 80],
    [81, 90],
    [91, 100],
  ])
);
// [
//   [1, 10],[11, 20], [21, 30], [31, 40], [41, 50], [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]
// ];

// ---------- Test Case 5 ----------
console.log(
  mergeOverlappingIntervals([
    [1, 105],
    [100, 105],
  ])
); // [ [ 1, 105 ] ]
// ---------- Test Case 6 ----------
console.log(
  mergeOverlappingIntervals([
    [-50, 20],
    [-10, 20],
    [70, 95],
    [89, 90],
    [90, 91],
    [90, 95],
  ])
); // [[-50, 20], [70, 95]];

// ---------- Test Case 7 ----------
console.log(
  mergeOverlappingIntervals([
    [-5, 0],
    [-4, -3],
    [-3, -2],
    [-2, -1],
    [-1, 0],
  ])
); // [ [ -5, 0 ] ]
// ---------- Test Case 8 ----------
console.log(
  mergeOverlappingIntervals([
    [9, 90],
    [12, 54],
    [43, 49],
    [45, 90],
    [91, 93],
  ])
); // [ [ 9, 90 ], [ 91, 93 ] ]
// ---------- Test Case 9 ----------
console.log(
  mergeOverlappingIntervals([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ])
); // [[0, 0]];

// ---------- Test Case 10 ----------
console.log(
  mergeOverlappingIntervals([
    [0, 1],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 1],
  ])
); // [[0, 1]];

// ---------- Test Case 11 ----------
console.log(
  mergeOverlappingIntervals([
    [-20, 30],
    [1, 22],
  ])
); // [ [ -20, 30 ] ]
// ---------- Test Case 12 ----------
console.log(
  mergeOverlappingIntervals([
    [0, 1],
    [3, 4],
    [5, 6],
    [7, 19],
    [20, 21],
    [22, 24],
    [23, 24],
    [25, 27],
  ])
); // [[0, 1], [3, 4], [5, 6], [7, 19], [20, 21], [22, 24], [25, 27]];

// ---------- Test Case 13 ----------
console.log(
  mergeOverlappingIntervals([
    [1, 10],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
  ])
); // [ [ 1, 10 ] ]
