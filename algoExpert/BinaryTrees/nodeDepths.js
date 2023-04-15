/*
The distance between a node in a binary tree and the tree's root is calles the node's depth.
Write a function the takes in a Binary Tree and returnds the sum of its nodes' depths.
Each `BinaryTree` node has an integer `value`, a `left` child node and a `right` child node. Children nodes can either be `BinaryTree` nodes themselves of `none`/`null`.
*/

// WATCH CORRECT ANSWER

// MY SOLUTION

function nodeDepths(root) {
  // Write your code here.
  return depthSearch(root, 0, []);
}

function depthSearch(currentNode, depth, totalDepthArr) {
  if (currentNode.left === null && currentNode.right === null) {
    totalDepthArr.push(depth);
    return totalDepthArr[0];
  }
  if (currentNode.left !== null && currentNode.right !== null) {
    totalDepthArr.push(depth);
    depthSearch(currentNode.left, depth + 1, totalDepthArr);
    depthSearch(currentNode.right, depth + 1, totalDepthArr);
  } else {
    if (currentNode.left !== null) {
      totalDepthArr.push(depth);
      depthSearch(currentNode.left, depth + 1, totalDepthArr);
    }
    if (currentNode.right !== null) {
      totalDepthArr.push(depth);
      depthSearch(currentNode.right, depth + 1, totalDepthArr);
    }
  }
  const total = totalDepthArr.reduce((acc, currentValue) => acc + currentValue);
  return total;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
