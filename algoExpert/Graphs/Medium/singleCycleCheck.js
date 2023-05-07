/*
You're given an array of integers where each integer represents a jump of its value in the array. 
For instance, the integer 2 represents a jump of two indices forward in the array; 
    the integer -3 represents a jump of three indices backward in the array.
If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the last index in the array. 
Similarly, a jump of 1 at the last index in the array brings us to index 0
Write a function that returns a boolean representing whether the jumps in the array form a single cycle. 
A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.
*/

function hasSingleCycle(array) {
  // Write your code here.
  const traversedArray = [];
  let traversal = 0;
  while (traversedArray.length !== array.length) {
    if (traversal === 0) {
      if (
        traversedArray.indexOf(0) !== -1 &&
        traversedArray.length < array.length
      ) {
        return false;
      }
    }
    const jump = array[traversal];
    if (jump === 0) return false;
    if (jump > 0) {
      traversal = (traversal + jump) % array.length;
    } else {
      let wrap = (traversal + jump) % array.length;
      if (wrap < 0) {
        wrap += array.length;
      }
      traversal = wrap;
    }
    traversedArray.push(traversal);
  }
  return traversedArray[traversedArray.length - 1] === 0;
}

// ---------- Test Case 1 ----------
console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
// ---------- Test Case 2 ----------
console.log(hasSingleCycle([2, 2, -1])); // true
// ---------- Test Case 3 ----------
console.log(hasSingleCycle([2, 2, 2])); // true
// ---------- Test Case 4 ----------
console.log(hasSingleCycle([1, 1, 1, 1, 1])); // true
// ---------- Test Case 5 ----------
console.log(hasSingleCycle([-1, 2, 2])); // true
// ---------- Test Case 6 ----------
console.log(hasSingleCycle([0, 1, 1, 1, 1])); //
// ---------- Test Case 7 ----------
console.log(hasSingleCycle([1, 1, 0, 1, 1])); //
// ---------- Test Case 8 ----------
console.log(hasSingleCycle([1, 1, 1, 1, 2])); // false
// ---------- Test Case 9 ----------
console.log(
  hasSingleCycle([3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2])
); // true
// ---------- Test Case 10 ----------
console.log(
  hasSingleCycle([3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2])
); // false
// ---------- Test Case 11 ----------
console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, 1])); // true
// ---------- Test Case 12 ----------
console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -8])); // true
// ---------- Test Case 13 ----------
console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26])); // true
// ---------- Test Case 14 ----------
console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26])); // true
// ---------- Test Case 15 ----------
console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26])); // false
// ---------- Test Case 16 ----------
console.log(hasSingleCycle([1, -1, 1, -1])); // false
