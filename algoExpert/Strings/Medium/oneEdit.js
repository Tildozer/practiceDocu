/*
You're given two strings stringOne and stringTwo. 
Write a function that determines if these two strings can be made equal using only one edit.
There are 3 possible edits:
• Replace: One character in one string is swapped for a different character.
• Add: One character is added at any index in one string.
• Remove: One character is removed at any index in one string.
Note that both strings will contain at least one character. 
If the strings are the same, your function should return true.
*/

function oneEdit(stringOne, stringTwo) {
  // Write your code here.
  const diff = Math.abs(stringOne.length - stringTwo.length);
  if (diff > 1) {
    return false;
  } else if (diff === 1) {
    let longestString;
    let smallestString;
    if (stringOne.length > stringTwo.length) {
      longestString = stringOne;
      smallestString = stringTwo;
    } else {
      longestString = stringTwo;
      smallestString = stringOne;
    }
    let edited = false;
    for (let i = 0; i < longestString.length; i++) {
      if (smallestString[i] !== longestString[i]) {
        if (edited) {
          return false;
        }
        edited = true;
        smallestString = `${smallestString.slice(0, i)}${longestString.slice(
          i,
          i + 1
        )}${smallestString.slice(i)}`;
      }
    }
  } else {
    let wrongLetter = 0;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        wrongLetter++;
        if (wrongLetter > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

//   ---------- Test Case 1 ----------
console.log(oneEdit("a", "a")); // true
// ---------- Test Case 2 ----------
console.log(oneEdit("aaa", "aaa")); // true
// ---------- Test Case 3 ----------
console.log(oneEdit("a", "a")); // true
// ---------- Test Case 4 ----------
console.log(oneEdit("ab", "ab")); // true
// ---------- Test Case 5 ----------
console.log(oneEdit("abc", "abc")); // false
// ---------- Test Case 6 ----------
console.log(oneEdit("ab", "ab")); // true
// ---------- Test Case 7 ----------
console.log(oneEdit("b", "b")); // true
// ---------- Test Case 8 ----------
console.log(oneEdit("bb", "bb")); // false
// ---------- Test Case 9 ----------
console.log(oneEdit("a", "a")); // true
// ---------- Test Case 10 ----------
console.log(oneEdit("bb", "bb")); // true
// ---------- Test Case 11 ----------
console.log(oneEdit("ab", "ab")); // true
// ---------- Test Case 12 ----------
console.log(oneEdit("hello", "hello")); // true
// ---------- Test Case 13 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 14 ----------
console.log(oneEdit("hello", "hello")); // true
// ---------- Test Case 15 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 16 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 17 ----------
console.log(oneEdit("hello", "hello")); // true
// ---------- Test Case 18 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 19 ----------
console.log(oneEdit("hello", "hello")); // true
// ---------- Test Case 20 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 21 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 22 ----------
console.log(oneEdit("hello", "hello")); // false
// ---------- Test Case 23 ----------
console.log(oneEdit("helo", "helo")); // false
// ---------- Test Case 24 ----------
console.log(
  oneEdit("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
); // true
// ---------- Test Case 25 ----------
console.log(oneEdit("bcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyz")); // true
// ---------- Test Case 26 ----------
console.log(oneEdit("bcdefgijklmnopqrstuvwxyz", "bcdefgijklmnopqrstuvwxyz")); // false
// ---------- Test Case 27 ----------
console.log(oneEdit("bcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyz")); // true
// ---------- Test Case 28 ----------
console.log(oneEdit("bcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyz")); // false
// ---------- Test Case 29 ----------
console.log(oneEdit("bcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyz")); // false
// ---------- Test Case 30 ----------
console.log(oneEdit("bcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyz")); // false
// ---------- Test Case 31 ----------
console.log(
  oneEdit("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
); // true
// ---------- Test Case 32 ----------
console.log(
  oneEdit("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
); // true
// ---------- Test Case 33 ----------
console.log(
  oneEdit("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
); // true
