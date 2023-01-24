/*
oddsEvens
- write oddsEvens
- takes an array of numbers
- returns an object with keys of odds and evens which have the respective numbers
*/

const oddEvens = (nums) => {
  let oddOrEven = { odds: [], evens: [] };
  nums.forEach((num) => {
    if (num % 2 === 0) {
      oddOrEven.evens.push(num);
    } else {
      oddOrEven.odds.push(num);
    }
  });
  return oddOrEven;
};

console.log(oddEvens([1, 3, 2])); //{ odds: [1, 3], evens: [2]}
