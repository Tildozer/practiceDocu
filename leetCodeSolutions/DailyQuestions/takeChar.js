/*
You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, you may take either the leftmost character of s, or the rightmost character of s.

Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

 

Example 1:

Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.

Example 2:

Input: s = "a", k = 1
Output: -1
Explanation: It is not possible to take one 'b' or 'c' so return -1.

*/

var takeCharacters = function (s, k) {
  const letters = { a: 0, b: 0, c: 0 };
  for (let i = 0; i < s.length; i++) {
    letters[s[i]]++;
  }

  if (Math.min(...Object.values(letters)) < k) return -1;

  let sum = Infinity;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    letters[s[i]]--;
    while (Math.min(...Object.values(letters)) < k) {
      letters[s[l]]++;
      l++;
    }
    sum = Math.min(sum, s.length - (i - l + 1));
  }
  return sum;
};

const test = () => {
  const strings = ["aabaaaacaabc", "a"];
  const ks = [2, 1];
  strings.forEach((string, i) => {
    console.log(takeCharacters(string, ks[i]));
  });
};
