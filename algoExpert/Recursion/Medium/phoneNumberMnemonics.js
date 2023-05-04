/*
If you open the keypad of your mobile phone, it'll likely look like this:

 __________ ___________ ___________
 |        | |         | |         |
 |   1    | |    2    | |    3    |
 |        | |   abc   | |   def   |
 ---------- ----------- ----------- 
 __________ ___________ ___________
 |        | |         | |         |
 |   4    | |    5    | |    6    |
 |  ghi   | |   jkl   | |   mno   |
 ---------- ----------- ----------- 
 __________ ___________ ___________
 |        | |         | |         |
 |   7    | |    8    | |    9    |
 |  pqrs  | |   tuv   | |   wxyz  |
 ---------- ----------- ----------- 
            ___________
            |    0    |
            |         |
            |         |
            -----------

Almost every digit is associated with some letters in the alphabet; 
    this allows certain phone numbers to spell out actual words. 
For example, the phone number 8464747328 can be written as timisgreat; 
    similarly, the phone number 2686463 can be written as antoine or as ant6463
It's important to note that a phone number doesn't represent a single sequence of letters, but rather multiple combinations of letters. 
For instance, the digit 2 can represent three different letters (a, b, and c).
A mnemonic is defined as a pattern of letters, ideas, or associations that assist in remembering something. 
Companies oftentimes use a mnemonic for their phone number to make it easier to remember.
Given a stringified phone number of any non-zero length, write a function that returns all mnemonics for this phone number, in any order.
For this problem, a valid mnemonic may only contain letters and the digits o and 1. 
In other words, if a digit is able to be represented by a letter, then it must be. 
Digits 0 and 1 are the only two digits that don't have letter representations on the keypad.
Note that you should rely on the keypad illustrated above for digit-letter associations.
*/

const numberPad = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

// Proper solution
function phoneNumberMnemonicsRecursively(phoneNumber) {
  // Write your code here.
  const currentMnemonic = phoneNumber.split("").map((_) => "0");
  let results = [];
  _mnemonicHelper(0, phoneNumber, currentMnemonic, results);
  return results;
}

function _mnemonicHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound) {
  if (idx === phoneNumber.length) {
    const mnemonic = currentMnemonic.join("");
    console.log(mnemonic);
    mnemonicsFound.push(mnemonic);
  } else {
    const digit = phoneNumber[idx];
    const letters = numberPad[digit];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      currentMnemonic[idx] = letter;
      _mnemonicHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound);
    }
  }
}

// MY SOLUTION, feels slow.
function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  const PhoneNumberList = [];
  let firstWord = "";
  for (let i = 0; i < phoneNumber.length; i++) {
    const curr = phoneNumber[i];
    PhoneNumberList.push(numberPad[curr]);
    firstWord += PhoneNumberList[i][0];
  }
  // console.log(PhoneNumberList, word)
  const possibleCombinations = [firstWord];
  _getAllPossibleDigits(PhoneNumberList, 0, possibleCombinations);
  // console.log(possibleCombinations);
  return possibleCombinations;
}

function _getAllPossibleDigits(array, idx, combonations) {
  if (idx === array.length) return;
  if (array[idx].length > 1) {
    combonations.forEach((word) => {
      for (let i = 0; i < array[idx].length; i++) {
        if (word[idx] !== array[idx][i]) {
          let newWord = `${word.slice(0, idx)}${array[idx][i]}${word.slice(
            idx + 1
          )}`;
          // console.log("new word", newWord);
          if (combonations.indexOf(newWord) === -1) {
            combonations.push(newWord);
          }
        }
      }
    });
  }
  _getAllPossibleDigits(array, idx + 1, combonations);
}
