/*
Write a BST class for a Binary Search Tree. The class should support:
• Inserting values with the insert method.
• Removing values with the remove method; this method should only remove the first instance of a given value.
• Searching for values with the contains method.
Note that you can't remove values from a single-node tree. 
In other words, calling the remove method on a single-node tree should simply not do anything.
Each BST node has an integer value, a left child node, and a right child node. 
A node is said to be a valid BST node if and only if it satisfies the BST property:
    its value is strictly greater than the values of every node to its left;
    its value is less than or equal to the values of every node to its right;
    and its children nodes are either valid BST nodes themselves or None null
*/


// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
      let tree = this
      let inserted = false
      while (!inserted) {
        if(value < tree.value){
          if(tree.left === null){
            tree.left = new BST(value)
            inserted = true
          } else {
            tree = tree.left 
          }
        } else {
          if(tree.right === null){
            tree.right = new BST(value)
            inserted = true
          } else {
            tree = tree.right 
          }
        }
      }
      return this;
    }
  
    contains(value) {
      // Write your code here.
      let tree = this
      let found = false
      while (tree !== null) {
        if(tree.value === value){
          return  true
        }
        if(tree.value < value){
          tree = tree.right
        } else {
          tree = tree.left
        }
      }
      return found
    }
  
    remove(value, parentTree = null) {
      // Write your code here.
      // Do not edit the return statement of this method.
      let tree = this;
      while (tree !== null) {
        if(value < tree.value){
          parentTree = tree;
          tree = tree.left;
        } else if(value > tree.value) {
          parentTree = tree;
          tree = tree.right
        } else {
          if(tree.left !== null && tree.right !== null){
            tree.value = tree.right.getMinValue()
            tree.right.remove(tree.value, tree)
          } else if(parentTree === null){
            if(tree.left !== null){
              tree.value = tree.left.value
              tree.right = tree.left.right
              tree.left = tree.left.left
            } else if(tree.right !== null){
              tree.value = tree.right.value
              tree.left = tree.right.left
              tree.right = tree.right.right
            } 
          } else if(parentTree.left === tree) {
            parentTree.left = tree.left !== null 
              ? tree.left
              : tree.right
          } else if(parentTree.right === tree) {
            parentTree.right = tree.left !== null
              ? tree.left
              : tree.right
          }
          break
        }
      }
        return this;
    }
  
    getMinValue() {
      let tree = this
      while (tree.left !== null) {
        tree = tree.left
      }
      return tree.value
    }
  }
  