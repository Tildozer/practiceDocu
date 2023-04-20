/*
Write a function that takes in a Binary Tree and inverts it. 
In other words, the function should swap every left node in the tree for its corresponding right node.
Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null
*/

function invertBinaryTree(tree) {
  // Write your code here.
  if (!tree.left && !tree.right) {
    return tree;
  }
  if (tree.left || tree.right) {
    const right = tree.right;
    tree.right = tree.left;
    tree.left = right;
    if (tree.left) {
      invertBinaryTree(tree.left);
    }
    if (tree.right) {
      invertBinaryTree(tree.right);
    }
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
