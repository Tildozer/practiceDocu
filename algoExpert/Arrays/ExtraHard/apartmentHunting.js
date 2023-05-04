/*
You're looking to move into a new apartment on specific street, and you're given a list of contiguous blocks on that street where each block contains an apartment that you could move into.
You also have a list of requirements: 
    a list of buildings that are important to you. 
    For instance, you might value having a school and a gym near your apartment. 
    The list of blocks that you have contains information at every block about all of the buildings that are present and absent at the block in question. 
    For instance, for every block, you might know whether a school, a pool, an office, and a gym are present.
In order to optimize your life, you want to pick an apartment block such that you minimize the farthest distance you'd have to walk from your apartment to reach any of your required buildings.
Write a function that takes in a list of contiguous blocks on a specific street and a list of your required buildings and that returns the location (the index) of the block that's most optimal for you.
If there are multiple most optimal blocks, your function can return the index of any one of them.
*/
function apartmentHunting(blocks, reqs) {
  // Write your code here.
  let best = Infinity;
  let idx = -1;
  for (let i = 0; i < blocks.length; i++) {
    let farthestDist = 0;
    for (let req of reqs) {
      if (blocks[i][req]) {
        farthestDist = Math.max(0, farthestDist);
      } else {
        farthestDist = Math.max(
          _findDistance(req, blocks, i - 1, i + 1, 0),
          farthestDist
        );
      }
    }
    if (farthestDist < best) {
      best = farthestDist;
      idx = i;
    }
  }
  return idx;
}

function _findDistance(req, blocks, left, right, distance) {
  if (right >= blocks.length && left < 0) return distance;
  if (left > 0) {
    if (blocks[left][req]) {
      return distance;
    }
  }
  if (right < blocks.length) {
    if (blocks[right][req]) {
      return distance;
    }
  }
  return _findDistance(req, blocks, left - 1, right + 1, distance + 1);
}

// ---------- Test Case 1 ----------
console.log(
  apartmentHunting(
    [
      { gym: false, school: true, store: false },
      { gym: true, school: false, store: false },
      { gym: true, school: true, store: false },
      { gym: false, school: true, store: false },
      { gym: false, school: true, store: true },
    ],
    ["gym", "school", "store"]
  )
); // 3
// ---------- Test Case 2 ----------
console.log(
  apartmentHunting(
    [
      { gym: false, office: true, school: true, store: false },
      { gym: true, office: false, school: false, store: false },
      { gym: true, office: false, school: true, store: false },
      { gym: false, office: false, school: true, store: false },
      { gym: false, office: false, school: true, store: true },
    ],
    ["gym", "office", "school", "store"]
  )
); // 2
// ---------- Test Case 3 ----------
console.log(
  apartmentHunting(
    [
      { gym: false, office: true, school: true, store: false },
      { gym: true, office: false, school: false, store: false },
      { gym: true, office: false, school: true, store: false },
      { gym: false, office: false, school: true, store: false },
      { gym: false, office: false, school: true, store: false },
      { gym: false, office: false, school: true, store: true },
    ],
    ["gym", "office", "school", "store"]
  )
); // 2
// ---------- Test Case 4 ----------
console.log(
  apartmentHunting(
    [
      {
        foo: true,
        gym: false,
        kappa: false,
        office: true,
        school: true,
        store: false,
      },
      {
        foo: true,
        gym: true,
        kappa: false,
        office: false,
        school: false,
        store: false,
      },
      {
        foo: true,
        gym: true,
        kappa: false,
        office: false,
        school: true,
        store: false,
      },
      {
        foo: true,
        gym: false,
        kappa: false,
        office: false,
        school: true,
        store: false,
      },
      {
        foo: true,
        gym: true,
        kappa: false,
        office: false,
        school: true,
        store: false,
      },
      {
        foo: true,
        gym: false,
        kappa: false,
        office: false,
        school: true,
        store: true,
      },
    ],
    ["gym", "school", "store"]
  )
); // 4

// ---------- Test Case 5 ----------
console.log(
  apartmentHunting(
    [
      { gym: true, school: true, store: false },
      { gym: false, school: false, store: false },
      { gym: false, school: true, store: false },
      { gym: false, school: false, store: false },
      { gym: false, school: false, store: true },
      { gym: true, school: false, store: false },
      { gym: false, school: false, store: false },
      { gym: false, school: false, store: false },
      { gym: false, school: false, store: false },
      { gym: false, school: true, store: false },
    ],
    ["gym", "school", "store"]
  )
); // 3
// ---------- Test Case 6 ----------
console.log(
  apartmentHunting(
    [
      { gym: true, pool: false, school: true, store: false },
      { gym: false, pool: false, school: false, store: false },
      { gym: false, pool: false, school: true, store: false },
      { gym: false, pool: false, school: false, store: false },
      { gym: false, pool: false, school: false, store: true },
      { gym: true, pool: false, school: false, store: false },
      { gym: false, pool: false, school: false, store: false },
      { gym: false, pool: false, school: false, store: false },
      { gym: false, pool: false, school: false, store: false },
      { gym: false, pool: false, school: true, store: false },
      { gym: false, pool: true, school: false, store: false },
    ],
    ["gym", "pool", "school", "store"]
  )
); // 7
// ---------- Test Case 7 ----------
console.log(
  apartmentHunting(
    [
      { gym: true, office: false, pool: false, school: true, store: false },
      {
        gym: false,
        office: false,
        pool: false,
        school: false,
        store: false,
      },
      { gym: false, office: true, pool: false, school: true, store: false },
      {
        gym: false,
        office: true,
        pool: false,
        school: false,
        store: false,
      },
      {
        gym: false,
        office: false,
        pool: false,
        school: false,
        store: true,
      },
      { gym: true, office: true, pool: false, school: false, store: false },
      {
        gym: false,
        office: false,
        pool: true,
        school: false,
        store: false,
      },
      {
        gym: false,
        office: false,
        pool: false,
        school: false,
        store: false,
      },
      {
        gym: false,
        office: false,
        pool: false,
        school: false,
        store: false,
      },
      {
        gym: false,
        office: false,
        pool: false,
        school: true,
        store: false,
      },
      {
        gym: false,
        office: false,
        pool: true,
        school: false,
        store: false,
      },
    ],
    ["gym", "pool", "school", "store"]
  )
); // 4
