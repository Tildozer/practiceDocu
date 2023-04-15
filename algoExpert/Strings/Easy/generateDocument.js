/*
You're given a string of available characters and a string representing a document that you need to generate.
Write a function that determines if you can generate the document using the available characters.
If you can generate the document, your function should return true;
otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. 
For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one
The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.
Note: you can always generate the empty string ("")
*/

function generateDocument(characters, document) {
  // Write your code here.

  let newString = characters.split("");

  for (let i = 0; i < document.length; i++) {
    const index = newString.indexOf(document[i]);
    if (index !== -1) {
      newString[index] = "";
    } else {
      return false;
    }
  }
  return true;
}

// ---------- Test Case 1 ----------
console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!")
); // true
// ---------- Test Case 2 ----------
console.log(generateDocument("A", "a")); // false

// ---------- Test Case 3 ----------
console.log(generateDocument("a", "a")); // true

// ---------- Test Case 4 ----------
console.log(generateDocument("a hsgalhsa sanbjksbdkjba kjx", " ")); // true
// ---------- Test Case 5 ----------
console.log(generateDocument(" ", "hello")); // false

// ---------- Test Case 6 ----------
console.log(generateDocument(" ", " ")); // true
// ---------- Test Case 7 ----------
console.log(generateDocument("aheaollabbhb", "hello")); // true

// ---------- Test Case 8 ----------
console.log(generateDocument("aheaolabbhb", "hello")); // false
// ---------- Test Case 9 ----------
console.log(generateDocument("estssa", "testing")); // false
// ---------- Test Case 10 ----------
console.log(
  generateDocument("Bste!hetsi ogEAxpert", "AlgoExpert is the Best!")
); // false
// ---------- Test Case 11 ----------
console.log(generateDocument("helloworld", "hello wOrld")); // false
// ---------- Test Case 12 ----------
console.log(generateDocument("helloworldO", "hello wOrld")); // false
// ---------- Test Case 13 ----------
console.log(generateDocument("helloworldO", "hello wOrld")); // true
// ---------- Test Case 14 ----------
console.log(
  generateDocument(
    "&*&you^a%^&8766 _=-09     docanCMakemthisdocument",
    "Can you make this document &"
  )
); // true
// ---------- Test Case 15 ----------
console.log(generateDocument("abcabcabcacbcdaabc", "bacaccadac")); // true
