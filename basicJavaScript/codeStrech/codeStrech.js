/* arrayMult
arrayMult takes an array and a number
it returns a new array where each element is the number in the original array multiplied by the passed in number.
*/

const arrayMult = (arr, mult) => {
    let product = [];
    for(let i = 0; i < arr.length; i++){
     let numToMult = arr[i];
      product.push(numToMult * mult);
    }
    return product
  }
  
//   console.log(arrayMult([1, 2, 3], 2));//[2, 4, 6]
//   console.log(arrayMult([2], 9));//[18]
//   console.log(arrayMult([3, 4], 2));//[6, 8]
  
/* arrayToObject
arrayToObject takes and an array with an even number of items
it returns an object where the even indexes are keys, and the odd indexes are values

*/
const arrayToObject = (arr) => {
  let arrToObj = {}; 
    for(let i = 0; i <= arr.length; i++){
      let arrSearch = arr[i];
      if(arr.indexOf(arrSearch) % 2 === 0){
        arrToObj[arrSearch] = arr[i + 1]
      }
    }
      return arrToObj
  }
  // console.log(arrayToObject(['a', 1, 'b', 2]));//{ a: 1, b: 2}
  // console.log(arrayToObject(['a', 1, 'b', 2, 'c', 'd']));//{ a: 1, b: 2, c: 'd'}

  /*
  keyCount takes an object and returns the number of key value pairs in the object
  */

  const keyCount = (obj) => {
    let sum = 0;
   for(let key in obj){
     if(typeof key === 'string'){
       sum++;
     }
   }
    return sum;
  }
  
  // console.log(keyCount({foo: 'bar', bazz: 'quq'}));//2
  // console.log(keyCount({a: 1, b: 2, c: 'x'}));//3

  /* vendingMachine
  create an object called vendingMachine that has a property called inventory
vendingMachine.inventory should be an object containing the names of different snacks
Each snack is an object that has a description and a quantity.
Add four snacks to the vendingMachine.inventory object

  */

let vendingMachine = {
  inventory: {
    Pocky: {'little dessert breadsticks': 12},
    Lays: {'potato chips': 7},
    Tea: {'cans of tea, ready to drink': 6},
    'Edible Gold':{'for those with an expensive taste': 2}
             }
}

// console.log(vendingMachine.inventory);//should display whatever snacks you chose

/*  groupGrades
groupGrades takes an array of numbers (which are scores of 0 to 100)
it returns an object where the keys are grade letters and number of those grades
a >= 90, b >=80, c >=70, d >=65, f anthing else
write groupGrades
*/

