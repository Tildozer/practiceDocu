/*
You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only o sand 1 s. 
Each 0 represents land, and each 1 represents part of a river. 
A river consists of any number of 1 s that are either horizontally or vertically adjacent (but not diagonally adjacent). 
The number of adjacent 1 s forming a river determine its size.
Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.
Write a function that returns an array of the sizes of all rivers represented in the input matrix. 
The sizes don't need to be in any particular order.
*/

function riverSizes(matrix) {
  // Write your code here.
  let sizes = [];
  let visited = [];
  matrix.forEach((elem) => visited.push(new Array(elem.length).fill(0)));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue;
      } else {
        traverseNode(i, j, matrix, visited, sizes);
      }
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    let currentNode = nodesToExplore.pop();
    let i = currentNode[0];
    let j = currentNode[1];
    if (visited[i][j]) {
      continue;
    }
    visited[i][j] = 1;
    if (matrix[i][j] === 0) {
      continue;
    }
    currentRiverSize += 1;
    let unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    unvisitedNeighbors.forEach((neighbor) => nodesToExplore.push(neighbor));
  }

  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  let unvistedNeighbors = [];

  if (i > 0 && !visited[i - 1][j]) {
    unvistedNeighbors.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvistedNeighbors.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvistedNeighbors.push([i, j - 1]);
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvistedNeighbors.push([i, j + 1]);
  }
  return unvistedNeighbors;
}

//   ---------- Test Case 1 ----------
console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
); // [ 2, 1, 5, 2, 2 ]
// ---------- Test Case 2 ----------
console.log(riverSizes([[0]])); // []
// ---------- Test Case 3 ----------
console.log(riverSizes([[1]])); // [ 1 ]
// ---------- Test Case 4 ----------
console.log(riverSizes([[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]])); // [ 3, 2, 1 ]
// ---------- Test Case 5 ----------
console.log(
  riverSizes([
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0],
  ])
); // [ 2, 1, 3, 1 ]
// ---------- Test Case 6 ----------
console.log(
  riverSizes([
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  ])
); // [ 2, 1, 21, 5, 2, 1 ]
// ---------- Test Case 7 ----------
console.log(
  riverSizes([
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1],
  ])
);
// [
//   1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1,
//   1
// ]
// ---------- Test Case 8 ----------
console.log(
  riverSizes([
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1],
  ])
);
// [
//   1, 1, 1, 1, 7,
//   1, 1, 1, 1
// ]
// ---------- Test Case 9 ----------
console.log(
  riverSizes([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
); // []
// ---------- Test Case 10 ----------
console.log(
  riverSizes([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ])
); // [ 49 ]
// ---------- Test Case 11 ----------
console.log(
  riverSizes([
    [1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1],
  ])
); // [ 3, 5, 6 ]
// ---------- Test Case 12 ----------
console.log(
  riverSizes([
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 1],
  ])
); // [ 10, 1, 1, 2, 6 ]
