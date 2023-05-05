/*
Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order. 
For example, given the string "tim is great", your function should return "great is tim".
For this problem, a word can contain special characters, punctuation, and numbers. 
The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. 
For example, given the string "whitespaces     4" you would be expected to return "4    whitespaces"
Note that you're not allowed to to use any built-in split or reverse methods/functions.
However, you are allowed to use a built-in join method/function.
Also note that the input string isn't guaranteed to always contain words.
*/

function reverseWordsInString(string) {
  // Write your code here.
  const wordArray = string.split(" ");
  let newString = "";
  for (let i = wordArray.length - 1; i > -1; i--) {
    newString += `${wordArray[i]}`;
    if (i !== 0) {
      newString += " ";
    }
  }
  return newString;
}

// ---------- Test Case 1 ----------
console.log(reversWordsInString("AlgoExpert is the best!")); // best! the is AlgoExpert
// ---------- Test Case 2 ----------
console.log(reversWordsInString("Reverse These Words")); // Words These Reverse
// ---------- Test Case 3 ----------
console.log(reversWordsInString("..H,, hello 678")); // 678 hello ..H,,
// ---------- Test Case 4 ----------
console.log(reversWordsInString("this this words this this this words this")); // this words this this this words this this
// ---------- Test Case 5 ----------
console.log(reversWordsInString("1 12 23 34 56")); // 56 34 23 12 1
// ---------- Test Case 6 ----------
console.log(reversWordsInString("APPLE PEAR PLUM ORANGE")); // ORANGE PLUM PEAR APPLE
// ---------- Test Case 7 ----------
console.log(reversWordsInString("this-is-one-word")); // this-is-one-word
// ---------- Test Case 8 ----------
console.log(reversWordsInString("a")); // a
// ---------- Test Case 9 ----------
console.log(reversWordsInString("ab")); // ab
// ---------- Test Case 10 ----------
console.log(reversWordsInString("")); //
// ---------- Test Case 11 ----------
console.log(
  reversWordsInString(
    "algoexpert is the best platform to use to prepare for coding interviews!"
  )
); // interviews! coding for prepare to use to platform best the is algoexpert
// ---------- Test Case 12 ----------
console.log(reversWordsInString("words, separated, by, commas")); // commas by, separated, words,
// ---------- Test Case 13 ----------
console.log(
  reversWordsInString("this      string     has a     lot of   whitespace")
); // whitespace   of lot     a has     string      this
// ---------- Test Case 14 ----------
console.log(reversWordsInString("a ab a")); // a ab a
// ---------- Test Case 15 ----------
console.log(reversWordsInString("test        ")); // test
// ---------- Test Case 16 ----------
console.log(reversWordsInString(" ")); //" "
