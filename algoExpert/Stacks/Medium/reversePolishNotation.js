/*

*/

// My solution, don't know if unoptimal though.
function reversePolishNotation(tokens) {
  // Write your code here
  if (tokens.length === 1) return +tokens[0];
  const signs = "+*/-";
  const stack = [tokens[0]];
  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];
    if (signs.includes(current)) {
      let second = +stack.pop();
      let first = +stack.pop();
      let sum = 0;
      switch (current) {
        case "+":
          sum = first + second;
          break;
        case "*":
          sum = first * second;
          break;
        case "-":
          sum = first - second;
          break;
        case "/":
          let newSum = first / second;
          if (newSum > 0) {
            sum = Math.floor(newSum);
          } else {
            if (
              !newSum.toString().split(".")[1] ||
              +newSum.toString().split(".")[1][0] <= 5
            ) {
              sum = Math.ceil(newSum);
            } else {
              sum = Math.floor(newSum);
            }
          }

          break;
      }
      stack.push(sum);
    } else {
      stack.push(current);
    }
  }
  return stack[stack.length - 1];
}

// ---------- Test Case 1 ----------
console.log(reversePolishNotation(["10"])); //
// ---------- Test Case 2 ---------
console.log(reversePolishNotation(["10", "5", "+"])); // 15
// ---------- Test Case 3 ----------
console.log(reversePolishNotation(["10", "5", "-"])); // 5
// ---------- Test Case 4 ----------
console.log(reversePolishNotation(["10", "5", "/"])); // 2
// ---------- Test Case 5 ----------
console.log(reversePolishNotation(["10", "5", "*"])); // 50
// ---------- Test Case 6 ----------
console.log(reversePolishNotation(["10", "-5", "*"])); // -50
// ---------- Test Case 7 ----------
console.log(reversePolishNotation(["-10", "5", "*"])); // -50
// ---------- Test Case 8 ----------
console.log(reversePolishNotation(["-10", "-5", "*"])); // 50
// ---------- Test Case 9 ----------
console.log(reversePolishNotation(["10", "-5", "/"])); // -2
// ---------- Test Case 10 ----------
console.log(reversePolishNotation(["-10", "5", "/"])); // -2
// ---------- Test Case 11 ----------
console.log(reversePolishNotation(["-10", "-5", "/"])); // 2
// ---------- Test Case 12 ----------
console.log(reversePolishNotation(["10", "3", "/"])); // 3
// ---------- Test Case 13 ----------
console.log(reversePolishNotation(["10", "-3", "/"])); // -3
// ---------- Test Case 14 ----------
console.log(reversePolishNotation(["10", "-5", "+"])); // 5
// ---------- Test Case 15 ----------
console.log(reversePolishNotation(["-10", "5", "+"])); // -5
// ---------- Test Case 16 ----------
console.log(reversePolishNotation(["-10", "-5", "+"])); // -15
// ---------- Test Case 17 ----------
console.log(reversePolishNotation(["10", "-5", "-"])); // 15
// ---------- Test Case 18 ----------
console.log(reversePolishNotation(["-10", "5", "-"])); // -15
// ---------- Test Case 19 ----------
console.log(reversePolishNotation(["-10", "-5", "-"])); // -5
// ---------- Test Case 20 ----------
console.log(reversePolishNotation(["3", "2", "+", "7", "*"])); // 35
// ---------- Test Case 21 ----------
console.log(reversePolishNotation(["4", "2", "/", "7", "-"])); // -5
// ---------- Test Case 22 ----------
console.log(reversePolishNotation(["3", "4", "+", "2", "/", "4", "-"])); // -1
// ---------- Test Case 23 ----------
console.log(
  reversePolishNotation([
    "4",
    "-7",
    "2",
    "6",
    "+",
    "10",
    "-",
    "/",
    "*",
    "2",
    "+",
    "3",
    "*",
  ])
); // 42
// ---------- Test Case 24 ----------
console.log(
  reversePolishNotation([
    "4",
    "-7",
    "2",
    "6",
    "+",
    "10",
    "-",
    "/",
    "*",
    "2",
    "+",
    "3",
    "*",
    "0",
    "*",
  ])
); // 0
// ---------- Test Case 25 ----------
console.log(reversePolishNotation(["50", "3", "17", "+", "2", "-", "/"])); // 2
// ---------- Test Case 26 ----------
console.log(reversePolishNotation(["0", "3", "17", "+", "2", "-", "/"])); // 0
// ---------- Test Case 27 ----------
console.log(
  reversePolishNotation([
    "0",
    "3",
    "17",
    "+",
    "2",
    "-",
    "/",
    "2",
    "-",
    "7",
    "10",
    "+",
    "*",
  ])
); // -34
