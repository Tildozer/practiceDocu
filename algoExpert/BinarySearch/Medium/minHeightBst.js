/*
Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root of the BST.
The function should minimize the height of the BST.
You've been provided with a BST class that you'll have to use to construct the BST.
Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node if and only if it satisfies the BST property:
  its value is strictly greater than the values of every node to its left;
  its value is less than or equal to the values of every node to its right, and its children nodes are either valid BST nodes themselves or None / null
A BST is valid if and only if all of its nodes are valid BST nodes.
Note that the BST class already has an insert method which you can use if you want.
*/

// function minHeightBst(array) {
//   // Write your code here.
//   return _makeBst(array, null, 0, array.length - 1);
// }

// function _makeBst(array, bst, startIdx, endIdx) {
//   if (endIdx < startIdx) {
//     return;
//   }
//   const midIdx = Math.floor((startIdx + endIdx) / 2);
//   const newBstNode = new BST(array[midIdx]);
//   if (bst === null) {
//     bst = newBstNode;
//   } else {
//     if (array[midIdx] < bst.value) {
//       bst.left = newBstNode;
//       bst = bst.left;
//     } else {
//       bst.right = newBstNode;
//       bst = bst.right;
//     }
//   }
//   _makeBst(array, bst, startIdx, midIdx - 1);
//   _makeBst(array, bst, midIdx + 1, endIdx);
//   return bst;
// }

function minHeightBst(array) {
  // Write your code here.
  return _makeBst(array, 0, array.length - 1);
}

function _makeBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) {
    return null;
  }
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);

  bst.left = _makeBst(array, startIdx, midIdx - 1);
  bst.right = _makeBst(array, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// slow to use built in function

// function minHeightBst(array) {
//   // Write your code here.
//   return _makeBst(array, null, 0, array.length - 1);
// }

// function _makeBst(array, bst, startIdx, endIdx) {
//   if (endIdx < startIdx) {
//     return;
//   }
//   const midIdx = Math.floor((startIdx + endIdx) / 2);
//   const valueToAdd = array[midIdx];
//   if (bst === null) {
//     bst = new BST(valueToAdd);
//   } else {
//     bst.insert(valueToAdd);
//   }

//   _makeBst(array, bst, startIdx, midIdx - 1);
//   _makeBst(array, bst, midIdx + 1, endIdx);
//   return bst;
// }
