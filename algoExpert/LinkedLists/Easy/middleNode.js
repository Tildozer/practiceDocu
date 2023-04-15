/*
You're given a Linked List with at least one node.
Write a function that returns the middle node of the Linked List. 
If there are two middle nodes(i.e. an even length list), you functions should return the second of these nodes.

Each `LinkedList` node has an integer `value` as well as a `next` node pointing to the next node on the list or to `none`/`null` if it's the tail of the list.
*/

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  // Write your code here.
  const half = _findHalf(linkedList, 0);

  return _returnHalf(linkedList, 0, half);
}

function _findHalf(linkedList, acc, half) {
  if (!linkedList) {
    return Math.floor(acc / 2);
  }

  return _findHalf(linkedList.next, acc + 1);
}

function _returnHalf(linkedList, acc, half) {
  if (half === acc) {
    return linkedList;
  }
  return _returnHalf(linkedList.next, acc + 1, half);
}
