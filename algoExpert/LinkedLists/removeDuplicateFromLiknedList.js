/*
You're given the dead of a singly Linked list whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the linked list that doesn't contain any nodes with duplicate values.
The linked list should be modified in place(i.e., you shouldn't create a brand new list), and the modified list should still have nodes sorted with respect to their values.

Each `LinkedList` node has an integer `value` as well as a `next` node pointing to the next node in the list or to `None`/`null` if it's the tail of the list.
*/

// WATCH ACTUAL SOLUTION
// MY SOLUTION

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    _removeDuplicatesHelper(linkedList)
    return linkedList;
  }
  
  function _removeDuplicatesHelper(linkedList){
    if(!linkedList || !linkedList.next){
      return;
    }
    if(linkedList.value === linkedList.next.value){
      linkedList.next = linkedList.next.next;
      _removeDuplicatesHelper(linkedList);
    } else {
      _removeDuplicatesHelper(linkedList.next); 
    }
  }
  