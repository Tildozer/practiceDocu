/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)

 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let total: string = _addingHelper(l1, l2, "", 0);
  console.log(total, "final Total");
  let addedList: ListNode = new ListNode(+total[0]);
  let currentNode: ListNode = addedList;
  for (let i = 1; i < total.length; i++) {
    currentNode.next = new ListNode(+total[i]);
    currentNode = currentNode.next;
  }
  return addedList;
}

function _addingHelper(
  l1: ListNode | null,
  l2: ListNode | null,
  total: string,
  remainder: number,
): string {
  if (l1 === null && l2 === null) {
    if (remainder) {
      return total + "1";
    }
    return total;
  }

  let newRemainder = 0;
  let digitSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remainder;
  if (digitSum > 9) {
    newRemainder = 1;
    digitSum = digitSum % 10;
  }
  let newTotal: string;
  if (total !== "") {
    newTotal = total + digitSum.toString();
  } else {
    newTotal = digitSum.toString();
  }
  return _addingHelper(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    newTotal,
    newRemainder,
  );
}
