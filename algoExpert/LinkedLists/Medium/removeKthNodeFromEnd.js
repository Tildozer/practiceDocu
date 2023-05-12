/*
Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.
The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).
Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed. 
In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.
Note that your function doesn't need to return anything.
You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.
Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let length = _getLinkedListLength(head, 0);
  let nodeToReplaceIdx = length - k;
  _replaceNode(head, nodeToReplaceIdx, 0);
}

function _getLinkedListLength(node, length) {
  let currentNode = node;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    length++;
  }
  return length;
}

function _replaceNode(node, nodesIdx, currIdx) {
  if (nodesIdx === -1) {
    node.value = node.next.value;
    node.next = node.next.next;
    return;
  }
  if (currIdx === nodesIdx) {
    return (node.next = node.next.next);
  }
  _replaceNode(node.next, nodesIdx, currIdx + 1);
}
