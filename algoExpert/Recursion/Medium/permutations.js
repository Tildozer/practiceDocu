/*
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.
If the input array is empty, the function should return an empty array.
*/

// Makes more sense to do, just hard to get to it.
function getPermutations(array) {
  // Write your code here.
  const permutations = [];
  _getPermutations(0, array, permutations);

  return permutations;
}

function _getPermutations(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      _swap(array, i, j);
      _getPermutations(i + 1, array, permutations);
      _swap(array, i, j);
    }
  }
}

function _swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// Time = O(N²N!)
// Space = O(N * N!)
// Where N === length of the array
function getPermutationsUnOptimalSpace(array) {
  // Write your code here.
  let permutations = [];
  for (let i = 0; i < array.length; i++) {
    let copyArray = array.slice();
    let currNum = copyArray.splice(i, 1);
    _makePermutations(currNum, copyArray, permutations);
  }
  return permutations;
}

function _makePermutations(permutation, array, permutations) {
  if (!array.length) {
    permutations.push(permutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice(0, i).concat(array.slice(i + 1));
      let currNum = array[i];
      let newPermutation = permutation.slice();
      newPermutation.push(currNum);
      _makePermutations(newPermutation, newArray, permutations);
    }
  }
}

// ---------- Test Case 1 ----------
console.log(getPermutations([1, 2, 3]));
// [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ]
// ]
// ---------- Test Case 2 ----------
console.log(getPermutations([])); // []
// ---------- Test Case 3 ----------
console.log(getPermutations([1])); // [ [ 1 ] ]
// ---------- Test Case 4 ----------
console.log(getPermutations([1, 2])); // [ [ 1, 2 ], [ 2, 1 ] ]
// ---------- Test Case 5 ----------
console.log(getPermutations([1, 2, 3, 4]));
// [
//   [ 1, 2, 3, 4 ], [ 1, 2, 4, 3 ],
//   [ 1, 3, 2, 4 ], [ 1, 3, 4, 2 ],
//   [ 1, 4, 2, 3 ], [ 1, 4, 3, 2 ],
//   [ 2, 1, 3, 4 ], [ 2, 1, 4, 3 ],
//   [ 2, 3, 1, 4 ], [ 2, 3, 4, 1 ],
//   [ 2, 4, 1, 3 ], [ 2, 4, 3, 1 ],
//   [ 3, 1, 2, 4 ], [ 3, 1, 4, 2 ],
//   [ 3, 2, 1, 4 ], [ 3, 2, 4, 1 ],
//   [ 3, 4, 1, 2 ], [ 3, 4, 2, 1 ],
//   [ 4, 1, 2, 3 ], [ 4, 1, 3, 2 ],
//   [ 4, 2, 1, 3 ], [ 4, 2, 3, 1 ],
//   [ 4, 3, 1, 2 ], [ 4, 3, 2, 1 ]
// ]

