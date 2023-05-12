/*
You're given two Linked Lists of potentially unequal length. 
These Linked Lists potentially merge at a shared intersection node. 
Write a function that returns the intersection node or returns None / null if there is no intersection.
Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
Note: Your function should return an existing node. 
It should not modify either Linked List, and it should not create any new Linked Lists.
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let set = new Set();
  _addToSet(linkedListOne, set);
  return _searchForIntersection(linkedListTwo, set);
}

function _addToSet(node, set) {
  if (node === null) return;

  set.add(node.value);
  _addToSet(node.next, set);
}

function _searchForIntersection(node, set) {
  if (node === null) return node;

  if (set.has(node.value)) {
    return node;
  } else {
    return _searchForIntersection(node.next, set);
  }
}
