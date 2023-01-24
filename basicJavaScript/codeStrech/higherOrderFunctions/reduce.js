/*
reduce
write the reduce function
you can not use the array reduce method within reduce. Pretend it doesn't exist.
*/

//TODO
const reduce = (arrOfItems, callback, acc) => {
  let product;
  arrOfItems.forEach((item, idx) => {
    if (idx === 0) {
      product = callback(acc, item);
    } else {
      product = callback(product, item);
    }
  });
  return product;
};

//   console.log(reduce([1, 2, 3], (acc, item)=> {
//     return item * acc;
//   }, 2));//12

//   console.log(reduce([1, 2, 3, 4], (acc, item)=> {
//     return item * acc;
//   }, 10));//240
