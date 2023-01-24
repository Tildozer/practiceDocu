/**
 * Capitalize Every Other Letter
Write a function that capitalizes every other letter in a string starting with the first
 */

//TODO
const stringConverter = (str) => {
  /*let newStr = ''; 
    let acc = 0
    for(let i = 0; i < str.length; i++){
      let letter = str[i];
      if(acc % 2){
        newStr += letter.toLowerCase();
      } else {
        newStr += letter.toUpperCase();
      }
      if(letter.match(/[a-z]/i)){
        acc++;
      }
    }
    return newStr;*/
  const strArr = [...str];
  let acc = 0;

  return strArr.reduce((newStr, letter) => {
    acc % 2
      ? (newStr += letter.toLowerCase())
      : (newStr += letter.toUpperCase());

    if (letter.match(/[a-z]/i)) {
      acc++;
    }

    return newStr;
  }, "");
};

console.log(stringConverter("That was so cool!!!! Let's do it again!")); // "ThAt WaS sO cOoL!!!! lEt'S dO iT aGaIn!"
console.log(stringConverter("My name is Jon and I am so serious right now!")); // "My NaMe Is JoN aNd I aM sO sErIoUs RiGhT nOw!"
