/*
  Write a function that takes a binary tree and returns a list of its branch sums ordered from leftmost branch sum.
  A branch sum is the sum of all caluse in a binary tree branch. 
  A Binary Tree Branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
  Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right` child node.
  Children nodes can either be a BinaryTree nodes themselves or `None`/`null`.
*/
/*
WATCH CORRECT ANSWER
  tree =      1
            /   \
         2        3
       /   \    /   \
     4      5  6     7
   /   \  /
  8    9 10
*/
// SAMPLE OUTPUT
// [15, 16, 18, 10, 11]
/*
15 === 1 + 2 + 4 + 8
16 === 1 + 2 + 4 + 9
18 === 1 + 2 + 5 + 10
10 === 1 + 3 + 6
11 === 1 + 3 + 7
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    return branchSearch(root, root.value, [])
  }
  
  function branchSearch(currentBranch, currSum, sumArray){
    if(currentBranch.left === null && currentBranch.right === null){
      sumArray.push(currSum)
      return sumArray
    } 
    if(currentBranch.left !== null && currentBranch.right !== null){
      console.log(sumArray)
      branchSearch(currentBranch.left, currSum + currentBranch.left.value, sumArray)
      branchSearch(currentBranch.right, currSum + currentBranch.right.value, sumArray)
    }
    if(currentBranch.left === null){
      branchSearch(currentBranch.right, currSum + currentBranch.right.value, sumArray);
    } 
    if(currentBranch.right === null){
      branchSearch(currentBranch.left, currSum + currentBranch.left.value, sumArray)
    }
    return sumArray
  }