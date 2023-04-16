/*
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.
Note that the absolute difference of two integers is the distance between them on the real number line. 
For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.
You can assume that there will only be one pair of numbers with the smallest difference.
*/

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  const sortedOne = arrayOne.sort((a, b) => a - b);
  const sortedTwo = arrayTwo.sort((a, b) => a - b);
  return _searchBothArrays(sortedOne, sortedTwo, 0, 1, [
    arrayOne[0],
    arrayTwo[0],
  ]);
}

function _searchBothArrays(arrayOne, arrayTwo, oneIdx, twoIdx, smallest) {
  if (oneIdx === arrayOne.length && twoIdx === arrayTwo.length) {
    return smallest;
  }
  const distance = Math.abs(arrayOne[oneIdx] - arrayTwo[twoIdx]);
  const currentSmallest = Math.abs(smallest[0] - smallest[1]);
  if (distance < currentSmallest) {
    if (twoIdx === arrayTwo.length) {
      return _searchBothArrays(arrayOne, arrayTwo, oneIdx + 1, 0, [
        arrayOne[oneIdx],
        arrayTwo[twoIdx],
      ]);
    } else {
      return _searchBothArrays(arrayOne, arrayTwo, oneIdx, twoIdx + 1, [
        arrayOne[oneIdx],
        arrayTwo[twoIdx],
      ]);
    }
  } else {
    if (twoIdx === arrayTwo.length) {
      return _searchBothArrays(arrayOne, arrayTwo, oneIdx + 1, 0, smallest);
    } else {
      return _searchBothArrays(
        arrayOne,
        arrayTwo,
        oneIdx,
        twoIdx + 1,
        smallest
      );
    }
  }
}

//   ---------- Test Case 1 ----------
console.log(smallestDifference([-1, 5, 10, 20, 28, 3][(26, 134, 135, 15, 17)])); //   [ 28, 26 ]
//   ---------- Test Case 2 ----------
console.log(smallestDifference([-1, 5, 10, 20, 3][(26, 134, 135, 15, 17)])); //   [ 20, 17 ]

//   ---------- Test Case 3 ----------
console.log(
  smallestDifference([10, 0, 20, 25][(1005, 1006, 1014, 1032, 1031)])
); // [ 25, 1005 ]
// ---------- Test Case 4 ----------
console.log(
  smallestDifference([10, 0, 20, 25, 2200][(1005, 1006, 1014, 1032, 1031)])
); // [ 25, 1005 ]
// ---------- Test Case 5 ----------
console.log(
  smallestDifference([10, 0, 20, 25, 2000][(1005, 1006, 1014, 1032, 1031)])
); // [ 2000, 1032 ]
// ---------- Test Case 6 ----------
console.log(
  smallestDifference(
    [240, 124, 86, 111, 2, 84, 954, 27, 89][(1, 3, 954, 19, 8)]
  )
); // [ 954, 954 ]

// ---------- Test Case 7 ----------
console.log(smallestDifference([0, 20][(21, -2)])); // [ 20, 21 ]
// ---------- Test Case 8 ----------
console.log(
  smallestDifference(
    [10, 1000][(-1441, -124, -25, 1014, 1500, 660, 410, 245, 530)]
  )
); // [ 1000, 1014 ]

// ---------- Test Case 9 ----------
console.log(
  smallestDifference(
    [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123][
      (-1441, -124, -25, 1014, 1500, 660, 410, 245, 530)
    ]
  )
); // [ -123, -124 ]
// ---------- Test Case 10 ----------
console.log(
  smallestDifference(
    [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530][
      (-1441, -124, -25, 1014, 1500, 660, 410, 245, 530)
    ]
  )
); // [ 530, 530 ]
