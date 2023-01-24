/*
count length of all keys

    write countKeyLength
    it takes an object
    it returns a number which is the string length of all the combined keys
*/

//TODO
function countKeyLength(obj) {
  let keyLength = 0;
  for (let key in obj) {
    keyLength += key.length;
  }
  return keyLength;
}

const object = {
  foo: "hello",
  bar: "world",
  bazz: "!!",
};

console.log(countKeyLength(object)); //10 because keys are foo bar and bazz
delete object.foo;
console.log(countKeyLength(object)); //7 because keys are bar and bazz
delete object.bar;
console.log(countKeyLength(object)); //4 because key is bazz
delete object.bazz;
console.log(countKeyLength(object)); //0 because there are no keys
