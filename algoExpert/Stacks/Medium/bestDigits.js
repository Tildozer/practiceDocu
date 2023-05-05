/*
Write a function that takes a positive integer represented as a string number and an integer numDigits.
Remove numDigits from the string so that the number represented by the string is as large as possible afterwards.
Note that the order of the remaining digits cannot be changed. 
You can assume numDigits will always be less than the length of number and greater than or equal to 0.
*/

function bestDigits(number, numDigits) {
  // Write your code here.
  let edits = numDigits;
  let newNumber = number;
  for (let i = 0; i < newNumber.length; i++) {
    while (
      (newNumber[i] < newNumber[i + 1] && edits !== 0) ||
      (i === newNumber.length - 1 && edits !== 0)
    ) {
      newNumber = `${newNumber.slice(0, i)}${newNumber.slice(i + 1)}`;
      edits += -1;
      i = 0;
    }
    if (edits === 0) {
      i = newNumber.length;
    }
  }
  return newNumber;
}

// ---------- Test Case 1 ----------
console.log(bestDigits("462839", "2")); // 6839
// ---------- Test Case 2 ----------
console.log(bestDigits("129847563", "4")); // 98763
// ---------- Test Case 3 ----------
console.log(bestDigits("19", "1")); // 9
// ---------- Test Case 4 ----------
console.log(bestDigits("22", "1")); // 2
// ---------- Test Case 5 ----------
console.log(bestDigits("23", "1")); // 3
// ---------- Test Case 6 ----------
console.log(bestDigits("123", "1")); // 23
// ---------- Test Case 7 ----------
console.log(bestDigits("321", "1")); // 32
// ---------- Test Case 8 ----------
console.log(bestDigits("123", "2")); // 3
// ---------- Test Case 9 ----------
console.log(bestDigits("321", "2")); // 3
// ---------- Test Case 10 ----------
console.log(bestDigits("11111111119999999999", "10")); // 9999999999
// ---------- Test Case 11 ----------
console.log(bestDigits("10000000002", "9")); // 12
// ---------- Test Case 12 ----------
console.log(bestDigits("10000000002", "10")); // 2
// ---------- Test Case 13 ----------
console.log(bestDigits("1020304050", "5")); // 34050
// ---------- Test Case 14 ----------
console.log(bestDigits("100300200004", "4")); // 30200004
// ---------- Test Case 15 ----------
console.log(bestDigits("9999999999", "9")); // 9
// ---------- Test Case 16 ----------
console.log(bestDigits("111221", "3")); // 221
// ---------- Test Case 17 ----------
console.log(bestDigits("12345", "0")); // 12345
// ---------- Test Case 18 ----------
console.log(bestDigits("54321", "0")); // 54321
