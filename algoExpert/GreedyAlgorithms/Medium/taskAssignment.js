/*
You're given an integer k representing a number of workers and an array of positive integers representing durations of tasks that must be completed by the workers.
Specifically, each worker must complete two unique tasks and can only work on one task at a time. 
The number of tasks will always be equal to 2k such that each worker always has exactly two tasks to complete. 
All tasks are independent of one another and can be completed in any order. 
Workers will complete their assigned tasks in parallel, and the time taken to complete all tasks will be equal to the time taken to complete the longest pair of tasks (see the sample output for an explanation).
Write a function that returns the optimal assignment of tasks to each worker such that the tasks are completed as fast as possible. 
Your function should return a list of pairs, where each pair stores the indices of the tasks that should be completed by one worker. The pairs should be in the following format: [taski, task2], where the order of task and task doesn't matter. 
Your function can return the pairs in any order. 
If multiple optimal assignments exist, any correct answer will be accepted.
Note: you'll always be given at least one worker (i.e., k will always be greater than 0).
*/

function taskAssignment(k, tasks) {
  // Write your code here.
  const sortTasks = tasks.slice().sort((a, b) => a - b);

  return _findleastAmountOfTime(tasks, sortTasks, k, 0, tasks.length - 1, []);
}

function _findleastAmountOfTime(refrence, tasks, k, idx, endIdx, array) {
  if (endIdx < idx || array.length === k) return array;
  let newIdx = null;
  let newEndIdx = null;
  let i = 0;
  while (newIdx === null || newEndIdx === null || i === tasks.length) {
    if (newIdx === null && refrence[i] === tasks[idx]) {
      newIdx = i;
      refrence[i] = Infinity;
    }
    if (newEndIdx === null && refrence[i] === tasks[endIdx]) {
      newEndIdx = i;
      refrence[i] = Infinity;
    }
    i++;
  }
  array.push([newIdx, newEndIdx]);
  return _findleastAmountOfTime(refrence, tasks, k, idx + 1, endIdx - 1, array);
}

// ---------- Test Case 1 ----------
console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));
// [ [ 0, 2 ], [ 4, 5 ], [ 1, 3 ] ]
// ---------- Test Case 2 ----------
console.log(taskAssignment(4, [1, 2, 3, 4, 5, 6, 7, 8]));
// [ [ 0, 7 ], [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]
// ---------- Test Case 3 ----------
console.log(taskAssignment(5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ] ]
// ---------- Test Case 4 ----------
console.log(taskAssignment(1, [3, 5]));
// [ [ 0, 1 ] ]
// ---------- Test Case 5 ----------
console.log(taskAssignment(7, [2, 1, 3, 4, 5, 13, 12, 9, 11, 10, 6, 7, 14, 8]));
// [
//   [ 1, 12 ],
//   [ 0, 5 ],
//   [ 2, 6 ],
//   [ 3, 8 ],
//   [ 4, 9 ],
//   [ 10, 7 ],
//   [ 11, 13 ]
// ]
// ---------- Test Case 6 ----------
console.log(taskAssignment(5, [3, 7, 5, 4, 4, 3, 6, 8, 3, 3]));
// [ [ 0, 7 ], [ 5, 1 ], [ 8, 6 ], [ 9, 2 ], [ 3, 4 ] ]
// ---------- Test Case 7 ----------
console.log(
  taskAssignment(
    10,
    [5, 6, 2, 3, 15, 15, 16, 19, 2, 10, 10, 3, 3, 32, 12, 1, 23, 32, 9, 2]
  )
);
// [
//   [ 15, 13 ], [ 2, 17 ],
//   [ 8, 16 ],  [ 19, 7 ],
//   [ 3, 6 ],   [ 11, 4 ],
//   [ 12, 5 ],  [ 0, 14 ],
//   [ 1, 9 ],   [ 18, 10 ]
// ]
// ---------- Test Case 8 ----------
console.log(taskAssignment(4, [1, 2, 2, 1, 3, 4, 4, 4]));
// [ [ 0, 5 ], [ 3, 6 ], [ 1, 7 ], [ 2, 4 ] ]
// ---------- Test Case 9 ----------
console.log(taskAssignment(3, [87, 65, 43, 32, 31, 320]));
// [ [ 4, 5 ], [ 3, 0 ], [ 2, 1 ] ]
// ---------- Test Case 10 ----------
console.log(taskAssignment(2, [3, 4, 5, 3]));
// [ [ 0, 2 ], [ 3, 1 ] ]
// ---------- Test Case 11 ----------
console.log(taskAssignment(3, [5, 2, 1, 6, 4, 4]));
// [ [ 2, 3 ], [ 1, 0 ], [ 4, 5 ] ]
// ---------- Test Case 12 ----------
console.log(taskAssignment(2, [1, 8, 9, 10]));
// [ [ 0, 3 ], [ 1, 2 ] ]
