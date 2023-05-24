/*
Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
You can assume that there will only be one closest value.
Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node if and only if it satisfies the BST property:
its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right;
and its children nodes are either valid BST nodes themselves or None / null
*/
// Proper solution
function findClosestValueInBst(tree, target) {
  // Write your code here.
  const startNumber = Math.pow(10, 1000);
  console.log(startNumber);
  return findClosestValue(tree, target, startNumber);
}
const findClosestValue = (tree, target, closest) => {
  if (!tree) {
    return closest;
  }
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValue(tree.left, target, closest);
  } else {
    return findClosestValue(tree.right, target, closest);
  }
};

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// First Attempt
function findClosestValueInBstFirstTry(tree, target) {
    // Write your code here.
    let closest;
    let end;
    let treeSearch = tree;
    while (!end) {
    let left = treeSearch.left;
    let curr = treeSearch.value;
    let right = treeSearch.right;
      if(closest === undefined){
        closest = curr
      }
     if (left !== null && right !== null) {
       const absCurr = Math.abs(curr - target)
       const absRight = Math.abs(right.value - target)
       const absLeft = Math.abs(left.value - target)
       if(Math.abs(closest - target) > absLeft){
         closest = left.value
       }
       if(Math.abs(closest - target) > absRight){
         closest = right.value
       }
       if(Math.abs(closest - target) > absCurr){
         closest = curr
       }
       if(absCurr > absLeft){
         treeSearch = treeSearch.left
       } else {
         treeSearch = treeSearch.right
       }
     } else if(left !== null) {
       const absCurr = Math.abs(curr - target)
       const absLeft = Math.abs(left.value - target)
       if(Math.abs(closest - target) > absCurr){
         closest = curr
       }
       if(Math.abs(closest - target) > absLeft){
         closest = left.value
       }
       treeSearch = treeSearch.left
     } else if(right !== null) {
       const absCurr = Math.abs(curr - target)
       const absRight = Math.abs(right.value - target)
       if(Math.abs(closest - target) > absCurr){
         closest = curr;
       }
       if(Math.abs(closest - target) > absRight){
         closest = right.value;
       }
       treeSearch = treeSearch.right;
     } else {
       end = true
     }
    }

    return closest;
  }

//   // This is the class of the input tree. Do not edit.
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
