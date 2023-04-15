/*
Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and backward. 
Note that single-character strings are palindromes.
*/

function isPalindrome(string) {
  // Write your code here.
  let endPoint = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[endPoint]) {
      return false;
    }
    endPoint += -1;
  }
  return true;
}

// ---------- Test Case 1 ----------
console.log(isPalindrome("abcdcba")); // true
// ---------- Test Case 2 ----------
console.log(isPalindrome("a")); // true
// ---------- Test Case 3 ----------
console.log(isPalindrome("ab")); // false
// ---------- Test Case 4 ----------
console.log(isPalindrome("aba")); // true
// ---------- Test Case 5 ----------
console.log(isPalindrome("abb")); // false
// ---------- Test Case 6 ----------
console.log(isPalindrome("abba")); // true
// ---------- Test Case 7 ----------
console.log(isPalindrome("abcdefghhgfedcba")); // true
// ---------- Test Case 8 ----------
console.log(isPalindrome("abcdefghihgfedcba")); // true
// ---------- Test Case 9 ----------
console.log(isPalindrome("abcdefghihgfeddcba")); // false
