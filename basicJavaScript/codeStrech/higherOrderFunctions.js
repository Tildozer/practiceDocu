/*
template with function
write template
it takes an array and a function
it returns a string using the array and template function
*/

const template = (arr, callback) => {
    let finalStr = '';
      arr.forEach(num => {
        callback(num);
        finalStr += `${callback(num)} `;
      })
        return finalStr;
    }
    
    // let output = template([1, 2, 3], function(x){
    //   return `**${x}**`;
    // });
    // console.log(output);//**1** **2** **3**
    // output = template([1, 2, 3], function(x){
    //   return `|${ x * 2}|`;
    // });
    // console.log(output);//|2| |4| |6|

    /*
    countOdd with forEach
write countOdd function
takes an array
returns the number of odd numbers
use forEach
    */

const countOdd = (arrOfNums) => {
    let count = 0;
arrOfNums.forEach(num => {
  if(num % 2 === 1){
    count++;
    }
  })
  return count;
}

// console.log(countOdd([1, 2, 3]));//2
// console.log(countOdd([1, 2, 3, 4, 5]));//3

/*
template with transformation
template gets passed an array, a decorator string, and an optional transformation function
*/

//TODO
const templateTrans = (arr, strDecoration, optFunc) => {
    let str = '';
    arr.forEach(element => {
        if(optFunc){
      element = optFunc(element);
    }
      str += `${strDecoration}${element}${strDecoration} `;
    })
    return str;
  }
  
//   console.log(templateTrans(['foo', 'bar', 'bazz'], '-'));//-foo- -bar- -bazz-
//   console.log(templateTrans(['foo', 'bar', 'bazz'], '*'));//*foo* *bar* *bazz*
//   console.log(templateTrans(['moe', 'lucy'], '*', (item)=> item.toUpperCase()));//"*MOE* *LUCY*"
//   console.log(templateTrans(['moe', 'lucy', 'stan'], '-', (item)=> item.slice(0, 2)));//-mo- -lu- -st-

/*
oddsEvens
- write oddsEvens
- takes an array of numbers
- returns an object with keys of odds and evens which have the respective numbers
*/

const oddEvens = (nums) => {
    let oddOrEven = {odds: [], evens : [],};
    nums.forEach(num => {
      if(num % 2 === 0){
        oddOrEven.evens.push(num);
      } else {
          oddOrEven.odds.push(num);
      }
  })
    return oddOrEven;
  }
  //  console.log(oddEvens([1, 3, 2]));//{ odds: [1, 3], evens: [2]}

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
    return nums.filter(num => {
      return num % 2 === 1;
    })
    .reduce((acc, num) => {
      return acc *= num;
    }, 1)
  
  }
  
//   console.log(oddProduct([1, 2, 3]));//3
//   console.log(oddProduct([1, 2, 3, 4, 5]));//15

/*
the gobbler
write gobbler
gobbler takes a number and a template function
it returns an array of strings which are templated based on function
*/

//TODO
const gobbler = (num, optFunc) => {
    let gobble = [];
    for(let i = 0; i < num; i++){
      gobble.push(optFunc('gobble'));
    }
    return gobble;
  }
  // I was trying to do this with the new stuff we learned, 
  // but wasnt sure if we could use anny of those methods without an array
//   let output = gobbler(3, function(x){
//     return `${x}!!`;
//   });
//   console.log(output);//['gobble!!', 'gobble!!', 'gobble!!']
  
//   output = gobbler(3, function(x){
//     return x.toUpperCase();
//   });
//   console.log(output);//['GOBBLE', 'GOBBLE', 'GOBBLE']


/*
transformer
write transformer
it takes an array
and a function
it returns a new array where each item in the initial array is used as an input in the passed in function
*/

//TODO
const transformer = (nums, callback) => {
    return nums.map(num => {
      return callback(num);
    });
  }

//   let input = [1, 2, 3];
//   let output = transformer(input, function(x){
//     return x * 2
//   });
//   console.log(output)//[2, 4, 6]
//   input = [1, 2, 3];
//   output = transformer(input, function(x){
//     return x % 3;
//   });
//   console.log(output)//[1, 2, 0]
//   input = [1, 2, 3, 4, 5, 6];
//   output = transformer(input, function(x){
//     return x % 2 === 0;
//   });
//   console.log(output)//[false, true, false, true, false, true]

/*
reduce
write the reduce function
you can not use the array reduce method within reduce. Pretend it doesn't exist.
*/

//TODO
const reduce = (arrOfItems, callback, acc) => {
    let product;
  arrOfItems.forEach((item, idx) => {
    if(idx === 0){
      product = callback(acc, item);
    } else {
      product = callback(product, item)
    }
  });
    return product;
  }
  
//   console.log(reduce([1, 2, 3], (acc, item)=> {
//     return item * acc;
//   }, 2));//12
  
//   console.log(reduce([1, 2, 3, 4], (acc, item)=> {
//     return item * acc;
//   }, 10));//240

/*
doubleTheOdds
write doubleTheOdds
it takes an array of numbers
it returns an array of numbers by filtering the passed in array and taking the odd numbers, and doubling them
*/

//TODO
const doubleTheOdds = (arrOfNums) => {
    let filtered = arrOfNums.filter(num => (num % 2 === 1));
      return filtered.map(oddnum => oddnum * 2);
    }


    /* one liner solution
    const doubleTheOdds = (arrOfNums) => {
    return arrOfNums.filter(num => (num % 2 === 1)).map(oddnum => oddnum * 2);
    }
    */


    // let input = [ 1, 1, 1];
    // let output = doubleTheOdds(input);
    // console.log(output);//[2, 2, 2];
    // input = [ 2, 2, 2];
    // output = doubleTheOdds(input);
    // console.log(output);//[]; no odd numbers
    // input = [ 1, 2, 3];
    // output = doubleTheOdds(input);
    // console.log(output);//[2, 6]; 1 and 3 are odd, they get doubled to [2, 6]

    /*
    filterFunctionsAndCallThem - use filter and map
write the function filterFunctionsAndCallThem
it takes an array
the array should be filtered for functions
those functions should be called and the results returned in an array
try and use filter followed by map
    */
   // solution was left there on this one lol

const filterFunctionsAndCallThem = (arr)=> arr.filter(x => typeof x === 'function').map(x => x());
const x = ()=> 'foo';
const y = ()=> 'bar';

const results = filterFunctionsAndCallThem([x, y, 42, true]);//['foo', 'bar']
console.log(results);

/*
createTemplateList
write createTemplateList
it takes a count and a callback function
it returns an array of length count with values created from the callback function
*/

//TODO
/*
const createTemplateList = (count, callback) => {
  const finalArr = [];
  for(let i = 0; i < count; i++){
    finalArr.push(callback(i));
  }
  return finalArr;
}*/

const createTemplateList = (count, callback) => {
    return new Array(count).fill('').map((_, idx) => callback(idx));
  }
  
//   console.log(createTemplateList(3, (n)=> `Item ${n}`));['Item 0', 'Item 1', 'Item 2']
//   console.log(createTemplateList(4, (n)=> `Foo ${n * 2}`));['Foo 0', 'Foo 2', 'Foo 4', 'Foo 6']
//   console.log(createTemplateList(2, (n)=> n * 2));[0, 2]
  