const groupGrades = (studentGrades) => {
  let finalGrades = {};
    for(let i = 0; i < studentGrades.length; i++){
    let singleGrades = studentGrades[i];
      if(singleGrades < 65){
      if(finalGrades.f === undefined){
      finalGrades.f = 1;
      } else {
      finalGrades.f++;
      }
    }
      if(singleGrades < 70 && singleGrades > 64){
      if(finalGrades.d === undefined){
         finalGrades.d = 1;
        } else {
        finalGrades.d++;
     }
   }
     if(singleGrades < 80 && singleGrades > 69){
     if(finalGrades.c === undefined){
       finalGrades.c = 1;
     } else {
       finalGrades.c++;
     }
   } 
    if(singleGrades < 90 && singleGrades > 79){
    if(finalGrades.b === undefined){
      finalGrades.b = 1;
      } else {
      finalGrades.b++;
    }
  }
    if(singleGrades > 89){
     // console.log(singleGrades)
    if(finalGrades.a === undefined){
      finalGrades.a = 1;
      } else {
      finalGrades.a++;
      }
    }   
  }
    return finalGrades;
  }
  
  // console.log(groupGrades([ 95, 90, 82, 60]));//{ a: 2, b: 1, f: 1}
  // console.log(groupGrades([ 95, 90, 82, 60, 66, 73]));//{ a: 2, b: 1, f: 1, d: 1, c: 1}
  

  /**
   * numbersAndStrings takes an array of values (numbers and strings)
   * it returns an object with the keys numbers and strings
   * the key numbers has a value which is an array which contains all the numbers
   * they key strings has a value which is an array which contains all the strings
  */
   const numbersAndStrings = (arr) => {
    let catchObj = {numbers: [], strings: []};
    for(let i = 0; i < arr.length; i++) {
      const strOrNum = arr[i];
      if(typeof strOrNum === 'number'){
      catchObj.numbers.push(strOrNum)
      }
      if(typeof strOrNum === 'string'){
      catchObj.strings.push(strOrNum)
      }
    }
    return catchObj
  }
  // console.log(numbersAndStrings([1, "one", 2, "two", 3, "cat"]));
    //{ numbers: [1, 2, 3], strings: ["one", "two", "cat"] }
  
  // console.log(numbersAndStrings([5, 6, 'a', 'b', 9]));
    //{ numbers: [5, 6, 9], strings: ['a', 'b'] }

  /** canDrive
   * canDrive takes a person object which contains a key for age
   * it returns true if the person is old enough to drive
   * it returns false otherwise
   * a person aged 16 or older can drive
   */

   const canDrive = (iD) => {
    if(iD.age > 15){
    return true;
    }
      return false;
    }
    
    let p1 = {
      age: 16,
      name: 'Adam',
      favoriteColor: 'green'
    };
    let output = canDrive(p1);


    // console.log(output); //true
    // console.log(canDrive({ foo: 'bar', age: 15}));//false
    
  /** catSaysMeow
   * create an object cat that has three properties: name, color, breed
   * cat also has a method called sound that logs the string "meow" to the console
   */

   const cat = {
    name: 'Pusheen',
    color: 'grey',
    breed: 'Tabby',
    sound: function() {
    console.log('meow');
    }
  }
  
  // cat.sound();//logs 'meow'


  /*numberFrequency
write numberFrequency
takes an array of numbers
returns an object, where keys represent numbers and values represent number of times they appeared
console.log(numberFrequency([1, 2, 1, 3]));//{1: 2, 2: 1, 3: 1}
console.log(numberFrequency([]));//{}
console.log(numberFrequency([3, 3, 3, 3]));//{3: 4}
  */

//TODO
const numberFrequency = (num) => {
  let freq = {};
  for(let i = 0; i < num.length; i++){
    let numSearch = num[i];
  if(freq[numSearch] === undefined){
  // if(numSearch in freq){}  
    freq[numSearch] = 1;
  } else {
    freq[numSearch]++;
  }
  }
  return freq;
}

// console.log(numberFrequency([1, 2, 1, 3]));//{1: 2, 2: 1, 3: 1}
// console.log(numberFrequency([]));//{}
// console.log(numberFrequency([3, 3, 3, 3]));//{3: 4}


/*
numberFrequency which only counts numbers
write numberFrequency
takes an array which might include numbers and letters
returns object, where keys are the numbers and values are the number of times they appeared
it should only count numbers
console.log(numberFrequency([1, 2, 1, 3]));//{1: 2, 2: 1, 3: 1}
console.log(numberFrequency(['a']));//{}
console.log(numberFrequency([3, 3, 'a', 'b', 3, 3]));//{3: 4}
*/

//TODO
// const numberFrequency = (num) => {
  let numFreq = {}
  for(let i = 0; i < num.length; i++){
  let currNum = num[i];
    if(typeof currNum === 'number'){
      if(currNum in numFreq){
        numFreq[currNum]++;
    } else {
      numFreq[currNum] = 1;
    }
    }
  }
  return numFreq;
// }

// console.log(numberFrequency([1, 2, 1, 3]));//{1: 2, 2: 1, 3: 1}
// console.log(numberFrequency(['a']));//{}
// console.log(numberFrequency([3, 3, 'a', 'b', 3, 3]));//{3: 4}

/*
generate a random number
generateRandom generates a random number between 0 and 9 inclusive
inclusive means that the number can be 9
full range of number is 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
*/

//TODO
const generateRandom = () => {
  return Math.floor(Math.random() * 10);
  }
  
  // console.log(generateRandom());//some number between 0 and 9
  // console.log(generateRandom());//some number between 0 and 9
  // console.log(generateRandom());//some number between 0 and 9

  /*
  generateNRand is a function which takes a number as an argument
it returns an array of random numbers
each of the numbers is between 1 and 10
the length of the array is the number passed into the function

  */

