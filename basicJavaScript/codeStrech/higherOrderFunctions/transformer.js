/*
transformer
write transformer
it takes an array
and a function
it returns a new array where each item in the initial array is used as an input in the passed in function
*/

//TODO
const transformer = (nums, callback) => {
  return nums.map((num) => {
    return callback(num);
  });
};

let input = [1, 2, 3];
let output = transformer(input, function (x) {
  return x * 2;
});
console.log(output); //[2, 4, 6]
input = [1, 2, 3];
output = transformer(input, function (x) {
  return x % 3;
});
console.log(output); //[1, 2, 0]
input = [1, 2, 3, 4, 5, 6];
output = transformer(input, function (x) {
  return x % 2 === 0;
});
console.log(output); //[false, true, false, true, false, true]
