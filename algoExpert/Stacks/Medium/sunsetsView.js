/*
Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.
A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.
The input array named buildings contains positive, non-zero integers representing the heights of the buildings.
A building at index i thus has a height denoted by buildings [i]. All of the buildings face the same direction, and this direction is either east or west, denoted by the input string named direction, which will always be equal to either "EAST" or "WEST" . 
In relation to the input array, you can interpret these directions as right for east and left for west.
Important note: the indices in the ouput array should be sorted in ascending order.
*/

function sunsetViews(buildings, direction) {
  // Write your code here.
  let buildingsCopy = buildings.slice();
  const seesSunset = [];
  if (direction === "EAST") buildingsCopy.reverse();

  let tallestBuilding = buildingsCopy[0];
  buildingsCopy.forEach((_, idx) => {
    if (idx === 0) _eastOrWest(direction, buildings.length - 1, 0, seesSunset);
    let nextBuilding = buildingsCopy[idx + 1];
    if (nextBuilding > tallestBuilding) {
      _eastOrWest(direction, buildings.length - (2 + idx), idx + 1, seesSunset);
      tallestBuilding = nextBuilding;
    }
  });
  return seesSunset;
}

function _eastOrWest(direction, eastIdx, westIdx, array) {
  direction === "EAST" ? array.splice(0, 0, eastIdx) : array.push(westIdx);
}

// ---------- Test Case 1 ----------
console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], EAST)); // [ 1, 3, 6, 7 ]
// ---------- Test Case 2 ----------
console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], WEST)); // [ 0, 1 ]
// ---------- Test Case 3 ----------
console.log(sunsetViews([10, 11], EAST)); // [ 1 ]
// ---------- Test Case 4 ----------
console.log(sunsetViews([2, 4], WEST)); // [ 0, 1 ]
// ---------- Test Case 5 ----------
console.log(sunsetViews([1], EAST)); // [ 0 ]
// ---------- Test Case 6 ----------
console.log(sunsetViews([1], WEST)); // [ 0 ]
// ---------- Test Case 7 ----------
console.log(sunsetViews([], EAST)); // []
// ---------- Test Case 8 ----------
console.log(sunsetViews([], WEST)); // []
// ---------- Test Case 9 ----------
console.log(sunsetViews([7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5], EAST)); // [ 4, 5, 6, 7, 11 ]
// ---------- Test Case 10 ----------
console.log(sunsetViews([1, 2, 3, 4, 5, 6], EAST)); // [ 5 ]
// ---------- Test Case 11 ----------
console.log(sunsetViews([1, 2, 3, 4, 5, 6], WEST)); // [ 0, 1, 2, 3, 4, 5 ]
// ---------- Test Case 12 ----------
console.log(
  sunsetViews([1, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8], WEST)
);
// [
//   0, 1,  2,  4,
//   5, 6, 10, 13
// ]
// ---------- Test Case 13 ----------
console.log(
  sunsetViews([20, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8], EAST)
); // [ 0, 13, 14 ]