//TODO
const generateNRand = (arrLength) => {
  let newArr = [];
    for(let i = 0; i < arrLength; i++){
    newArr.push(Math.ceil(Math.random() * 10));
    }
    return newArr;
  }
  
  // let arr = generateNRand(2);
  // console.log(arr);//prints array of 2 random numnbers
  // arr = generateNRand(5);
  // console.log(arr);//prints array of 5 random numbers

/*
generateNRand - with no duplicates
generateNRand is a function which takes a number as an argument
it returns an array of random numbers
each of the numbers is between 1 and 10 AND there are no duplicates!
the length of the array is the number passed into the function
since we only have 10 numbers, we can't create an array with a length greater than 10
let arr = generateNRand(2);
console.log(arr);//prints array of 2 random numnbers with no duplicates
arr = generateNRand(5);
console.log(arr);//prints array of 5 random numbers with no duplicates
arr = generateNRand(50);
console.log(arr);//PRINTS all 10 numbers in a random order!

*/

//TODO
// const generateNRand = (num) => {
  let randArr = [];
    for(let i = 0; i < num; i++){
      let randNum = Math.ceil(Math.random() * 10);
      
      if(randArr.indexOf(randNum) === -1){
        randArr.push(randNum);
      }
    }
    return randArr;
  // }
  
  // let arr = generateNRand(2);
  // console.log(arr);//prints array of 2 random numnbers with no duplicates
  // arr = generateNRand(5);
  // console.log(arr);//prints array of 5 random numbers with no duplicates
  // arr = generateNRand(50);
  // console.log(arr);//PRINTS all 10 numbers in a random order!
  
  /*
  generateOdd
generateOdd is a function which returns an odd number between 1 and 9 inclusive
  */

//TODO
const generateOdd = () => {
  let rand = 0;
  while(rand % 2 !== 1){
    rand = Math.ceil(Math.random() * 9);
  }
   return rand;
  }
  
  // let x = generateOdd();
  // let y = generateOdd();
  // console.log(x);//a random number between 1 and 9 inclusive
  // console.log(y)
  // console.log(x)

  /*
  how many threes?
write the function howManyThrees
it take a number n
it returns the number of times a 3 was chosen when picking a random number between 1 and 10 out of n tries
  */

//TODO
const numberOfThrees = (tries) => {
  let numOfThree = 0;
  for(let i = 0; i < tries; i++){
    let rand = Math.ceil(Math.random() * 10);
    if(rand === 3){
      numOfThree++;
       }
     }
    return numOfThree;
  }
  
  // let count = numberOfThrees(100);
  // console.log(count);//answer depends but should be between 5 and 20
  
/*
findWinner x and o
findWinner takes an array of three values
the values can be 'x', 'o', or ''
if the values are all 'x' then 'x' is returned
if the values are all 'o' then 'o' is returned
if neither then false is returned
*/

//TODO
const findWinner = (win) => {
  if(win[1] === win[0] && win[2] === win[0]){
    return win[0];
  }
  return false;
}
// console.log(findWinner(['x','x','x']));//'x'
// console.log(findWinner(['o','o','o']));//'o'
// console.log(findWinner(['x','o','o']));//false
// console.log(findWinner(['x', '', 'x']));//false

/*
who goes next - tic tac toe
whoGoesNext takes an array of 'x's and 'o's and ''
these values represent the 9 spaces of a tic-tac-toe board
it returns 'x' if 'x' goes next
it returns 'o' if 'o' goes next
it returns false if there are no spaces
*/

//TODO
const whoGoesNext = (arr) => {
  let whoTurn = {};
    for(let i = 0; i < arr.length; i++){
      let curr = arr[i];
      if(curr in whoTurn){
      whoTurn[curr]++;
      } else {
        whoTurn[curr] = 1;
      }
    }
   if(whoTurn.x + whoTurn.o === arr.length){
      return false;
    } else if (whoTurn.x <= whoTurn.o) {
        return 'x';
    } else {
        return 'o';
    }
  }
  
  // let board = [
  //   'x','o','x',
  //   '', '', '',
  //   '', '', ''
  // ];
  // console.log(whoGoesNext(board));//'o'
  // board[4] = 'o';//
  // console.log(whoGoesNext(board));//'x'
  // board = [
  //   'x','o','x',
  //   'o', 'x', 'o',
  //   'o', 'x', 'x'
  // ];
  // console.log(whoGoesNext(board));//false


  /*
  boardSummary
write boardSummary function
function takes an array of 9 values which are 'x', 'o', or ''
it returns an object with the keys 'x', 'o', and 'empty'
the values are the number of times each of the keys appears.
  */

