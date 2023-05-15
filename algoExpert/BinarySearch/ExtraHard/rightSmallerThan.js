/*
Write a function that takes in an array of integers and returns an array of the same length, where each element in the output array corresponds to the number of integers in the input array that are to the right of the relevant index and that are strictly smaller than the integer at that index.
In other words, the value at output [i] represents the number of integers that are to the right of i and that are strictly smaller than input[i].
*/

class SpecialBst {
  constructor(value, idx, numSmallerAtInsertTime) {
    this.value = value;
    this.idx = idx;
    this.numSmallerAtInsertTime = numSmallerAtInsertTime;
    this.leftSubtreeSize = 0;
    this.left = null;
    this.right = null;
  }

  insert(value, idx, numSmallerAtInsertTime) {
    if (value < this.value) {
      this.leftSubtreeSize += 1;
      if (this.left === null) {
        this.left = new SpecialBst(value, idx, numSmallerAtInsertTime);
      } else {
        this.left.insert(value, idx, numSmallerAtInsertTime);
      }
    } else {
      numSmallerAtInsertTime += this.leftSubtreeSize;
      if (value > this.value) {
        numSmallerAtInsertTime += 1;
      }
      if (this.right === null) {
        this.right = new SpecialBst(value, idx, numSmallerAtInsertTime);
      } else {
        this.right.insert(value, idx, numSmallerAtInsertTime);
      }
    }
  }
}

function rightSmallerThan(array) {
  // Write your code here.
  if (array.length === 0) return [];

  const lastIdx = array.length - 1;
  const bst = new SpecialBst(array[lastIdx], lastIdx, 0);

  for (let i = lastIdx - 1; i > -1; i--) {
    bst.insert(array[i], i, 0);
  }
  let rightSmallerCounts = array.slice();
  getRightSmallerCounts(bst, rightSmallerCounts);
  return rightSmallerCounts;
}

function getRightSmallerCounts(bst, rightSmallerCounts) {
  if (bst === null) return;

  rightSmallerCounts[bst.idx] = bst.numSmallerAtInsertTime;
  getRightSmallerCounts(bst.left, rightSmallerCounts);
  getRightSmallerCounts(bst.right, rightSmallerCounts);
}

// Unoptimal Solution
function rightSmallerThanN2Time(array) {
  // Write your code here.
  let smallerThan = [];
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        count++;
      }
    }
    smallerThan.push(count);
  }
  return smallerThan;
}
