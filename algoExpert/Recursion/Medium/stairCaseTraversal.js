/*
You're given two positive integers representing the height of a staircase and the maximum number of steps that you can advance up the staircase at a time. 
Write a function that returns the number of ways in which you can climb the staircase.
For example, if you were given a staircase of height = 3 and maxSteps = 2 you could climb the staircase in 3 ways. 
You could take 1 step, 1 step, then 1 step, you could also take 1 step, then 2 steps, and you could take 2 steps, then 1 step.
Note that maxSteps <= height will always be true.
*/

//-----------------------------------------------------------------------\\
// Worst running version.
function staircaseTraversalSlowest(height, maxSteps) {
  // Write your code here.
  console.log(`console.log(staircasTraversal(${height}, ${maxSteps}))`);
  console.log(_waysToTop(height, maxSteps));
  return _waysToTop(height, maxSteps);
}

function _waysToTop(height, maxSteps) {
  if (height <= 1) {
    return 1;
  }
  let numberOfWays = 0;
  for (let i = 1; i < Math.min(maxSteps, height) + 1; i++) {
    numberOfWays += _waysToTop(height - i, maxSteps);
  }

  return numberOfWays;
}

//-----------------------------------------------------------------------\\
// Add memoization to increase it efficentcy.
function staircaseTraversalMemoize(height, maxSteps) {
  // Write your code here.
  return _waysToTop(height, maxSteps, { 0: 1, 1: 1 });
}

function _waysToTop(height, maxSteps, memoize) {
  if (height in memoize) {
    return memoize[height];
  }
  let numberOfWays = 0;
  for (let i = 1; i < Math.min(maxSteps, height) + 1; i++) {
    numberOfWays += _waysToTop(height - i, maxSteps, memoize);
  }

  memoize[height] = numberOfWays;
  return numberOfWays;
}

//-----------------------------------------------------------------------\\
// Dynamic programming Solution
function staircaseTraversalDynamic(height, maxSteps) {
    // Write your code here.
    let waysToTop = new Array(height + 1).fill(0);
    [waysToTop[0], waysToTop[1]] = [1,1];
    for (let i = 2; i < height + 1; i++) {
      let step = 1;
      while (step <= maxSteps && step <= i) {
        waysToTop[i] = waysToTop[i] + waysToTop[i - step]
        step++;
      }
    }
    return waysToTop[height];
  }
//-----------------------------------------------------------------------\\
// Best Time Complexity. runs in 0(n) time
function staircaseTraversal(height, maxSteps) {
    // Write your code here.
    let currentNumberOfWays = 0;
    let waysToTop = [1];
  
    for (let i = 1; i < height + 1; i++) {
      const startOfWindow = i - maxSteps - 1;
      let endOfWindow = i - 1;
      if (startOfWindow >= 0) {
        currentNumberOfWays += 0 - waysToTop[startOfWindow];
      }
      currentNumberOfWays += waysToTop[endOfWindow];
      waysToTop.push(currentNumberOfWays)
    }
    return waysToTop[height];
  }
  
// ---------- Test Case 4 ----------
console.log(staircasTraversal(4, 3)); // 7
// ---------- Test Case 5 ----------
console.log(staircasTraversal(1, 1)); // 1
// ---------- Test Case 6 ----------
console.log(staircasTraversal(5, 2)); // 8
// ---------- Test Case 7 ----------
console.log(staircasTraversal(4, 4)); // 8
// ---------- Test Case 8 ----------
console.log(staircasTraversal(6, 2)); // 13
// ---------- Test Case 9 ----------
console.log(staircasTraversal(100, 1)); // 1
// ---------- Test Case 10 ----------
console.log(staircasTraversal(15, 5)); // 13624
// ---------- Test Case 11 ----------
console.log(staircasTraversal(7, 2)); // 21
// ---------- Test Case 12 ----------
console.log(staircasTraversal(6, 3)); // 24
// ---------- Test Case 13 ----------
console.log(staircasTraversal(3, 2)); // 3