//TODO
const boardSummary = (board) => {
  //let boardTotal = {x: 0, o: 0, empty:0}
  let boardTotal = {};
for(let i = 0; i < board.length; i++){
  let check = board[i];
    if(check === ''){
      check = 'empty';
  }
  if(check in boardTotal){
    boardTotal[check]++;
    } else {
        boardTotal[check] = 1;
    }
  }
  return boardTotal;
}

// const board = [
//   'x','o','x',
//   'o', 'x', 'o',
//   '', 'x', ''
// ];
// console.log(boardSummary(board));//{x : 4, o: 3, 'empty': 2} 

/*
tic tac toe - getRow
write getRow
getRow takes an array of 9 values made up of x's and o's and empty strings
and an integer which indicates the row to return
it returns an array of 3 values which are the values of the row
*/
//TODO
const getRow = (board, num) => {
  let start = num * 3;
 return board.slice(num * 3, num * 3 +3)
}

let board = [
'x', 'o', 'x',
'o', 'x', 'o',
'x', 'o',  ''
];

// let row = getRow(board, 0);//first row
// console.log(row);//['x', 'o', 'x'];
// row = getRow(board, 1);//second row
// console.log(row);//['o', 'x', 'o'];
// row = getRow(board, 2);//third row
// console.log(row);//['x', 'o', ''];

/*
tic tac toe - getColumn
write getColumn
getRow takes an array of 9 values made up of x's and o's and empty strings
and an integer which indicates the column to return
it returns an array of 3 values which are the values of the column
*/
//TODO
const getColumn = (board, col) => {
  let column = [];
    column.push(board[col], board[col + 3], board[col + 6]);
    return column;
  }
  
  // let board = [
  // 'x', 'o', 'x',
  // 'o', 'x', 'o',
  // '', 'o',  ''
  // ];
  
  // let column = getColumn(board, 0);//first column
  // console.log(column);//['x', 'o', ''];
  // column = getColumn(board, 1);//first column
  // console.log(column);//['o', 'x', 'o'];

/*
computeSumOfKeyLengths
write computeSumOfKeyLengths function
it takes an object
it returns the sum of the lengths of all the keys
let sum = computeSumOfKeyLengths({foo: 'bar', bazz: 2});//7 because foo has 3 letters and bazz has 4
console.log(sum);//7
sum = computeSumOfKeyLengths({});
console.log(sum);//0
sum = computeSumOfKeyLengths({ab: 'c', d: 42});
console.log(sum);//3 because ab has a length of 2 and d has a length of 1
*/
//TODO
const computeSumOfKeyLengths = (obj) => {
  let sum = 0;
for(let key in obj){
  let add = key.length;
  sum += add;
  }
  return sum;
}


// let sum = computeSumOfKeyLengths({foo: 'bar', bazz: 2});//7 because foo has 3 letters and bazz has 4
// console.log(sum);//7
// sum = computeSumOfKeyLengths({});
// console.log(sum);//0
// sum = computeSumOfKeyLengths({ab: 'c', d: 42});
// console.log(sum);//3 because ab has a length of 2 and d has a length of 1

/*
notUsed numbers
the notUsed function takes 2 arrays of numbers
the first array is an array of all available numbers
the second array is an array of numbers which have been used
the function should return an array of unused numbers (numbers from first array, not in the second array)
*/
//TODO
const notUsed = (fullList, used) => {
  let unused = [];
   for(let i = 0; i < fullList.length; i++){
     let currNum = fullList[i]; 
       if(used.indexOf(currNum) === -1){
         unused.push(currNum);
       }
   }
   return unused;
 }
 
//  let list = notUsed([1, 2, 3, 4], [2, 4]);
//  console.log(list);//[1, 3];
//  list = notUsed([8, 9, 10], [9]);
//  console.log(list);//[8, 10];
//  list = notUsed([8, 9, 10], []);
//  console.log(list);//[8, 9, 10];

