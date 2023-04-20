/*
Write a function that takes in a Binary Search Tree (BST) and a positive integer k and returns the kth largest integer contained in the BST.
You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree.
Also, for the purpose of this question, duplicate integers will be treated as distinct values. 
In other words, the second largest value in a BST containing values (5, 7, 7} will be 7 - not 5
Each BST node has an integer value, a left child node, and a right child node. 
A node is said to be a valid BST node if and only if it satisfies the BST property: 
    its value is strictly greater than the values of every node to its left; 
    its value is less than or equal to the values of every node to its right; 
    and its children nodes are either valid BST nodes themselves or None / null
*/

// MY SOLUTION
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const list = inOrderTraverse(tree, []);
  return list[list.length - k];
}

function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}
