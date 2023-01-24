/*
find length of short keys

    write countKeyLength
    it takes an object
    it returns a number which is the string length of all the combined keys
    but don't count keys which are longer than 3 characters
*/

//TODO
const obj = {
  foo: "hello",
  bar: "world",
  bazz: "!!",
};

const countShortKeys = (obj) => {
  let keyLength = 0;
  for (let key in obj) {
    if (key.length < 4) {
      keyLength += key.length;
    }
  }
  return keyLength;
};

console.log(countShortKeys(obj)); //6 because the short keys are foo and bar
delete obj.foo;
console.log(countShortKeys(obj)); //3 because the short keys are bar
delete obj.bar;
console.log(countShortKeys(obj)); //0 because there are no short keys