/*
arrayToObject
arrayToObject takes and an array with an even number of items
it returns an object where the even indexes are keys, and the odd indexes are values
*/
//TODO
//const arrayToObject = (arr) => {
  let obj = {};
    for(let i = 0; i < arr.length; i++){
      if(i % 2 === 0){
        let search = arr[i];
        obj[search] = arr[i + 1];
        }
      }
      return obj;
    // }
   
  
  // console.log(arrayToObject(['a', 1, 'b', 2]));//{ a: 1, b: 2}
  // console.log(arrayToObject(['a', 1, 'b', 2, 'c', 'd']));//{ a: 1, b: 2, c: 'd'}
  

/*
arrayEqualsObject
arrayEqualsObject takes an array of numbers and an object
it returns true if all of the numbers in the array are keys in the object
it returns false otherwise
*/
//TODO
const arrayEqualsObject = (keys, obj) => {
  for(let i = 0; i < keys.length; i++){
    let searchArr = keys[i];
    if(obj[searchArr] === undefined){
      return false;
      }
    }
    return true;
  }
  
  // let isEqual = arrayEqualsObject([1, 2, 3], {1: 'a', 2: 'b', 3: 'c'});//true
  // console.log(isEqual);
  // isEqual = arrayEqualsObject([1, 2, 3], {1: 'a', 2: 'b'});//false
  // console.log(isEqual);
  // isEqual = arrayEqualsObject([], {});//true
  // console.log(isEqual);
  // isEqual = arrayEqualsObject([5, 6], {5: 'x', 6: 'z', 7: 'q'})

/*
getStats - letter counts
write getStats
it takes a string
it returns an object
the keys are the letters in the string
the values are how many times that letter appears in the string
*/

