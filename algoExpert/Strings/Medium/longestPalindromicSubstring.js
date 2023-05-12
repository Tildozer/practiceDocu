/*
Write a function that, given a string, returns its longest palindromic substring.
A palindrome is defined as a string that's written the same forward and backward. 
Note that single-character strings are palindromes.
You can assume that there will only be one longest palindromic substring.
*/

function longestPalindromicSubstring(string) {
  if (string.length === 1) return string;
  // Write your code here.
  let longest = [0, 1];

  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromicSubstrings(string, i - 1, i + 1);
    const even = getLongestPalindromicSubstrings(string, i - 1, i);
    let oddAmount = odd[1] - odd[0];
    let evenAmount = even[1] - even[0];
    let currAmount = longest[1] - longest[0];
    if (currAmount < oddAmount || currAmount < evenAmount) {
      if (oddAmount > evenAmount) {
        longest = odd;
      } else {
        longest = even;
      }
    }
  }
  return string.slice(longest[0], longest[1]);
}

function getLongestPalindromicSubstrings(string, left, right) {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) {
      break;
    }
    left--;
    right++;
  }
  return [left + 1, right];
}

// ---------- Test Case 1 ----------
console.log(longestPalindromicSubsting("abaxyzzyxf")); // ' xyzzyx '
// ---------- Test Case 2 ----------
console.log(longestPalindromicSubsting("a")); //
// ---------- Test Case 3 ----------
console.log(longestPalindromicSubsting("it's highnoon")); // ' noon '
// ---------- Test Case 4 ----------
console.log(longestPalindromicSubsting("noon high it is")); // ' noon '
// ---------- Test Case 5 ----------
console.log(longestPalindromicSubsting("abccbait's highnoon")); // ' abccba '
// ---------- Test Case 6 ----------
console.log(longestPalindromicSubsting("abcdefgfedcbazzzzzzzzzzzzzzzzzzzz")); // ' zzzzzzzzzzzzzzzzzzzz '
// ---------- Test Case 7 ----------
console.log(longestPalindromicSubsting("abcdefgfedcba")); // ' abcdefgfedcba '
// ---------- Test Case 8 ----------
console.log(longestPalindromicSubsting("abcdefghfedcbaa")); // ' aa '
// ---------- Test Case 9 ----------
console.log(longestPalindromicSubsting("abcdefggfedcba")); // ' abcdefggfedcba '
// ---------- Test Case 10 ----------
console.log(longestPalindromicSubsting("zzzzzzz2345abbbba5432zzbbababa")); // ' zz2345abbbba5432zz '
// ---------- Test Case 11 ----------
console.log(longestPalindromicSubsting("z234a5abbbba54a32z")); // ' 5abbbba5 '
// ---------- Test Case 12 ----------
console.log(longestPalindromicSubsting("z234a5abbba54a32z")); // ' 5abbba5 '
// ---------- Test Case 13 ----------
console.log(longestPalindromicSubsting("ab12365456321bb")); // ' b12365456321b '
// ---------- Test Case 14 ----------
console.log(longestPalindromicSubsting("aca")); // ' aca '
