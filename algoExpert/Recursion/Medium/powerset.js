/*
Write a function that takes in an array of unique integers and returns its powerset.
The powerset P(X) of a set X is the set of all subsets of X . 
For example, the powerset of [1,2] is [], [1], [2], [1,2].
Note that the sets in the powerset do not need to be in any particular order.
*/
function powerset(array) {
  // Write your code here.
  const set = [[]];
  for (let i = 0; i < array.length; i++) {
    _setMaker(set, i, array);
  }
  return set;
}

function _setMaker(set, idx, array) {
  const length = set.length;
  for (let i = 0; i < length; i++) {
    let currSet = set[i].slice();
    currSet[currSet.length] = array[idx];
    set.push(currSet);
  }
}

//   ---------- Test Case 1 ----------
console.log(powerset([1, 2, 3]));
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
// ---------- Test Case 2 ----------
console.log(powerset([]));
// [[]];
// ---------- Test Case 3 ----------
console.log(powerset([1]));
// [[], [1]];
// ---------- Test Case 4 ----------
console.log(powerset([1, 2]));
// [[], [1], [2], [1, 2]];
// ---------- Test Case 5 ----------
console.log(powerset([1, 2, 3, 4]));
// [
//   [], [1], [2], [1, 2], [3],
//   [1, 3], [2, 3], [1, 2, 3], [4], [1, 4],
//   [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4],
// ];
// ---------- Test Case 6 ----------
console.log(powerset([1, 2, 3, 4, 5]));
// [
//   [], [1], [2], [1, 2],[3], 
//   [1, 3], [2, 3], [1, 2, 3], [4], [1, 4],
//   [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4],
//   [1, 2, 3, 4], [5], [1, 5], [2, 5], [1, 2, 5],
//   [3, 5], [1, 3, 5], [2, 3, 5], [1, 2, 3, 5], [4, 5],
//   [1, 4, 5], [2, 4, 5], [1, 2, 4, 5], [3, 4, 5], [1, 3, 4, 5],
//   [2, 3, 4, 5], [1, 2, 3, 4, 5],
// ];
// ---------- Test Case 7 ----------
console.log(powerset([1, 2, 3, 4, 5, 6]));
// [
//   [], [1], [2], [1, 2], [3], [1, 3],
//   [2, 3], [1, 2, 3], [4], [1, 4], [2, 4],
//   [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4],
//   [1, 2, 3, 4], [5], [1, 5], [2, 5], [1, 2, 5],
//   [3, 5], [1, 3, 5], [2, 3, 5], [1, 2, 3, 5], [4, 5],
//   [1, 4, 5], [2, 4, 5], [1, 2, 4, 5], [3, 4, 5], [1, 3, 4, 5],
//   [2, 3, 4, 5], [1, 2, 3, 4, 5], [6], [1, 6], [2, 6],
//   [1, 2, 6], [3, 6], [1, 3, 6], [2, 3, 6], [1, 2, 3, 6],
//   [4, 6], [1, 4, 6], [2, 4, 6], [1, 2, 4, 6], [3, 4, 6], [1, 3, 4, 6], 
//   [2, 3, 4, 6], [1, 2, 3, 4, 6], [5, 6], [1, 5, 6], [2, 5, 6],
//   [1, 2, 5, 6], [3, 5, 6], [1, 3, 5, 6], [2, 3, 5, 6], [1, 2, 3, 5, 6],
//   [4, 5, 6], [1, 4, 5, 6], [2, 4, 5, 6], [1, 2, 4, 5, 6], [3, 4, 5, 6],
//   [1, 3, 4, 5, 6], [2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6],
// ];