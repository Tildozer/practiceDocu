/*
It's photo day at the local school, and you're the photographer assigned to take class photos. 
The class that you'll be that you'll be on has an even number of students, and all these students are wearind red or blue shirts. 
In fact, exactly half of the class is wearing red shirts, and the other hald is wearing blue shirts.
You're responsible for arranging the students in two rows before taking the photo.
Each row should contain the same number of the students and should adhere to the following guidline:
    * All student wearing red shirts must be in the same row.
    * All students wearing blue shirts must be in the same row.
    * Each student in the back row must be strictly taller than the student directly in front of them in the front row.
You're given two input arrays: one containing the heights of all the students with red shirts and another on containing the heights of all the students with blue shirts.
These arrays will always have the same length, and each height will be a positive integer. Write a function that returns wheather or not a class photo that follows the stated gudlines can be take.

Note: you can assume that each calss has at least 2 students.
*/

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  const sortedRedShirts = redShirtHeights.sort((a, b) => a - b);
  const sortedBlueShirts = blueShirtHeights.sort((a, b) => a - b);
  let backrow = "";
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (!backrow) {
      backrow = sortedBlueShirts[i] < sortedRedShirts[i] ? "red" : "blue";
    }
    if (sortedBlueShirts[i] === sortedRedShirts[i]) {
      return false;
    }
    if (backrow === "blue" && sortedBlueShirts[i] < sortedRedShirts[i]) {
      return false;
    }
    if (backrow === "red" && sortedBlueShirts[i] > sortedRedShirts[i]) {
      return false;
    }
  }
  return true;
}

// ---------- Test Case 1 ----------
console.log([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]); // true
// ---------- Test Case 2 ----------
console.log([6, 9, 2, 4, 5], [5, 8, 1, 3, 4]); // true
// ---------- Test Case 3 ----------
console.log([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]); // false
// ---------- Test Case 4 ----------
console.log([6], [6]); // false
// ---------- Test Case 5 ----------
console.log([126], [125]); // true
// ---------- Test Case 6 ----------
console.log([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]); // true
// ---------- Test Case 7 ----------
console.log([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3]); // false
// ---------- Test Case 8 ----------
console.log([1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2]); // true

// ---------- Test Case 9 ----------
console.log([125], [126]); // true
// ---------- Test Case 10 ----------
console.log([19, 2, 4, 6, 2, 3, 1, 1, 4], [21, 5, 4, 4, 4, 4, 4, 4, 4]); // false
// ---------- Test Case 11 ----------
console.log([19, 19, 21, 1, 1, 1, 1, 1], [20, 5, 4, 4, 4, 4, 4, 4]); // false
// ---------- Test Case 12 ----------
console.log([3, 5, 6, 8, 2], [2, 4, 7, 5, 1]); // true
// ---------- Test Case 13 ----------
console.log([3, 5, 6, 8, 2, 1], [2, 4, 7, 5, 1, 6]); // false
// ---------- Test Case 14 ----------
console.log([4, 5], [5, 4]); // false
// ---------- Test Case 15 ----------
console.log([5, 6][(5, 4)]); // true
