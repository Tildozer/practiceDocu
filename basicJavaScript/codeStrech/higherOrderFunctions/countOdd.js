const countOdd = (arrOfNums) => {
  let count = 0;
  arrOfNums.forEach((num) => {
    if (num % 2 === 1) {
      count++;
    }
  });
  return count;
};

console.log(countOdd([1, 2, 3])); //2
console.log(countOdd([1, 2, 3, 4, 5])); //3
