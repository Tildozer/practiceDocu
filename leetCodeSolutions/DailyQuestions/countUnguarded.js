/*
You are given two integers m and n representing a 0-indexed m x n grid. You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively.

A guard can see every cell in the four cardinal directions (north, east, south, or west) starting from their position unless obstructed by a wall or another guard. A cell is guarded if there is at least one guard that can see it.

Return the number of unoccupied cells that are not guarded.

 

Example 1:

Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
Output: 7
Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
There are a total of 7 unguarded cells, so we return 7.

Example 2:

Input: m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]
Output: 4
Explanation: The unguarded cells are shown in green in the above diagram.
There are a total of 4 unguarded cells, so we return 4.

*/

//unoptimized solution

const findGuardVision = (guard, room, n, m) => {
  let x = guard[0];
  let y = guard[1];
  for (let i = x; i < m; i++) {
    if (room[i][y] === 2) break;
    room[i][y] = 1;
  }
  for (let i = x - 1; i >= 0; i--) {
    if (room[i][y] === 2) break;
    room[i][y] = 1;
  }
  for (let i = y; i < n; i++) {
    if (room[x][i] === 2) break;
    room[x][i] = 1;
  }
  for (let i = y - 1; i >= 0; i--) {
    if (room[x][i] === 2) break;
    room[x][i] = 1;
  }
};

var unoptimizedCountUnguarded = function (m, n, guards, walls) {
  const room = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < walls.length; i++) {
    const x = walls[i][0];
    const y = walls[i][1];
    room[x][y] = 2;
  }
  for (let i = 0; i < guards.length; i++) {
    findGuardVision(guards[i], room, n, m);
  }

  let unguarded = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (room[i][j] === 0) unguarded++;
    }
  }
  return unguarded;
};

//optimized solution

const checkX = (room, m, n) => {
  for (let i = 0; i < m; i++) {
    let isGuarded = false;
    for (let j = 0; j < n; j++) {
      if (room[i][j] === 1) isGuarded = true;
      else if (room[i][j] === 2) isGuarded = false;
      else if (isGuarded) room[i][j] = 3;
    }
    isGuarded = false;
    for (let j = n - 1; j > -1; j--) {
      if (room[i][j] === 1) isGuarded = true;
      else if (room[i][j] === 2) isGuarded = false;
      else if (isGuarded) room[i][j] = 3;
    }
  }
};

const checkY = (room, m, n) => {
  let count = 0;
  for (let j = 0; j < n; j++) {
    let isGuarded = false;
    for (let i = 0; i < m; i++) {
      if (room[i][j] === 1) isGuarded = true;
      else if (room[i][j] === 2) isGuarded = false;
      else if (isGuarded) room[i][j] = 3;
    }
    isGuarded = false;
    for (let i = m - 1; i > -1; i--) {
      if (room[i][j] === 1) isGuarded = true;
      else if (room[i][j] === 2) isGuarded = false;
      else if (isGuarded) room[i][j] = 3;

      if (room[i][j] === 0) count++;
    }
  }
  return count;
};

var countUnguarded = function (m, n, guards, walls) {
  const room = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < guards.length; i++) {
    const x = guards[i][0];
    const y = guards[i][1];
    room[x][y] = 1;
  }
  for (let i = 0; i < walls.length; i++) {
    const x = walls[i][0];
    const y = walls[i][1];
    room[x][y] = 2;
  }
  checkX(room, m, n);
  return checkY(room, m, n);
};

const test = () => {
  const m = [4, 3];
  const n = [6, 3];
  const guards = [
    [
      [0, 0],
      [1, 1],
      [2, 3],
    ],
    [[1, 1]],
  ];
  const walls = [
    [
      [0, 1],
      [2, 2],
      [1, 4],
    ],
    [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
    ],
  ];
  m.forEach((_, i) => {
    console.log(countUnguarded(m[i], n[i], guards[i], walls[i]));
  });
};

test();
