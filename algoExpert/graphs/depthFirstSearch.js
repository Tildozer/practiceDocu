/*
You're given a `Node` class that has a `name` and an ``array of optional `children` nodes.
When put together, the nodes form an acyrcliic tree-like structuure.

Implement the `depthFirstSearch` mehtond on the `Node` class, which takes in an epty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array and returns it
*/

// MY SOLUTION

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
      this.depthHelperFunction(array, this)
      return array
    }
    
    depthHelperFunction(array, currChild){
      array.push(currChild.name)
      for (let i = 0; i < currChild.children.length; i++) {
        let child = currChild.children[i]
        this.depthHelperFunction(array, child)
      }
    }
  }
  