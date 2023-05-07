/*
Write a function that takes in an array of integers representing a stack, recursively sorts the stack in place (i.e., doesn't create a brand new array), and returns it.
The array must be treated as a stack, with the end of the array as the top of the stack. 
Therefore, you're only allowed to:
    • Pop elements from the top of the stack by removing elements from the end of the array using the built-in pop () method in your programming language of choice.
    • Push elements to the top of the stack by appending elements to the end of the array using the built-in append ( ) method in your programming language of choice.
    • Peek at the element on top of the stack by accessing the last element in the array.
You're not allowed to perform any other operations on the input array, including accessing elements (except for the last element), moving elements, etc... 
You're also not allowed to use any other data structures, and your solution must be recursive.
*/

function sortStack(stack) {
  // Write your code here.
  _sort(stack);

  return stack;
}

function _sort(stack) {
  if (stack.length === 0) return stack;
  const top = stack.pop();
  _sort(stack);
  _insert(top, stack);
}

function _insert(top, stack) {
  if (!stack.length || stack.at(-1) < top) {
    stack.push(top);
  } else {
    const oldTop = stack.pop();
    _insert(top, stack);
    stack.push(oldTop);
  }
}

// ---------- Test Case 1 ----------
console.log(sortStack([-5, 2, -2, 4, 3, 1])); // [ -5, -2, 1, 2, 3, 4 ]
// ---------- Test Case 2 ----------
console.log(sortStack([3, 4, 5, 1, 2])); // [ 1, 2, 3, 4, 5 ]
// ---------- Test Case 3 ----------
console.log(sortStack([0, -2, 3, 4, 1, -9, 8])); // [-9, -2, 0, 1, 3, 4, 8]
// ---------- Test Case 4 ----------
console.log(sortStack([2, 4, 22, 1, -9, 0, 6, 23, -2, 1]));
// [
//   -9, -2, 0,  1,  1,
//    2,  4, 6, 22, 23
// ]
// ---------- Test Case 5 ----------
console.log(sortStack([3, 4, 5, 1, 2])); // [ 1, 2, 3, 4, 5 ]
// ---------- Test Case 6 ----------
console.log(sortStack([-1, 0, 2, 3, 4, 1, 1, 1])); // [-1, 0, 1, 1, 1, 2, 3, 4]
// ---------- Test Case 7 ----------
console.log(sortStack([])); // []
// ---------- Test Case 8 ----------
console.log(sortStack([1])); // [ 1 ]
// ---------- Test Case 9 ----------
console.log(sortStack([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// ---------- Test Case 10 ----------
console.log(sortStack([9, 2, 8, 1])); // [ 1, 2, 8, 9 ]
// ---------- Test Case 11 ----------
console.log(sortStack([2, 33, 44, 2, -9, -7, -5, -2, -2, -2, 0]));
// [
//   -9, -7, -5, -2, -2,
//   -2,  0,  2,  2, 33,
//   44
// ]
// ---------- Test Case 12 ----------
console.log(sortStack([3, 3, 3, 3, 3, 3])); // [ 3, 3, 3, 3, 3, 3 ]
// ---------- Test Case 13 ----------
console.log(sortStack([0, 0])); // [ 0, 0 ]
// ---------- Test Case 14 ----------
console.log(sortStack([2, 22, 222, 3, 33, 33, 9, 2, 3, 312, -9, -2, 3]));
// [
//    -9, -2,  2,  2,  3,   3,
//     3,  9, 22, 33, 33, 222,
//   312
// ]
// ---------- Test Case 15 ----------
console.log(sortStack([3, 4, 5, 1, 2, 2, 2, 1, 3, 4, 5, 3, 1, 3, -1, 2, 3]));
// [
//   -1, 1, 1, 1, 2, 2, 2,
//    2, 3, 3, 3, 3, 3, 4,
//    4, 5, 5
// ]
