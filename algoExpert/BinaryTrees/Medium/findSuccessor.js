/*
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.
A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree-traversal technique. 
A node has no successor if it's the last node to be visited in the in-order traversal.
If a node has no successor, your function should return None / null.
Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or None / null
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
  if (node.right !== null) {
    return getLeftMostChild(node.right);
  }
  return getRightMostParent(node);
}

function getLeftMostChild(node) {
  let current = node;
  while (current.left !== null) {
    current = current.left;
  }
  return current;
}
function getRightMostParent(node) {
  let current = node;
  while (current.parent !== null && current.parent.right === current) {
    current = current.parent;
  }
  return current.parent;
}

// slow method
// only possible method if No parent in the BST

function findSuccessorSlow(tree, node) {
  // Write your code here.
  const inOrder = [];
  _getOrder(tree, inOrder);
  console.log(inOrder);
  for (let i = 0; i < inOrder.length; i++) {
    const currentNode = inOrder[i];
    if (i === inOrder.length - 1) {
      return null;
    }
    if (currentNode === node) {
      return inOrder[i + 1];
    }
  }
}

function _getOrder(node, order) {
  if (node === null) {
    return order;
  }
  _getOrder(node.left, order);
  order.push(node);
  console.log(order);
  _getOrder(node.right, order);
}
