/**
 * Anagram Test
Write a function that takes in two strings and returns a boolean based on if they are anagrams of each other
anagrams are words which have the exact same letters in different orders
 */

//TODO
const isAnagram = (word, wordTwo) => {
  const longerWord =
    word.length > wordTwo.length ? word.length : wordTwo.length;
  let wordArr = word.split("");

  for (let i = 0; i < longerWord; i++) {
    const letterCheck = wordArr.indexOf(wordTwo[i]);
    if (letterCheck !== -1) {
      wordArr.splice(letterCheck, 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("cinema", "iceman")); // true
console.log(isAnagram("the eyes", "they see")); // true
console.log(isAnagram("waffle", "nutmeg")); // false
console.log(isAnagram("build", "building")); // false
