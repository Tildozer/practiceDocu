/*
object generator
generateObject takes a set of strings and returns an object
each entry in the object consists of a key and value which corresponds to the string
const obj = generateObject('FOO', 'BAR', 'BAZZ');
*/

//TODO
const generateObject = (...arr) => {
  let obj = {};
  arr.forEach((key) => (obj[key] = key));
  return obj;
};
// I can't remember how to make an object pair with recuce() so this was the best I could do.
const obj = generateObject("FOO", "BAR", "BAZZ");

console.log(obj);
/*
  {
    BAR: "BAR",
    BAZZ: "BAZZ",
    FOO: "FOO"
  }*/
