/*
You're given two positive integers representing the width and height of a grid-shaped, rectangular graph. 
Write a function that returns the number of ways to reach the bottom right corner of the graph when starting at the top left corner. 
Each move you take must either go down or right. 
In other words, you can never move up or left in the graph.
*/

function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  if (height === 1 || width === 1) return 1;
  const xDistanceToCorner = width - 1;
  const yDistanceToCorner = height - 1;

  const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  const denominamtor =
    factorial(xDistanceToCorner) * factorial(yDistanceToCorner);

  return Math.floor(numerator / denominamtor);
}

function factorial(num) {
  let results = num;
  for (let i = 2; i < num; i++) {
    results = results * i;
  }

  return results;
}

function LeastOptimal(width, height) {
  // Write your code here.
  if (width === 1 || height === 1) return 1;

  return LeastOptimal(width - 1, height) + LeastOptimal(width, height - 1);
}

//   ---------- Test Case 1 ----------
console.log(numberOfWaysToTraverseGraph(4, 3));

// ---------- Test Case 2 ----------
console.log(numberOfWaysToTraverseGraph(3, 2));

// ---------- Test Case 3 ----------
console.log(numberOfWaysToTraverseGraph(2, 3));

// ---------- Test Case 4 ----------
console.log(numberOfWaysToTraverseGraph(5, 5));

// ---------- Test Case 5 ----------
console.log(numberOfWaysToTraverseGraph(5, 6));

// ---------- Test Case 6 ----------
console.log(numberOfWaysToTraverseGraph(7, 5));

// ---------- Test Case 7 ----------
console.log(numberOfWaysToTraverseGraph(10, 2));

// ---------- Test Case 8 ----------
console.log(numberOfWaysToTraverseGraph(11, 2));

// ---------- Test Case 9 ----------
console.log(numberOfWaysToTraverseGraph(5, 9));

// ---------- Test Case 10 ----------
console.log(numberOfWaysToTraverseGraph(6, 7));

// ---------- Test Case 11 ----------
console.log(numberOfWaysToTraverseGraph(8, 5));

// ---------- Test Case 12 ----------
console.log(numberOfWaysToTraverseGraph(2, 2));

// ---------- Test Case 13 ----------
console.log(numberOfWaysToTraverseGraph(2, 1));

// ---------- Test Case 14 ----------
console.log(numberOfWaysToTraverseGraph(1, 2));

// ---------- Test Case 15 ----------
console.log(numberOfWaysToTraverseGraph(3, 3));
