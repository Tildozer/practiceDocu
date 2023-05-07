/*
You're given a Node class that has a name and an array of optional children nodes. 
When put together, nodes form an acyclic tree-like structure.
Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.
*/

// Do not edit the class below except
// for the breadthFirstSearch method.
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

  breadthFirstSearch(array) {
    // Write your code here.
    let que = [this];
    for (let i = 0; i < que.length; i++) {
      const currLetter = que[i];
      array.push(currLetter.name);
      currLetter.children.forEach((child) => que.push(child));
    }
    return array;
  }
}
