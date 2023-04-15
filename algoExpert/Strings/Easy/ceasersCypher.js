/*
  Given a non-empty string of lowercase letters and a non negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

  Note that the letters should wrap around the alphabet;
  in other words, the letter `z` shifted by one returns the letter `a`.
*/

function caesarCipherEncryptor(string, key) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Write your code here.
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString += alphabet[(alphabet.indexOf(string[i]) + key) % 26];
  }
  return newString;
}

// ---------- Test Case 1 ----------
console.log(ceasarCipherEncryptor("xyz", 2)); // zab
// ---------- Test Case 2 ----------
console.log(ceasarCipherEncryptor("abc", 0)); // abc
// ---------- Test Case 3 ----------
console.log(ceasarCipherEncryptor("abc", 3)); // def
// ---------- Test Case 4 ----------
console.log(ceasarCipherEncryptor("xyz", 5)); // cde
// ---------- Test Case 5 ----------
console.log(ceasarCipherEncryptor("abc", 26)); // abc
// ---------- Test Case 6 ----------
console.log(ceasarCipherEncryptor("abc", 52)); // abc
// ---------- Test Case 7 ----------
console.log(ceasarCipherEncryptor("abc", 57)); // fgh
// ---------- Test Case 8 ----------
console.log(ceasarCipherEncryptor("xyz", 25)); // wxy
// ---------- Test Case 9 ----------
console.log(ceasarCipherEncryptor("iwufqnkqkqoolxzzlzihqfm", 25)); // hvtepmjpjpnnkwyykyhgpel
// ---------- Test Case 10 ----------
console.log(ceasarCipherEncryptor("ovmqkwtujqmfkao", 52)); // ovmqkwtujqmfkao
// ---------- Test Case 11 ----------
console.log(ceasarCipherEncryptor("mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf", 7)); // tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm
// ---------- Test Case 12 ----------
console.log(
  ceasarCipherEncryptor(
    "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh",
    15
  )
); // zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw
