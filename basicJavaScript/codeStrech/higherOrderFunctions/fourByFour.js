/*
    fourByFour
fourByFour takes a list of words
returns all four letter words
if there are more than four words it only returns the first four
  */

//TODO
const fourByFour = (names) => {
  let filteredNames = names.filter((name) => name.length === 4);
  while (filteredNames.length > 4) {
    filteredNames.pop();
  }
  return filteredNames;
};

console.log(fourByFour(["foo", "bar", "fizz", "buzz"])); //['fizz', 'buzz']
console.log(fourByFour(["foo", "bar", "fizz", "buzz", "boat", "tack", "bill"])); //['fizz', 'buzz', 'boat', 'tack']
