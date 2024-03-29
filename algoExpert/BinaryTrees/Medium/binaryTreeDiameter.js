/*
Write a function that takes in a Binary Tree and returns its diameter. 
The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree.
A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. 
The length of a path is the number of edges between the path's first node and its last node.
Each BinaryTree node has an integer value, a left child node, and a right child node. 
Children nodes can either be BinaryTree nodes themselves or None / null
*/

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  return _getTreeInfo(tree).diameter;
}

function _getTreeInfo(tree) {
  if (tree === null) {
    return new TreeInfo(0, 0);
  }
  const leftTreeInfo = _getTreeInfo(tree.left);
  const rightTreeInfo = _getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}
