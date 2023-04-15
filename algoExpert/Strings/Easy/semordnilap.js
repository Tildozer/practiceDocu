/*
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. 
For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".
The order of the returned pairs and the order of the strings within each pair does not matter.
*/

function semordnilap(words) {
  // Write your code here.
  const matches = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].length === words[j].length) {
        if (reverseString(words[i]) === words[j])
          matches.push([words[i], words[j]]);
      }
    }
  }
  return matches;
}

function reverseString(str) {
  if (str === "") {
    // This is the terminal case that will end the recursion
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// ---------- Test Case 1 ----------
console.log(semordnilap([])); // []
// ---------- Test Case 2 ----------
console.log(semordnilap(["aaa", "bbbb"])); // []
// ---------- Test Case 3 ----------
console.log(semordnilap(["dog", "god"])); // [ [ 'dog', 'god' ] ]
// ---------- Test Case 4 ----------
console.log(semordnilap(["dog", "hello", "god"])); // [ [ 'dog', 'god' ] ]
// ---------- Test Case 5 ----------
console.log(semordnilap(["dog", "desserts", "god", "stressed"])); // [ [ 'dog', 'god' ], [ 'desserts', 'stressed' ] ]
// ---------- Test Case 6 ----------
console.log(
  semordnilap(["dog", "hello", "desserts", "test", "god", "stressed"])
); // [ [ 'dog', 'god' ], [ 'desserts', 'stressed' ] ]
// ---------- Test Case 7 ----------
console.log(semordnilap(["abcde", "edcba", "edbc", "edb", "cbde", "abc"])); // [ [ 'abcde', 'edcba' ], [ 'edbc', 'cbde' ] ]
// ---------- Test Case 8 ----------
console.log(semordnilap(["abcde", "bcd", "dcb", "edcba", "aaa"])); // [ [ 'abcde', 'edcba' ], [ 'bcd', 'dcb' ] ]
// ---------- Test Case 9 ----------
console.log(
  semordnilap(["abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba"])
); // [ [ 'abcdefghijk', 'kjihgfedcba' ] ]
// ---------- Test Case 10 ----------
console.log(
  semordnilap([
    "liver",
    "dog",
    "hello",
    "desserts",
    "evil",
    "test",
    "god",
    "stressed",
    "racecar",
    "palindromes",
    "semordnilap",
    "abcd",
    "live",
  ])
);
// [
//   [ 'dog', 'god' ],
//   [ 'desserts', 'stressed' ],
//   [ 'evil', 'live' ],
//   [ 'palindromes', 'semordnilap' ]
// ]
