/*
doubleTheOdds
write doubleTheOdds
it takes an array of numbers
it returns an array of numbers by filtering the passed in array and taking the odd numbers, and doubling them
*/

//TODO
const doubleTheOdds = (arrOfNums) => {
  let filtered = arrOfNums.filter((num) => num % 2 === 1);
  return filtered.map((oddnum) => oddnum * 2);
};

/* one liner solution
      const doubleTheOdds = (arrOfNums) => {
      return arrOfNums.filter(num => (num % 2 === 1)).map(oddnum => oddnum * 2);
      }
      */

let input = [1, 1, 1];
let output = doubleTheOdds(input);
console.log(output); //[2, 2, 2];
input = [2, 2, 2];
output = doubleTheOdds(input);
console.log(output); //[]; no odd numbers
input = [1, 2, 3];
output = doubleTheOdds(input);
console.log(output); //[2, 6]; 1 and 3 are odd, they get doubled to [2, 6]
