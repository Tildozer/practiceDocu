/*
Write a function that takes in an array of integers and returns the length of the longest peak in the
array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. 
At least three integers are required to form a peak.
For example, the integers `[1, 4, 10, 2]` form a peak, but the integers `[4, 0, 10]` don't and neither do the integers `[1, 2, 2, 0]` . 
Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the
*/


function longestPeak(array) {
    // Write your code here.\
    let peaks = [];
    for (let i = 1; i < array.length - 1; i++) {
      if(array[i - 1] < array[i] && array[i + 1] < array[i]){
        peaks.push(i)
      }
    }
    let longest;
    for (let i = 0; i < peaks.length; i++) {
      const currPeak = peaks[i]
       const peakObj = _findLongestPeak(array, currPeak, 3, currPeak - 1, currPeak + 1)
      if(!longest){
        longest = peakObj
      } else if(peakObj.peaksLength > longest.peaksLength){
        longest = peakObj
      }
    }
    console.log(array)
    return console.log(longest ? longest.peaksLength : 0)
  }
  
  function _findLongestPeak(array, peak, peaksLength, leftPointer, rightPointer) {
    const peakObj = {peak, peaksLength}
    if(leftPointer - 1 < 0 && rightPointer + 1 === array.length){
      return peakObj
    }
    let newLength = peaksLength
    let newLeftPointer = leftPointer
    let newRightPointer = rightPointer
    if(leftPointer && array[leftPointer - 1] < array[leftPointer]){
      newLength++
      newLeftPointer += - 1
    } else {
      newLeftPointer = 0
    }
    if(array[rightPointer] !== array.length - 1 && array[rightPointer] > array[rightPointer + 1]){
      newRightPointer++
      newLength++
    } else {
      newRightPointer = array.length - 1
    }
    return _findLongestPeak(array, peak, newLength, newLeftPointer, newRightPointer)
  }


// ---------- Test Case 1 ----------
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])); // 6
// ---------- Test Case 2 ----------
console.log(longestPeak([])); // 0
// ---------- Test Case 3 ----------
console.log(longestPeak([1, 3, 2])); // 3
// ---------- Test Case 4 ----------
console.log(longestPeak([1, 2, 3, 4, 5, 1])); // 6
// ---------- Test Case 5 ----------
console.log(longestPeak([5, 4, 3, 2, 1, 2, 1])); // 3
// ---------- Test Case 6 ----------
console.log(longestPeak([5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10])); // 5
// ---------- Test Case 7 ----------
console.log(longestPeak([5, 4, 3, 2, 1, 2, 10, 12])); // 0
// ---------- Test Case 8 ----------
console.log(longestPeak([1, 2, 3, 4, 5, 6, 10, 100, 1000])); // 0
// ---------- Test Case 9 ----------
console.log(longestPeak([1, 2, 3, 3, 2, 1])); // 0
// ---------- Test Case 10 ----------
console.log(longestPeak([1, 1, 3, 2, 1])); // 4
// ---------- Test Case 11 ----------
console.log(longestPeak([1, 2, 3, 2, 1, 1])); // 5
// ---------- Test Case 12 ----------
console.log(
  longestPeak([
    1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5,
    0, -1, -1,
  ])
); // 9
// ---------- Test Case 13 ----------
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10])); // 3
