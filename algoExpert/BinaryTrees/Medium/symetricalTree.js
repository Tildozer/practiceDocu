/*

*/
// MY SOLUTION
// WATCH OTHER SOLUTIONS
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function symmetricalTree(tree) {
  // Write your code here.
  const leftStack = [tree.left];
  const rightStack = [tree.right];
  while (leftStack.length) {
    const leftNode = leftStack.pop();
    const rightNode = rightStack.pop();
    if (leftNode === null && rightNode === null) {
      continue;
    } else if (!leftNode || !rightNode) {
      return false;
    } else {
      if (leftNode.value !== rightNode.value) {
        return false;
      }
      rightStack.push(leftNode.right);
      leftStack.push(rightNode.left);

      rightStack.push(leftNode.left);
      leftStack.push(rightNode.right);
    }
  }
  return true;
}
