/*
the gobbler
write gobbler
gobbler takes a number and a template function
it returns an array of strings which are templated based on function
*/

//TODO
const gobbler = (num, optFunc) => {
  let gobble = [];
  for (let i = 0; i < num; i++) {
    gobble.push(optFunc("gobble"));
  }
  return gobble;
};
// I was trying to do this with the new stuff we learned,
// but wasnt sure if we could use anny of those methods without an array

let output = gobbler(3, function (x) {
  return `${x}!!`;
});
console.log(output); //['gobble!!', 'gobble!!', 'gobble!!']

output = gobbler(3, function (x) {
  return x.toUpperCase();
});
console.log(output); //['GOBBLE', 'GOBBLE', 'GOBBLE']
