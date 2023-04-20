/*
You walk into a theatre you're about to see a show in. 
The usher within the theatre walks you to your row and mentions you're allowed to sit anywhere within the given row. 
Naturally you'd like to sit in the seat that gives you the most space. 
You also would prefer this space to be evenly distributed on either side of you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three seats).
Given the theatre row represented as an integer array, return the seat index of where you should sit. 
Ones represent occupied seats and zeroes represent empty seats.
You may assume that someone is always sitting in the first and last seat of the row.
Whenever there are two equally good seats, you should sit in the seat with the lower index. 
If there is no seat to sit in, return -1.
The given array will always have a length of at least one and contain only ones and zeroes.
*/

// MY SOLUTION

function bestSeat(seats) {
  // Write your code here.
  let mostOpenSeats = { middleIdx: -1, openSeats: -1 };
  for (let i = 1; i < seats.length - 1; i++) {
    if (seats[i] === 0) {
      const openSeats = _findOpenSeats(seats, i, 0);
      if (openSeats > mostOpenSeats.openSeats) {
        (mostOpenSeats.middleIdx = i + Math.ceil(openSeats / 2) - 1),
          (mostOpenSeats.openSeats = openSeats);
      }
      i += openSeats - 1;
    }
  }
  console.log(seats, "\n", mostOpenSeats.middleIdx);
  return mostOpenSeats.middleIdx;
}

function _findOpenSeats(seats, i, openSeats) {
  if (seats[i] === 0) {
    return _findOpenSeats(seats, i + 1, openSeats + 1);
  } else {
    return openSeats;
  }
}

// ---------- Test Case 1 ----------
console.log(bestSeat([1])); //  -1
// ---------- Test Case 2 ----------
console.log(bestSeat([1, 0, 1, 0, 0, 0, 1])); // 4;
// ---------- Test Case 3 ----------
console.log(bestSeat([1, 0, 1])); //  1
// ---------- Test Case 4 ----------
console.log(bestSeat([1, 0, 0, 1])); //  1
// ---------- Test Case 5 ----------
console.log(bestSeat([1, 1, 1])); //  -1
// ---------- Test Case 6 ----------
console.log(bestSeat([1, 0, 0, 1, 0, 0, 1])); // 1;
// ---------- Test Case 7 ----------
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1])); // 3;
// ---------- Test Case 8 ----------
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1])); // 4;
// ---------- Test Case 9 ----------
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1])); // 4;
// ---------- Test Case 10 ----------
console.log(
  bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
); // 13;
// ---------- Test Case 11 ----------
console.log(
  bestSeat([
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 1,
  ])
); // 13;

// ---------- Test Case 12 ----------
console.log(bestSeat([1, 0, 0, 0, 1, 0, 0, 0, 0, 1])); // 6;
// ---------- Test Case 13 ----------
console.log(bestSeat([1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1])); // 3;
// ---------- Test Case 14 ----------
console.log(bestSeat([1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1])); // 5;
