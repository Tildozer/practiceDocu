/*

*/

function subarraySort(array) {
  // Write your code here.
  let highestUnsorted = -Infinity;
  let lowestUnsorted = Infinity;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (!_inOrder(i, num, array)) {
      lowestUnsorted = Math.min(lowestUnsorted, num);
      highestUnsorted = Math.max(highestUnsorted, num);
    }
  }
  let highIdx;
  let lowIdx;
  if (lowestUnsorted === Infinity) return [-1, -1];
  for (let i = 0; i < array.length; i++) {
    if (typeof highIdx === "undefined") {
      let num = array[i];
      if (num > highestUnsorted) {
        highIdx = i - 1;
      }

      if (typeof lowIdx === "undefined") {
        let num = array[i];
        if (num > lowestUnsorted) {
          lowIdx = i;
        }
      }
    }
  }
  if (!highIdx) {
    highIdx = array.length - 1;
  }
  return [lowIdx, highIdx];
}

function _inOrder(i, num, array) {
  if (i - 1 > -1) {
    if (num < array[i - 1]) {
      return false;
    }
  }
  if (i + 1 < array.length) {
    if (num > array[i + 1]) {
      return false;
    }
  }
  return true;
}

// ---------- Test Case 1 ----------
console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])); // [ 3, 9 ]
// ---------- Test Case 2 ----------
console.log(subarraySort([1, 2])); // [ -1, -1 ]
// ---------- Test Case 3 ----------
console.log(subarraySort([2, 1])); // [ 0, 1 ]
// ---------- Test Case 4 ----------
console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19])); // [ 4, 9 ]
// ---------- Test Case 5 ----------
console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19])); // [ 4, 6 ]
// ---------- Test Case 6 ----------
console.log(subarraySort([1, 2, 8, 4, 5])); // [ 2, 4 ]
// ---------- Test Case 7 ----------
console.log(subarraySort([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7])); // [ 0, 12 ]
// ---------- Test Case 8 ----------
console.log(subarraySort([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57])); // [ 0, 11 ]
// ---------- Test Case 9 ----------
console.log(subarraySort([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57])); // [ 1, 11 ]
// ---------- Test Case 10 ----------
console.log(subarraySort([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7])); // [ 1, 12 ]
// ---------- Test Case 11 ----------
console.log(subarraySort([1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11])); // [ 6, 7 ]
// ---------- Test Case 12 ----------
console.log(
  subarraySort([1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19])
); // [ 6, 16 ]
// ---------- Test Case 13 ----------
console.log(
  subarraySort([
    1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19,
    4, 14, 11, 6, 33, 35, 41, 55,
  ])
); // [ 4, 24 ]
// ---------- Test Case 14 ----------
console.log(
  subarraySort([
    1, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
); // [ 2, 19 ]
// ---------- Test Case 15 ----------
console.log(
  subarraySort([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2,
  ])
); // [ 2, 19 ]
// ---------- Test Case 16 ----------
console.log(
  subarraySort([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
); // [ -1, -1 ]
// ---------- Test Case 17 ----------
console.log(subarraySort([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])); // [ -1, -1 ]
