/*
Write a function that takes in a "special" array and returns its product sum.
A "special" array is a non-empty array that contains either integers or other "special" arrays.
The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied b their level of depth.
The depth of a "special array is how far nested it is.
For instance, the depth of [] is 1;
The depth of the inner array in [[]] is 2 ; the depth of the innermost array in [[[]]] is 3.
Therefore, the product sum of [x, y] is × + y;
the product sum of [x, [[y, z]] is x + 2 * (y + z); 
the product sum of [x, [y, [z]]] is × + 2 * (y + 3z)
*/

// MY SOLUTION
// WATCH PROPER SOLUTION

function productSum(array) {
  // Write your code here.
  return _sum(array, 0, 1, 0);
}

function _sum(array, idx, depth, sum) {
  if (idx === array.length) {
    return depth === 1
      ? sum
      : depth === 2
      ? sum * 2
      : depth > 2
      ? depth * sum
      : null;
  }
  if (typeof array[idx] !== "number") {
    const sumOfArray = _sum(array[idx], 0, depth + 1, 0);
    sum += sumOfArray;
  } else {
    sum += array[idx];
  }
  return _sum(array, idx + 1, depth, sum);
}

//  // ---------- Test Case 1 ----------
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])); //12

// // ---------- Test Case 2 ----------
console.log(productSum([1, 2, 3, 4, 5])); //15

// // ---------- Test Case 3 ----------
console.log(productSum([1, 2, [3], 4, 5])); //18

// // ---------- Test Case 4 ----------
console.log(productSum([[1, 2], 3, [4, 5]])); //27

// // ---------- Test Case 5 ----------
console.log(productSum([[[[[5]]]]])); //600

// // ---------- Test Case 6 ----------
console.log(
  productSum([
    9,
    [2, -3, 4],
    1,
    [1, 1, [1, 1, 1]],
    [[[[3, 4, 1]]], 8],
    [1, 2, 3, 4, 5, [6, 7], -7],
    [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
    [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
    -3,
  ])
); //1351
