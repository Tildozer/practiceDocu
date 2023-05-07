/*
Write a function that takes in an array of strings and groups anagrams together.
Anagrams are strings made up of exactly the same letters, where order doesn't matter. 
For example, "cinema" and "iceman" are anagrams; 
    similarly, "foo" and "ofo" are anagrams.
Your function should return a list of anagram groups in no particular order.
*/

function groupAnagrams(words) {
  // Write your code here.
  const allAnagrams = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let anagrams = [word];
    word = _flipWord(word);
    for (let j = i + 1; j < words.length; j++) {
      let word2 = words[j];
      word2 = _flipWord(word2);
      if (word2 === word) {
        anagrams.push(words[j]);
        words.splice(j, 1);
        j += -1;
      }
    }
    allAnagrams.push(anagrams);
  }
  return allAnagrams;
}

function _flipWord(word) {
  return word
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

// ---------- Test Case 1 ----------
console.log(groupAnagrams(["yo", "act", "flop", "foo"]));
// [
//   [ 'yo', 'oy' ],
//   [ 'act', 'tac', 'cat' ],
//   [ 'flop', 'olfp' ],
//   [ 'foo' ]
// ]
// ---------- Test Case 2 ----------
console.log(groupAnagrams([])); // []
// ---------- Test Case 3 ----------
console.log(groupAnagrams(["test"])); // [ [ 'test' ] ]
// ---------- Test Case 4 ----------
console.log(groupAnagrams(["abc", "dabd"])); // [ [ 'abc', 'bca', 'cab' ], [ 'dabd', 'ddba' ] ]
// ---------- Test Case 5 ----------
console.log(groupAnagrams(["abc"])); // [ [ 'abc', 'cba', 'bca' ] ]
// ---------- Test Case 6 ----------
console.log(groupAnagrams(["zxc", "asd", "weq"])); // [ [ 'zxc', 'xcz' ], [ 'asd', 'sda' ], [ 'weq', 'qwe' ] ]
// ---------- Test Case 7 ----------
console.log(groupAnagrams(["cinema", "a", "flop", "meacyne"]));
// [
//   [ 'cinema', 'iceman' ],
//   [ 'a' ],
//   [ 'flop', 'lofp', 'olfp' ],
//   [ 'meacyne' ]
// ]
// ---------- Test Case 8 ----------
console.log(groupAnagrams(["abc", "abe", "abf", "abg"])); // [ [ 'abc' ], [ 'abe' ], [ 'abf' ], [ 'abg' ] ]
// ---------- Test Case 9 ----------
console.log(groupAnagrams(["aaa", "a"])); // [ [ 'aaa' ], [ 'a' ] ]
// ---------- Test Case 10 ----------
console.log(groupAnagrams(["bob", "boo"])); // [ [ 'bob' ], [ 'boo' ] ]
// ---------- Test Case 11 ----------
console.log(groupAnagrams(["ill", "duh"])); // [ [ 'ill' ], [ 'duh' ] ]
// ---------- Test Case 12 ----------
console.log(groupAnagrams(["yo", "zn"])); // [ [ 'yo', 'oy' ], [ 'zn' ] ]
// ---------- Test Case 13 ----------
console.log(groupAnagrams(["yyo", "yo"])); // [ [ 'yyo' ], [ 'yo' ] ]
// ---------- Test Case 14 ----------
console.log(groupAnagrams(["aca", "bba"])); // [ [ 'aca' ], [ 'bba' ] ]