//TODO
const getStats = (str) => {
  let letterCount = {};
  for(let i = 0; i < str.length; i++){
    let letter = str[i];
    if(letterCount[letter] === undefined){
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
      return letterCount;
}
// console.log(getStats('aba'));//{a: 2, b: 1}
// console.log(getStats('ababbc'));//{a: 2, b: 3, c: 1}

/*
transpose an object (flip the keys and values)
write transpose
it takes an object
it returns a new object
the keys and values of the object are transposed (flipped)
*/

const transpose = (obj) => {
  let flipObj = {};
    for(let key in obj){
      flipObj[obj[key]] = key;
    }
    return flipObj;
  }
  // let input = { y: 42, z: 'hello' };
  // let output = transpose(input);
  // console.log(output);//{42: 'y', hello: 'z'}


  /*
  transpose with a twist
write transpose
it takes an object
it returns a new object
the keys and values of the object are transposed (flipped)
BUT if the value is a number, then don't transpose it.
let input = { x: 'y', z: 'q'};
let output = transpose(input);
console.log(output);//{y: 'x', q: 'z'}
input = { y: 42, z: 'hello' };
output = transpose(input);
console.log(output);//{y: 42, hello: 'z'} 
  */

//TODO

const transposeAgain = (obj) => {
  let objFlip = {};
for(let key in obj){
  if(typeof obj[key] !== 'string'){
      console.log(key);
    objFlip[key] = obj[key];
  } else {
    objFlip[obj[key]] = key;
    }
  }
  return objFlip;
}

// let input = { x: 'y', z: 'q'};
// let output = transposeAgain(input);
// console.log(output);//{y: 'x', q: 'z'}
// input = { y: 42, z: 'hello' };
// output = transposeAgain(input);
// console.log(output);//{y: 42, hello: 'z'} 

/*
generateArray
write generateArray
it takes an object with a count property and a data property
it returns an array based on the count and the data
*/

const generateArray = (arrXTimes) => {
  let arrOfData = [];
  let timesToAdd = arrXTimes.count;
  let info = arrXTimes.data;
  for(let i = 0; i < timesToAdd; i++){
  arrOfData.push(info);
  }
  return arrOfData;
}

// let output = generateArray({ count: 2, data: 'hello'});
// console.log(output);//['hello', 'hello'];

/*
template
write template
it takes an array of strings
it returns a string which contains all the strings in the array, with each of them wrapped in two asterisks
*/

const template = (arr) => {
  let stringOfArr = '';
  for(let i = 0; i < arr.length; i++){
  let currItem = arr[i];
    stringOfArr += `**${currItem}** `;
  }
  return stringOfArr;
}
// let input = ['foo', 'bar', 'bazz'];
// let output = template(input);
// console.log(output);//**foo** **bar** **bazz**
// input = ['x', 'y'];
// output = template(input);
// console.log(output);//**x** **y**

/*
more template
write template
it takes an array of objects and a string which is a key in each of those objects in the array
it returns a string
the string returned contains the values of the passed in key for each of the objects
those values are wrapped in double asterisks
*/

//TODO
const templateMore = (arrOfObj, keyName) => {
  let keyStr = '';
  for(let i in arrOfObj){
    let obj = arrOfObj[i];
    for(let key in obj){
    let nameSearch = obj[key];
    if(key === keyName){
      keyStr += `**${nameSearch}** `;
    }
  }
}
  return keyStr;
}

// let input = [{ name: 'foo', id: 1}, { name: 'bar', id: 2}, { name: 'bazz', id: 3}];
// let output = templateMore(input, 'name');
// console.log(output);//**foo** **bar** **bazz**
// output = templateMore(input, 'id');
// console.log(output);//**1** **2** **3**

/*
largestArray (courtesy Kokko)
write largestArr
takes any number of arrays
 */

const largestArr = (...arr) => {
  let largest;
  for(let i  in arr){
    let currArr = arr[i];
    if(!largest){
    largest = currArr;
    }
    if(largest.length < currArr.length){
    largest = currArr;
    }
  }
  return largest;
}
//console.log(largestArr([], ['a', true], ['b']));//['a', true]
//console.log(largestArr([], ['a', true], ['b'], [ 'a', 'b', 'c', 'd']));//[ 'a', 'b', 'c', 'd' ]

/*
indexOf
write indexOf
it takes an array and a value
it returns the index of the value in the array
it returns a negative one if it can't be found
do not use the indexOf array method
*/

const indexOf = (arr, num) => {
  for(let i = 0; i < arr.length; i++){
   let numSearch = arr[i];
    if(numSearch === num){
    return i;
    } 
  }
    return -1;
  }

  // let input = [1, 2, 3, 4, 5];
  // let output = indexOf(input, 3);//2
  // console.log(output);
  // output = indexOf(input, 33);//-1
  // console.log(output);
  // output = indexOf(input, 5);//4
  // console.log(output);

  /*
    isMatch - see if target object has all the properties of another object
isMatch returns true if the first object has all the same keys and values of second object
note the first object can have extra properties, yet still return true
  */

//TODO
/*const isMatch = (obj, objToMatch) => {
 const entries = Object.entries(objToMatch);
  for(let i = 0; i < entries.length; i++){
  const [key, value] = entries[i];
    if(obj[key] !== value){
    return false;
    }
  }
  return true;
} 
Original answer
*/

const isMatch = (obj, objToMatch) => {
  for(let key in objToMatch){
    if(objToMatch[key] !== obj[key]){
     return false;
    }
    }
    return true;
  }
  // console.log(isMatch({}, {x: 1}));//false
  // console.log(isMatch({x: 1, y: 2}, {x: 1}));//true
  // console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 2}));//true
  // console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 1}));//false

  /*
   sum with stopping value
write the function sum
it takes an array of values
it stops counting when it encounters -999 and does not include -999 in the sum
  */

//TODO
const sum = arrOfNums => {
  let sumTill = 0;
  for(let num in arrOfNums){
    let currNum = arrOfNums[num];
    if(currNum === -999){
      return sumTill;
    }
    sumTill+= currNum;
  }
  return sumTill;
}

//console.log(sum([1, 2, -999]));//3
//console.log(sum([-999, 1, 2, 3]));//0

/*
  concat with stopping value
write concat
it is passed an array of strings
it concatenates the strings until it sees the value 'stop' or until is concats all the strings
it returns the concatenated string
console.log(concat(['hello', 'world', 'stop']));//'helloworld';
console.log(concat(['stop', 'hello', 'world']));//''
console.log(concat(['hello', 'world']));//'helloworld'
*/

//TODO
const concat = (words) => {
  let concatinate = '';
    for(let word of words){
      if(word === 'stop'){
        return concatinate;
      }
      concatinate += word;
    }
    return concatinate;
  }
  
  // console.log(concat(['hello', 'world', 'stop']));//'helloworld';
  // console.log(concat(['stop', 'hello', 'world']));//''
  // console.log(concat(['hello', 'world']));//'helloworld'


/*

*/