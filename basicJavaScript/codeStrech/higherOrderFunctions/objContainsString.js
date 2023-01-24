/**
 * Searching An Object For A String
write objectContainsString
returns true if one of the values in the passed in object contains the passed in string
Search is case insensitive
returns false otherwise
 */

//TODO
const objContainsString = (obj, str) => {
  for (let key in obj) {
    if (obj[key].toLowerCase().includes(str.toLowerCase())) {
      return true;
    }
  }
  return false;
};

console.log(
  objContainsString(
    {
      x: "Foo",
      b: "bare",
    },
    "foo"
  )
); //true
console.log(
  objContainsString(
    {
      x: "Foo",
      b: "bare",
    },
    "bar"
  )
); //true
console.log(
  objContainsString(
    {
      one: "Foo",
      two: "bare",
    },
    "bazz"
  )
); //false
console.log(objContainsString({}, "whatever")); //false
