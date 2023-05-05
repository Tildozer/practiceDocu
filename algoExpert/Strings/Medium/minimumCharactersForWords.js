/*
Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.
For example, the characters ["y", "p", "o", "u"] are needed to form the words ["your", "you", "or", "yo"]
Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.
*/
function minimumCharactersForWords(words) {
  // Write your code here.
  const letters = [];
  let currentMostNeeded = {};
  for (let word of words) {
    currentMostNeeded = _addLetters(letters, word, currentMostNeeded);
  }
  return letters;
}

function _addLetters(letters, word, currentMost) {
  let lettersNeeded = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!lettersNeeded[letter]) {
      lettersNeeded[letter] = 1;
    } else {
      lettersNeeded[letter] += 1;
    }
  }
  return _setNewMost(letters, lettersNeeded, currentMost);
}

function _setNewMost(letters, lettersNeeded, currentMost) {
  for (let letter in lettersNeeded) {
    const amountNeeded = lettersNeeded[letter];
    const totalNeeded = currentMost[letter];
    if (!totalNeeded) {
      currentMost[letter] = amountNeeded;
      for (let i = 0; i < amountNeeded; i++) {
        letters.push(letter);
      }
    } else {
      if (amountNeeded > totalNeeded) {
        for (let i = 0; i < amountNeeded - totalNeeded; i++) {
          letters.push(letter);
        }
        currentMost[letter] = amountNeeded;
      }
    }
  }
  return currentMost;
}

//   ---------- Test Case 1 ----------
console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);
// [
//   't', 'h', 'i', 's',
//   't', 'a', 'd', 'd',
//   'e', 'e', 'm', '!'
// ]
// ---------- Test Case 2 ----------
console.log(minimumCharactersForWords(["a", "abc", "ab", "boo"]));
// [ 'a', 'b', 'c', 'o', 'o' ]
// ---------- Test Case 3 ----------
console.log(minimumCharactersForWords(["a"])); // [ 'a' ]
// ---------- Test Case 4 ----------
console.log(minimumCharactersForWords(["abc", "ab", "b", "bac", "c"])); // [ 'a', 'b', 'c' ]
// ---------- Test Case 5 ----------
console.log(minimumCharactersForWords(["!!!2", "234", "222", "432"]));
// [
//   '2', '!', '!',
//   '!', '3', '4',
//   '2', '2'
// ]
// ---------- Test Case 6 ----------
console.log(
  minimumCharactersForWords([
    "this",
    "that",
    "they",
    "them",
    "their",
    "there",
    "time",
    "is",
  ])
);
// [
//   't', 'h', 'i', 's',
//   't', 'a', 'e', 'y',
//   'm', 'r', 'e'
// ]
// ---------- Test Case 7 ----------
console.log(minimumCharactersForWords(["tim", "is", "great"]));
// [
//   't', 'i', 'm',
//   's', 'g', 'r',
//   'e', 'a'
// ]
// ---------- Test Case 8 ----------
console.log(
  minimumCharactersForWords(["abc", "bavcc", "aaaa", "cde", "efg", "gead"])
);
// [
//   'a', 'b', 'c', 'v',
//   'c', 'a', 'a', 'a',
//   'd', 'e', 'f', 'g'
// ]
// ---------- Test Case 9 ----------
console.log(minimumCharactersForWords(["a", "a", "a"])); // [ 'a' ]
// ---------- Test Case 10 ----------
console.log(
  minimumCharactersForWords([
    "them",
    "they",
    "that",
    "that",
    "yes",
    "yo",
    "no",
    "boo",
    "you",
    "okay",
    "too",
  ])
);
// [
//   't', 'h', 'e', 'm',
//   'y', 't', 'a', 's',
//   'o', 'n', 'b', 'o',
//   'u', 'k'
// ]
// ---------- Test Case 11 ----------
console.log(
  minimumCharactersForWords(["cta", "cat", "tca", "tac", "a", "c", "t"])
); // [ 'c', 't', 'a' ]
// ---------- Test Case 12 ----------
console.log(
  minimumCharactersForWords(["my", "coding", "skills", "are", "great"])
);
// [
//   'm', 'y', 'c', 'o', 'd',
//   'i', 'n', 'g', 's', 's',
//   'k', 'l', 'l', 'a', 'r',
//   'e', 't'
// ]
// ---------- Test Case 13 ----------
console.log(minimumCharactersForWords([])); // []
// ---------- Test Case 14 ----------
console.log(
  minimumCharactersForWords(["168712hn3;nlsdjhahjdksaxa097918@#$RT%T^&*()_"])
);
// [
//   '0', '1', '1', '1', '2', '3', '6',
//   '7', '7', '8', '8', '9', '9', 'h',
//   'h', 'h', 'n', 'n', ';', 'l', 's',
//   's', 'd', 'd', 'j', 'j', 'a', 'a',
//   'a', 'k', 'x', '@', '#', '$', 'R',
//   'T', 'T', '%', '^', '&', '*', '(',
//   ')', '_'
// ]

// ---------- Test Case 15 ----------
console.log(minimumCharactersForWords(["cat", "cAt", "tAc", "Act", "Cat"]));
// [ 'c', 'a', 't', 'A', 'C' ]
// ---------- Test Case 16 ----------
console.log(
  minimumCharactersForWords(["Abc", "baVcc", "aaaa", "cdeE", "efg", "gead"])
);
// [
//   'A', 'b', 'c', 'a',
//   'V', 'c', 'a', 'a',
//   'a', 'd', 'e', 'E',
//   'f', 'g'
// ]
// ---------- Test Case 17 ----------
console.log(
  minimumCharactersForWords([
    "mississippi",
    "piper",
    "icing",
    "ice",
    "pickle",
    "piping",
    "pie",
    "pi",
    "sassy",
    "serpent",
    "python",
    "ascii",
    "sister",
    "mister",
  ])
);
// [
//   'm', 'i', 'i', 'i', 'i',
//   's', 's', 's', 's', 'p',
//   'p', 'e', 'r', 'c', 'n',
//   'g', 'k', 'l', 'a', 'y',
//   'e', 't', 'h', 'o'
// ]
