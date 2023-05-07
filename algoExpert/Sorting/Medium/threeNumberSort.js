/*
You're given an array of integers and another array of three distinct integers. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. 
For example, a second array of [x, y, z] represents a desired order of [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.
Write a function that sorts the first array according to the desired order in the second array.
The function should perform this in place (i.e., it should mutate the input array), and it shouldn't use any auxiliary space (i.e., it should run with constant space: 0(1) space).
Note that the desired order won't necessarily be ascending or descending and that the first array won't necessarily contain all three integers found in the second array- it might only contain one or two.
*/

function threeNumberSort(array, order) {
  // Write your code here.
  const newArray = [];
  for (let i = 0; i < order.length; i++) {
    const currOrder = order[i];
    for (let j = 0; j < array.length; j++) {
      if (currOrder === array[j]) newArray.push(currOrder);
    }
  }
  return newArray;
}

// ---------- Test Case 1 ----------
console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
// [
//   0, 0,  0,  1,
//   1, 1, -1, -1
// ]
// ---------- Test Case 2 ----------
console.log(threeNumberSort([7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9], [8, 7, 9]));
// [
//   8, 8, 7, 7, 9,
//   9, 9, 9, 9, 9,
//   9, 9
// ]
// ---------- Test Case 3 ----------
console.log(threeNumberSort([], [0, 7, 9])); // []
// ---------- Test Case 4 ----------
console.log(threeNumberSort([-2, -3, -3, -3, -3, -3, -2, -2, -3], [-2, -3, 0]));
// [
//   -2, -2, -2, -3, -3,
//   -3, -3, -3, -3
// ]
// ---------- Test Case 5 ----------
console.log(
  threeNumberSort([0, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25], [25, 10, 0])
);
// [
//   25, 25, 25, 25, 25,
//   10, 10, 10, 10, 10,
//    0
// ]
// ---------- Test Case 6 ----------
console.log(threeNumberSort([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], [4, 5, 6]));
// [
//   6, 6, 6, 6, 6,
//   6, 6, 6, 6, 6,
//   6, 6
// ]
// ---------- Test Case 7 ----------
console.log(
  threeNumberSort(
    [1, 3, 4, 4, 4, 4, 3, 3, 3, 4, 1, 1, 1, 4, 4, 1, 3, 1, 4, 4],
    [1, 4, 3]
  )
);
// [
//   1, 1, 1, 1, 1, 1, 4,
//   4, 4, 4, 4, 4, 4, 4,
//   4, 3, 3, 3, 3, 3
// ]
// ---------- Test Case 8 ----------
console.log(threeNumberSort([1, 2, 3], [3, 1, 2])); // [ 3, 1, 2 ]
// ---------- Test Case 9 ----------
console.log(
  threeNumberSort([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 1, 2], [1, 2, 0])
);
// [
//   1, 1, 1, 1, 1, 2,
//   2, 2, 2, 0, 0, 0,
//   0
// ]
// ---------- Test Case 10 ----------
console.log(threeNumberSort([7, 7, 7, 11, 11, 7, 11, 7], [11, 7, 9]));
// [
//   11, 11, 11, 7,
//    7,  7,  7, 7
// ]
// ---------- Test Case 11 ----------
console.log(threeNumberSort([9, 9, 9, 7, 9, 7, 9, 9, 7, 9], [11, 7, 9]));
// [
//   7, 7, 7, 9, 9,
//   9, 9, 9, 9, 9
// ]
// ---------- Test Case 12 ----------
console.log(threeNumberSort([9, 9, 9, 7, 9, 7, 9, 9, 7, 9], [7, 11, 9]));
// [
//   7, 7, 7, 9, 9,
//   9, 9, 9, 9, 9
// ]
// ---------- Test Case 13 ----------
console.log(threeNumberSort([1], [0, 1, 2])); // [ 1 ]
// ---------- Test Case 14 ----------
console.log(threeNumberSort([0, 1], [1, 2, 0])); // [ 1, 0 ]
