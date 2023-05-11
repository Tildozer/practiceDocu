/*
Write a function that takes in a Binary Tree with at least one node and checks if that Binary Tree can be split into two Binary Trees of equal sum by removing a single edge. 
If this split is possible, return the new sum of each Binary Tree, otherwise return 0. 
Note that you do not need to return the edge that was removed.
The sum of a Binary Tree is the sum of all values in that Binary Tree.
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
  
  function splitBinaryTree(tree) {
    // Write your code here.
    const desiredSum = _sum(tree) /2
    let canBeSplit = trySubtrees(tree, desiredSum)[1]
    return canBeSplit ? desiredSum : 0;
  }
  
  function _sum(tree) {
    if(tree === null) return 0;
    
    return tree.value + _sum(tree.left) + _sum(tree.right) 
  }
  
  function trySubtrees(tree, desiredSubTree) {
    if(tree === null) return [0, false];
  
    let [leftSum, leftCanBeSplit] = trySubtrees(tree.left, desiredSubTree);
    let [rightSum, rightCanBeSplit] = trySubtrees(tree.right, desiredSubTree);
  
    let currentTreeSum = tree.value + leftSum + rightSum;
  
    let canBeSplit = leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubTree;
    return [currentTreeSum, canBeSplit];
  }

