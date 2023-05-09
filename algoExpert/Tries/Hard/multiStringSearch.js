/*
Write a function that takes in a big string and an array of small strings, all of which are smaller in length than the big string. 
The function should return an array of booleans, where each boolean represents whether the small string at that index in the array of small strings is contained in the big string.
Note that you can't use language-built-in string-matching methods.
*/

class SuffixTrie {
  constructor(array) {
    this.root = {};
    this.populateSuffixTrieFrom(array);
  }

  populateSuffixTrieFrom(array) {
    for (let i = 0; i < array.length; i++) {
      const currString = array[i];
      for (let j = 0; j < currString.length; j++) {
        this.insertSubStringStartingAt(j, currString);
      }
    }
  }

  insertSubStringStartingAt(j, string) {
    let node = this.root;
    for (let i = j; i < string.length; i++) {
      const currLetter = string[i];
      if (!node[currLetter]) {
        node[currLetter] = {};
      }
      node = node[currLetter];
    }
  }

  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!node[string[i]]) return false;
      node = node[string[i]];
    }
    return true;
  }
}

function multiStringSearch(bigString, smallStrings) {
  // Write your code here.
  const trie = new SuffixTrie(bigString.split(" "));

  return smallStrings.map((string) => trie.contains(string));
}

// ---------- Test Case 1 ----------
console.log("this is a big string", [
  "this",
  "yo",
  "is",
  "a",
  "bigger",
  "string",
  "kappa",
]);
// [
//   true,  false,
//   true,  true,
//   false, true,
//   false
// ]
// ---------- Test Case 2 ----------
console.log("abcdefghijklmnopqrstuvwxyz", [
  "abc",
  "mnopqr",
  "wyz",
  "no",
  "e",
  "tuuv",
]); // [ true, true, false, true, true, false ]
// ---------- Test Case 3 ----------
console.log("abcdefghijklmnopqrstuvwxyz", [
  "abcdefghijklmnopqrstuvwxyz",
  "abc",
  "j",
  "mnopqr",
  "pqrstuvwxyz",
  "xyzz",
  "defh",
]);
// [
//   true,  true,
//   true,  true,
//   true,  false,
//   false
// ]
// ---------- Test Case 4 ----------
console.log("hj!)!%Hj1jh8f1985n!)51", [
  "%Hj7",
  "8f198",
  "!)5",
  "!)!",
  "!!",
  "jh81",
  "j181hf",
]);
// [
//   false, true,
//   true,  true,
//   false, false,
//   false
// ]
// ---------- Test Case 5 ----------
console.log("Mary goes to the shopping center every week.", [
  "to",
  "Mary",
  "centers",
  "shop",
  "shopping",
  "string",
  "kappa",
]);
// [
//   true,  true,
//   false, true,
//   true,  false,
//   false
// ]
// ---------- Test Case 6 ----------
console.log("adcb akfkw afnmc fkadn vkaca jdaf dacb cdba cbda", [
  "abcd",
  "acbd",
  "adbc",
  "dabc",
  "cbda",
  "cabd",
  "cdab",
]);
// [
//   false, false,
//   false, false,
//   true,  false,
//   false
// ]
// ---------- Test Case 7 ----------
console.log("test testing testings tests testers test-takers", [
  "tests",
  "testatk",
  "testiing",
  "trsatii",
  "test - taker",
  "test",
]); // [ true, false, false, false, true, true ]
// ---------- Test Case 8 ----------
console.log(
  "ndbajwhfawkjljkfaopwdlaawjk dawkj awjkawkfjhkawk ahjwkjad jadfljawd",
  ["abc", "akwbc", "awbc", "abafac", "ajjfbc", "abac", "jadfl"]
);
// [
//   false, false,
//   false, false,
//   false, false,
//   true
// ]
// ---------- Test Case 9 ----------
console.log(
  "Is this particular test going to pass or is it going to fail? That is the question.",
  [
    "that",
    "the",
    "questions",
    "goes",
    "mountain",
    "passes",
    "passed",
    "going",
    "is",
  ]
);
// [
//   false, true,  false,
//   false, false, false,
//   false, true,  true
// ]
// ---------- Test Case 10 ----------
console.log("Everything in this test should fail.", [
  "everything",
  "inn",
  "that",
  "testers",
  "shall",
  "failure",
]); // [ false, false, false, false, false, false ]
// ---------- Test Case 11 ----------
console.log("this ain't a big string", ["this", "is", "yo", "a", "bigger"]); // [ true, true, false, true, false ]
// ---------- Test Case 12 ----------
console.log("bbbabb", ["bbabb"]); // [ true ]