// ---------- Test Case 6 ----------
console.log(getPermutations([1, 2, 3, 4, 5]));
// [
//   [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 5, 4 ], [ 1, 2, 4, 3, 5 ], [ 1, 2, 4, 5, 3 ],
//   [ 1, 2, 5, 3, 4 ], [ 1, 2, 5, 4, 3 ], [ 1, 3, 2, 4, 5 ], [ 1, 3, 2, 5, 4 ],
//   [ 1, 3, 4, 2, 5 ], [ 1, 3, 4, 5, 2 ], [ 1, 3, 5, 2, 4 ], [ 1, 3, 5, 4, 2 ],
//   [ 1, 4, 2, 3, 5 ], [ 1, 4, 2, 5, 3 ], [ 1, 4, 3, 2, 5 ], [ 1, 4, 3, 5, 2 ],
//   [ 1, 4, 5, 2, 3 ], [ 1, 4, 5, 3, 2 ], [ 1, 5, 2, 3, 4 ], [ 1, 5, 2, 4, 3 ],
//   [ 1, 5, 3, 2, 4 ], [ 1, 5, 3, 4, 2 ], [ 1, 5, 4, 2, 3 ], [ 1, 5, 4, 3, 2 ],
//   [ 2, 1, 3, 4, 5 ], [ 2, 1, 3, 5, 4 ], [ 2, 1, 4, 3, 5 ], [ 2, 1, 4, 5, 3 ],
//   [ 2, 1, 5, 3, 4 ], [ 2, 1, 5, 4, 3 ], [ 2, 3, 1, 4, 5 ], [ 2, 3, 1, 5, 4 ],
//   [ 2, 3, 4, 1, 5 ], [ 2, 3, 4, 5, 1 ], [ 2, 3, 5, 1, 4 ], [ 2, 3, 5, 4, 1 ],
//   [ 2, 4, 1, 3, 5 ], [ 2, 4, 1, 5, 3 ], [ 2, 4, 3, 1, 5 ], [ 2, 4, 3, 5, 1 ],
//   [ 2, 4, 5, 1, 3 ], [ 2, 4, 5, 3, 1 ], [ 2, 5, 1, 3, 4 ], [ 2, 5, 1, 4, 3 ],
//   [ 2, 5, 3, 1, 4 ], [ 2, 5, 3, 4, 1 ], [ 2, 5, 4, 1, 3 ], [ 2, 5, 4, 3, 1 ],
//   [ 3, 1, 2, 4, 5 ], [ 3, 1, 2, 5, 4 ], [ 3, 1, 4, 2, 5 ], [ 3, 1, 4, 5, 2 ],
//   [ 3, 1, 5, 2, 4 ], [ 3, 1, 5, 4, 2 ], [ 3, 2, 1, 4, 5 ], [ 3, 2, 1, 5, 4 ],
//   [ 3, 2, 4, 1, 5 ], [ 3, 2, 4, 5, 1 ], [ 3, 2, 5, 1, 4 ], [ 3, 2, 5, 4, 1 ],
//   [ 3, 4, 1, 2, 5 ], [ 3, 4, 1, 5, 2 ], [ 3, 4, 2, 1, 5 ], [ 3, 4, 2, 5, 1 ],
//   [ 3, 4, 5, 1, 2 ], [ 3, 4, 5, 2, 1 ], [ 3, 5, 1, 2, 4 ], [ 3, 5, 1, 4, 2 ],
//   [ 3, 5, 2, 1, 4 ], [ 3, 5, 2, 4, 1 ], [ 3, 5, 4, 1, 2 ], [ 3, 5, 4, 2, 1 ],
//   [ 4, 1, 2, 3, 5 ], [ 4, 1, 2, 5, 3 ], [ 4, 1, 3, 2, 5 ], [ 4, 1, 3, 5, 2 ],
//   [ 4, 1, 5, 2, 3 ], [ 4, 1, 5, 3, 2 ], [ 4, 2, 1, 3, 5 ], [ 4, 2, 1, 5, 3 ],
//   [ 4, 2, 3, 1, 5 ], [ 4, 2, 3, 5, 1 ], [ 4, 2, 5, 1, 3 ], [ 4, 2, 5, 3, 1 ],
//   [ 4, 3, 1, 2, 5 ], [ 4, 3, 1, 5, 2 ], [ 4, 3, 2, 1, 5 ], [ 4, 3, 2, 5, 1 ],
//   [ 4, 3, 5, 1, 2 ], [ 4, 3, 5, 2, 1 ], [ 4, 5, 1, 2, 3 ], [ 4, 5, 1, 3, 2 ],
//   [ 4, 5, 2, 1, 3 ], [ 4, 5, 2, 3, 1 ], [ 4, 5, 3, 1, 2 ], [ 4, 5, 3, 2, 1 ],
//   [ 5, 1, 2, 3, 4 ], [ 5, 1, 2, 4, 3 ], [ 5, 1, 3, 2, 4 ], [ 5, 1, 3, 4, 2 ],
//   // ... 20 more items
// ]
