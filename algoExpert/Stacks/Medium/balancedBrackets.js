/*
Write a function that takes in a string made up of brackets ( C. I, f,, J, and 1 ) and other optional characters. 
The function should return a boolean representing whether the string is balanced with regards to brackets.
A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. 
Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. 
Also, brackets can't overlap each other as in ([)]
*/

function balancedBrackets(string) {
  // Write your code here.
  let openingBrackets = "({[";
  let closingBrackets = ")}]";
  let matchingBrackets = { ")": "(", "}": "{", "]": "[" };
  let stack = [];
  for (let char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (!stack.length) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
}

// ---------- Test Case 1 ----------
console.log(balancedBrackets("([])(){}(())()()")); // true
// ---------- Test Case 2 ----------
console.log(balancedBrackets("()[]{}{")); // false
// ---------- Test Case 3 ----------
console.log(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))")); // false
// ---------- Test Case 4 ----------
console.log(balancedBrackets("()()[{()})]")); // false
// ---------- Test Case 5 ----------
console.log(balancedBrackets("(()())((()()()))")); // true
// ---------- Test Case 6 ----------
console.log(balancedBrackets("{}()")); // true
// ---------- Test Case 7 ----------
console.log(balancedBrackets("()([])")); // true
// ---------- Test Case 8 ----------
console.log(balancedBrackets("((){{{{[]}}}})")); // true
// ---------- Test Case 9 ----------
console.log(balancedBrackets("((({})()))")); // true
// ---------- Test Case 10 ----------
console.log(balancedBrackets("(([]()()){})")); // true
// ---------- Test Case 11 ----------
console.log(
  balancedBrackets(
    "(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())"
  )
);
// true

// ---------- Test Case 12 ----------
console.log(balancedBrackets("{[[[[({(}))]]]]}"));
// false

// ---------- Test Case 13 ----------
console.log(balancedBrackets("[((([])([]){}){}){}([])[]((())"));
// false

// ---------- Test Case 14 ----------
console.log(balancedBrackets(")[]}"));
// false

// ---------- Test Case 15 ----------
console.log(balancedBrackets("(a)"));
// true

// ---------- Test Case 16 ----------
console.log(balancedBrackets("(a("));
// false

// ---------- Test Case 17 ----------
console.log(balancedBrackets("(141[])(){waga}((51afaw))()hh()"));
// true

// ---------- Test Case 18 ----------
console.log(balancedBrackets("aafwgaga()[]a{}{gggg"));
// false

// ---------- Test Case 19 ----------
console.log(
  balancedBrackets("(((((({{{{{safaf[[[[[([)]safsafsa)]]]]]}}}gawga}}))))))")
);
// false

// ---------- Test Case 20 ----------
console.log(balancedBrackets("()(agawg)[{()gawggaw})]"));
// false

// ---------- Test Case 21 ----------
console.log(balancedBrackets("(()agwg())((()agwga()())gawgwgag)"));
// true

// ---------- Test Case 22 ----------
console.log(balancedBrackets("{}gawgw()"));
// true

// ---------- Test Case 23 ----------
console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
// true
