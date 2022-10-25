// question evenAndOdd
/*
Even and Odd
Define a function, evenAndOdd, that accepts an array.

evenAndOdd should return a new array containing two smaller arrays. The first element in the new array should be an array with all of the even numbers from the original array. The second element in the new array should be an array with all of the odd numbers from the original array.

evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
*/

function evenAndOdd(arr){
    let evenArr = [];
    let oddArr = [];
    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        
      if(currentNum % 2 === 0){
        evenArr.push(currentNum);
    //   console.log(evenArr);
      } else {
        oddArr.push(currentNum);
      }
    }
        return [evenArr, oddArr];
  }

  // console.log(evenAndOdd([10, 15, 20, 25, 30]));
  // console.log(evenAndOdd([7, 14, 21, 28, 35]));
  // console.log(evenAndOdd([1, 2, 3]));
  // console.log(evenAndOdd([ ,  ,  ,  ,  ,  ,  , ]));


  /*
  function evenAndOdd(originalArray) {

  // create arrays where we'll store even and odd numbers
  let evenNums = [];
  let oddNums = [];

  // loop through the entire original array
  for (let i = 0; i < originalArray.length; i++) {

    // store each number in a variable (optional)
    let num = originalArray[i];

    // if the number is odd...
    if (num % 2) {

      // ...push it into the oddNums array
      oddNums.push(num);
    }

    // else, the number must be even
    else {

      // push the number into the evenNums array
      evenNums.push(num);
    }
  }

  // create and return a new array, with the subarrays at the correct indices
  return [evenNums, oddNums];
}
  */

// question arrayFlattener

/*
Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

arrayFlattener should return a new, one-dimensional array.


*/

// YOUR CODE BELOW
const arrayFlattener = (arr) => {
  return arr.flat();
}

// console.log(arrayFlattener([1, 2, [3]]));
// console.log(arrayFlattener([['I', 'am', 'working', ['on', 'another', 'level']]));

/*
function arrayFlattener(twoDimensionalArray) {

  // create the array to return at the end of the function
  let flatArray = [];

  // loop through the original twoDimensionalArray
  for (let i = 0; i < twoDimensionalArray.length; i++) {

    // store each element in a variable (optional)
    let element = twoDimensionalArray[i];

    // if the element is an array...
    if (Array.isArray(element)) {

      // loop through the inner array
      for (let j = 0; j < element.length; j++) {

        // store each element from the inner array in a variable (also optional)
        let innerElement = element[j];

        // push each element from the inner array into the flatArray
        flatArray.push(innerElement);
      }
    }

    // else, the element is just a number and can be pushed into flatArray
    else {
      flatArray.push(element);
    }
  }

  // return the flatArray after the for loop
  return flatArray;
}

// alternative solution using concat
function arrayFlattener2(twoDimensionalArray) {
  let flatArray = [];

  for (let i = 0; i < twoDimensionalArray.length; i++) {
    let element = twoDimensionalArray[i];

    // if the element is an array...
    if (Array.isArray(element)) {

      // ...just concat the array onto flatArray
      flatArray = flatArray.concat(element);
    }
    else {
      flatArray.push(element);
    }
  }

  return flatArray;
}
*/