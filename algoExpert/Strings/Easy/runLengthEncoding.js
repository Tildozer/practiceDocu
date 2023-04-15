/*
Write a function that takes in a non-empty string and returns its run-length encoding.
From Wikipedia; 
"run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run."
For this problem, a run of data is any sequence of consecutive, identical characters. 
So the run "AAA" would be run-length-encoded as "3A"
To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 A s), can't naively be encoded as '12A' , since this string can be decoded as either
"AAAAAAAAAAAA' or "lAA'.
Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion;
the aforementioned run should be encoded as "9A3A"
*/

function runLengthEncoding(string) {
  // Write your code here.
  let currLetter;
  let currCount = 0;
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== currLetter || currCount === 9) {
      if (currCount) {
        newString += `${currCount}${currLetter}`;
      }
      currLetter = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
    if (i === string.length - 1) {
      newString += `${currCount}${currLetter}`;
    }
  }
  return newString;
}

//   --------- Test Case 1 ----------
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")); //9A4A2B4C2D
//   ---------- Test Case 2 ----------
console.log(runLengthEncoding("aA")); //1a1A
//   ---------- Test Case 3 ----------
console.log(runLengthEncoding("122333")); //112233
//   ---------- Test Case 4 ----------
console.log(
  runLengthEncoding(
    "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"
  )
); //   9*3*7^6$7%6!9A9A2A
//   ---------- Test Case 5 ----------
console.log(runLengthEncoding("aAaAaaaaaAaaaAAAABbbbBBBB")); //1a1A1a1A5a1A3a4A1B3b4B
//   ---------- Test Case 6 ----------
console.log(runLengthEncoding("                          ")); //9 9 8
//   ---------- Test Case 7 ----------
console.log(runLengthEncoding("1  222 333    444  555")); //   112 321 334 342 35
//   ---------- Test Case 8 ----------
console.log(runLengthEncoding("1A2BB3CCC4DDDD"));
//111A122B133C144D
//   ---------- Test Case 9 ----------
console.log(runLengthEncoding("........______=========AAAA   AAABBBB   BBB")); //8.6_9=4A3 3A4B3 3B
//   ---------- Test Case 10 ----------
console.log(
  runLengthEncoding(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
//9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a
//   ---------- Test Case 11 ----------
console.log(
  runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
); //8 9a9a9a9a9a4a
//   ---------- Test Case 12 ----------
console.log(runLengthEncoding(" ")); //   1
//   ---------- Test Case 13 ----------
console.log(runLengthEncoding("[(aaaaaaa,bbbbbbb,ccccc,dddddd)]")); //1[1(7a1,7b1,5c1,6d1)1]

//   ---------- Test Case 14 ----------
console.log(
  runLengthEncoding(
    ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"
  )
);
//9;3;9'9'2'111273524142311s
//   ---------- Test Case 15 ----------
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDDDDDDDDDDD")); //9A4A2B4C9D2D
