/*
Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ingoring multiplicity.

Note that the strings are not gauranteed to only contain alphanumeric characters. 
The list you return can be in any order.
*/

function commonCharacters(strings) {
  // Write your code here.
  const lettersArray = [];
  let lettersObj;
  for (let i = 0; i < strings.length; i++) {
    lettersObj = new Set(strings[i]);
  }
  console.log(lettersObj);
  let itemCount = 0;
  for (const item of lettersObj.values()) {
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].indexOf(item) !== -1) {
        itemCount++;
        if (itemCount === strings.length) {
          lettersArray.push(item);
        }
      }
      if (i === strings.length - 1) {
        itemCount = 0;
      }
    }
  }
  return lettersArray;
}

// ---------- Test Case 1 ----------
console.log(commonCharacters(["abc", "bcd", "cbad"])); // [ 'b', 'c' ]
// ---------- Test Case 2 ----------
console.log(commonCharacters(["a"])); // [ 'a' ]
// ---------- Test Case 3 ----------
console.log(commonCharacters(["a", "b", "c"])); // []
// ---------- Test Case 4 ----------
console.log(commonCharacters(["aa", "aa"])); // [ 'a' ]
// ---------- Test Case 5 ----------
console.log(commonCharacters(["aaaa", "a"])); // [ 'a' ]
// ---------- Test Case 6 ----------
console.log(
  commonCharacters([
    "abcde",
    "aa",
    "foobar",
    "foobaz",
    "and this is a string",
    "aaaaaaaa",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea",
  ])
); // [ 'a' ]
// ---------- Test Case 7 ----------
console.log(
  commonCharacters([
    "abcdef",
    "fedcba",
    "abcefd",
    "aefbcd",
    "efadbc",
    "effffffffffffbcda",
    "eeeeeffffffbbbbbaaaaaccccdddd",
    "**************abdcef************",
  ])
); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// ---------- Test Case 8 ----------
console.log(
  commonCharacters([
    "ab&cdef!",
    "f!ed&cba",
    "a&bce!d",
    "ae&fb!cd",
    "efa&!dbc",
    "eff!&fff&fffffffbcda",
    "eeee!efff&fffbbbbbaaaaaccccdddd",
    "*******!***&****abdcef************",
    "*******!***&****a***********f*",
    "*******!***&****b***********c*",
  ])
); // [ '&', '!' ]
// ---------- Test Case 9 ----------
console.log(commonCharacters(["*abcd", "def*", "******d*****"])); // [ '*', 'd' ]
// ---------- Test Case 10 ----------
console.log(commonCharacters(["*abc!d", "de!f*", "**!!!****d*****"])); // [ '*', '!', 'd' ]
