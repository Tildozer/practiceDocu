/*
oddProduct
write oddProduct function
takes an array
returns the product of all odd numbers in the array
*/

//TODO
const oddProduct = (nums) => {
  //  My solution
  //let oddProd = 1;
  /*    nums.forEach(number => {
          if(number % 2 === 1){
            oddProd *= number;
        }
      })*/
  // one correct solution
  /*
    let odds = nums.filter(number => {
      return number % 2 === 1;
    });
      odds.forEach(odd => {
        oddProd *= odd
      })
      */
  // even better solution
  return nums
    .filter((num) => {
      return num % 2 === 1;
    })
    .reduce((acc, num) => {
      return (acc *= num);
    }, 1);
};

console.log(oddProduct([1, 2, 3])); //3
console.log(oddProduct([1, 2, 3, 4, 5])); //15
