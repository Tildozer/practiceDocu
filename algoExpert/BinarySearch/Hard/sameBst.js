/*
An array of integers is said to represent the Binary Search Tree (BST) obtained by inserting each integer in the array, from left to right, into the BST.
Write a function that takes in two arrays of integers and determines whether these arrays represent the same BST. 
Note that you're not allowed to construct any BSTs in your code.
A BST is a Binary Tree that consists only of BST nodes. 
A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; 
its value is less than or equal to the values of every node to its right; 
and its children nodes are either valid BST nodes themselves or None / null.
*/

function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  if (!arrayOne.length && !arrayTwo.length) return true;
  if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0]) {
    return false;
  }
  const startingNode = arrayOne[0];
  let leftOne = [],
    leftTwo = [],
    rightOne = [],
    rightTwo = [];
  for (let i = 1; i < arrayOne.length; i++) {
    _leftOrRight(arrayOne[i], startingNode, leftOne, rightOne);
    _leftOrRight(arrayTwo[i], startingNode, leftTwo, rightTwo);
  }

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function _leftOrRight(item, topNode, left, right) {
  if (item < topNode) {
    left.push(item);
  } else {
    right.push(item);
  }
}
//   ---------- Test Case 1 ----------
console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
); // true
// ---------- Test Case 2 ----------
console.log(sameBsts([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])); // true

// ---------- Test Case 3 ----------
console.log(sameBsts([7, 6, 5, 4, 3, 2, 1], [7, 6, 5, 4, 3, 2, 1])); // true
// ---------- Test Case 4 ----------
console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2], [10, 8, 5, 15, 2, 12, 94, 81])
); // true
// ---------- Test Case 5 ----------
console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2], [11, 8, 5, 15, 2, 12, 94, 81])
); // false

// ---------- Test Case 6 ----------
console.log(
  sameBsts(
    [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34],
    [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
  )
); // true
// ---------- Test Case 7 ----------
console.log(
  sameBsts(
    [10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34],
    [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
  )
); // false
// ---------- Test Case 8 ----------
console.log(
  sameBsts(
    [5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34],
    [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8]
  )
); // false

// ---------- Test Case 9 ----------
console.log(
  sameBsts(
    [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34],
    [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100]
  )
); // false
// ---------- Test Case 10 ----------
console.log(sameBsts([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7])); // false
// ---------- Test Case 11 ----------
console.log(sameBsts([7, 6, 5, 4, 3, 2, 1], [7, 6, 5, 4, 3, 2, 1, 0])); // false

// ---------- Test Case 12 ----------
console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 10], [10, 8, 5, 15, 2, 10, 12, 94, 81])
); // false
// ---------- Test Case 13 ----------
console.log(
  sameBsts(
    [50, 76, 81, 23, 23, 23, 100, 56, 12, -1, 3],
    [50, 23, 76, 23, 23, 12, 56, 81, -1, 3, 100]
  )
); // true
