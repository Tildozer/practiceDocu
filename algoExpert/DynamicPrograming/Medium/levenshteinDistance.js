/*
Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.
There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.
*/

function levenshteinDistance(str1, str2) {
  // Write your code here.
  let edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    let row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i][j - 1], edits[i - 1][j]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

// ---------- Test Case 1 ----------
console.log(levenshteinDistance("abc", "yabd")); // 2
// ---------- Test Case 2 ----------
console.log(levenshteinDistance("", "")); // 0
// ---------- Test Case 3 ----------
console.log(levenshteinDistance("", "abc")); // 3
// ---------- Test Case 4 ----------
console.log(levenshteinDistance("abc", "abc")); // 0
// ---------- Test Case 5 ----------
console.log(levenshteinDistance("abc", "abx")); // 1
// ---------- Test Case 6 ----------
console.log(levenshteinDistance("abc", "abcx")); // 1
// ---------- Test Case 7 ----------
console.log(levenshteinDistance("abc", "yabcx")); // 2
// ---------- Test Case 8 ----------
console.log(levenshteinDistance("algoexpert", "algozexpert")); // 1
// ---------- Test Case 9 ----------
console.log(levenshteinDistance("abcdefghij", "1234567890")); // 10
// ---------- Test Case 10 ----------
console.log(levenshteinDistance("abcdefghij", "a234567890")); // 9
// ---------- Test Case 11 ----------
console.log(levenshteinDistance("biting", "mitten")); // 4
// ---------- Test Case 12 ----------
console.log(levenshteinDistance("cereal", "saturday")); // 6
// ---------- Test Case 13 ----------
console.log(levenshteinDistance("cereal", "saturdzz")); // 7
// ---------- Test Case 14 ----------
console.log(levenshteinDistance("abbbbbbbbb", "bbbbbbbbba")); // 2
// ---------- Test Case 15 ----------
console.log(levenshteinDistance("xabc", "abcx")); // 2
// ---------- Test Case 16 ----------
console.log(levenshteinDistance("table", "bal")); // 3
// ---------- Test Case 17 ----------
console.log(levenshteinDistance("gumbo", "gambol")); // 2
