/*
Write a function that takes in an array of integers and returns a new array containing, at each index, the next element in the input array that's greater than the element at that index in the input array.
In other words, your function should return a new array where outputArray [i] is the next element in the input array that's greater than inputArray [i] . 
If there's no such next greater element for a particular index, the value at that index in the output array should be -1 . 
For example, given array = [1, 2] , your function should return [2, -1].
Additionally, your function should treat the input array as a circular array. 
A circular array wraps around itself as if it were connected end-to-end. So the next index after the last index in a circular array is the first index. This means that, for our problem, given array = [0, 0, 5, 0, 0, 3, 0, 0] the next greater element after 3 is 5, since the array is circular.
*/

function nextGreaterElementReverse(array) {
  // Write your code here.
  let greaterElements = new Array(array.length).fill(-1);
  const stack = [];
  for (let i = array.length * 2; i > 0; i--) {
    const idx = i % array.length;
    while (stack.length) {
      if (stack[stack.length - 1] <= array[idx]) {
        stack.pop();
      } else {
        greaterElements[idx] = stack[stack.length - 1];
        break;
      }
    }
    stack.push(array[idx]);
  }
  return greaterElements;
}

function nextGreaterElement(array) {
  // Write your code here.
  let greaterElements = new Array(array.length).fill(-1);
  const stack = [];
  for (let i = 0; i < array.length * 2; i++) {
    const idx = i % array.length;

    while (stack.length && array[stack[stack.length - 1]] < array[idx]) {
      let top = stack.pop();
      greaterElements[top] = array[idx];
    }
    stack.push(idx);
  }
  return greaterElements;
}

// ---------- Test Case 1 ----------
console.log(nextGreaterElementReverse([2, 5, -3, -4, 6, 7, 2])); // [5, 6, 6, 6, 7, -1, 5];
// ---------- Test Case 2 ----------
console.log(nextGreaterElementReverse([0, 1, 2, 3, 4])); // [1, 2, 3, 4, -1];
// ---------- Test Case 3 ----------
console.log(nextGreaterElementReverse([6, 4, 5, 7, 2, 1, 3])); // [7, 5, 7, -1, 3, 3, 6];
// ---------- Test Case 4 ----------
console.log(nextGreaterElementReverse([1, 0, 1, 0, 1, 0, 1])); //[-1, 1, -1, 1, -1, 1, -1];
// ---------- Test Case 5 ----------
console.log(nextGreaterElementReverse([5, 6, 1, 3, 1, -2, -1, 3, 4, 5])); // [6, -1, 3, 4, 3, -1, 3, 4, 5, 6];
// ---------- Test Case 6 ----------
console.log(nextGreaterElementReverse([7, 6, 5, 4, 3, 2, 1])); // [-1, 7, 7, 7, 7, 7, 7];
// ---------- Test Case 7 ----------
console.log(nextGreaterElementReverse([5, 6, 1, 2, 3, 4])); // [6, -1, 2, 3, 4, 5];
// ---------- Test Case 8 ----------
console.log(nextGreaterElementReverse([1, 1, 1, 1, 1, 1, 1, 1])); // [-1, -1, -1, -1, -1, -1, -1, -1];
// ---------- Test Case 9 ----------
console.log(nextGreaterElementReverse([12])); // [-1];
// ---------- Test Case 10 ----------
console.log(nextGreaterElementReverse([12, 4])); // [-1, 12];
// ---------- Test Case 11 ----------
console.log(nextGreaterElementReverse([-9, 0, -5, 1, 3, -2, 18, 2, 5, 18])); // [0, 1, 1, 3, 18, 18, -1, 5, 18, -1];
// ---------- Test Case 12 ----------
console.log(nextGreaterElementReverse([2, 6, 7, 2, 2, 2])); // [6, 7, -1, 6, 6, 6];
// ---------- Test Case 13 ----------
console.log(
  nextGreaterElementReverse([
    1, 2, 3, 4, 1, 2, 3, 4, -8, -7, 6, 2, 17, 2, -8, 9, 0, 2,
  ])
); // [2, 3, 4, 6, 2, 3, 4, 6, -7, 6, 17, 17, -1, 9, 9, 17, 2, 3];
// ---------- Test Case 14 ----------
console.log(
  nextGreaterElementReverse([-8, -1, -1, -2, -4, -5, -6, 0, -9, -91, -2, 8])
); //[-1, 0, 0, 0, 0, 0, 0, 8, -2, -2, 8, -1];

// ---------- Test Case 15 ----------
console.log(nextGreaterElementReverse([])); // []
