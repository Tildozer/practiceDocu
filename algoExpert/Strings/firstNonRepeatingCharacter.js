/*
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.
The first non-repeating character is the first character in a string that occurs only once.
If the input string doesn't have any non-repeating characters, your function should return -1.
*/

function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let charObj = {};
  for (let i = 0; i < string.length; i++) {
    if (!charObj[string[i]]) {
      charObj[string[i]] = 1;
    } else {
      charObj[string[i]]++;
    }
  }
  for (let item in charObj) {
    if (charObj[item] === 1) {
      return string.indexOf(item);
    }
  }
  return -1;
}

//   ---------- Test Case 1 ----------
console.log(firstNonRepeatingCharacter("abcdcaf")); // 1
// ---------- Test Case 2 ----------
console.log(firstNonRepeatingCharacter("faadabcbbebdf")); // 6
// ---------- Test Case 3 ----------
console.log(firstNonRepeatingCharacter("a")); // 0
// ---------- Test Case 4 ----------
console.log(firstNonRepeatingCharacter("ab")); // 0
// ---------- Test Case 5 ----------
console.log(firstNonRepeatingCharacter("abc")); // 0
// ---------- Test Case 6 ----------
console.log(firstNonRepeatingCharacter("abac")); // 1
// ---------- Test Case 7 ----------
console.log(firstNonRepeatingCharacter("ababac")); // 5
// ---------- Test Case 8 ----------
console.log(firstNonRepeatingCharacter("ababacc")); // -1
// ---------- Test Case 9 ----------
console.log(firstNonRepeatingCharacter("lmnopqldsafmnopqsa")); // 7
// ---------- Test Case 10 ----------
console.log(
  firstNonRepeatingCharacter(
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
  )
); // 25
// ---------- Test Case 11 ----------
console.log(
  firstNonRepeatingCharacter(
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  )
); // -1
// ---------- Test Case 12 ----------
console.log("firstNonRepeatingCharacter"()); // -1
// ---------- Test Case 13 ----------
console.log(firstNonRepeatingCharacter("ggyllaylacrhdzedddjsc")); // 10
// ---------- Test Case 14 ----------
console.log(
  firstNonRepeatingCharacter(
    "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh"
  )
); // -1
// ---------- Test Case 15 ----------
console.log(firstNonRepeatingCharacter("aabbccddeeff")); // -1
