/*
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.
Each BST node has an integer value, a left child node, and a right child node. 
A node is said to be a valid BST node if and only if it satisfies the BST property: 
  its value is strictly greater than the values of every node to its left; 
  its value is less than or equal to the values of every node to its right; 
  and its children nodes are either valid BST nodes themselves or None / null
A BST is valid if and only if all of its nodes are valid BST nodes.
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return _validate(tree, -Infinity, Infinity);
}

function _validate(tree, min, max) {
  if (tree.left === null && tree.right === null) {
    return true;
  }
  if (tree.left && tree.right) {
    console.log(tree.left.value < tree.value && tree.left.value >= min);
    if (
      tree.left.value <= tree.value &&
      tree.left.value >= min &&
      tree.value <= tree.right.value &&
      tree.right.value < max
    ) {
      const left = _validate(tree.left, min, tree.value);
      const right = _validate(tree.right, tree.value, max);
      if (right && left) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log(tree.left.value, "left", tree.value, "value", min, "min");
      console.log(tree.right.value, "right", tree.value, max, "max");
      console.log("here");

      return false;
    }
  } else if (tree.left) {
    if (tree.left.value <= tree.value && tree.left.value >= min) {
      return _validate(tree.left, min, tree.value);
    } else {
      return false;
    }
  } else if (tree.right) {
    if (tree.value <= tree.right.value && tree.right.value < max) {
      return _validate(tree.right, tree.value, max);
    } else {
      return false;
    }
  }
}
