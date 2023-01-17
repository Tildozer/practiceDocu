/*
Tone It Down
Write a function called toneItDown:

It should take 1 parameter, which is a function
It should return 5 less than the returned value of the passed in function
If toneItDown would return a value less than 0, return 0 instead
Examples:
function tenMaker(){ 
  return 10;
}
toneItDown(tenMaker) // returns 5
function fourMaker(){
  return 4;
}
toneItDown(tenMaker) // returns 0
*/

function toneItDown(tenMaker) {
  //write code here
  let funcNum = tenMaker();
  let sub = funcNum - 5;
  if (sub < 0) {
    return 0;
  }
  return sub;
}

/* 
Finder Function
Write a function called finderFunc:

It should take 2 parameters, the first is an array, the second is a callback function
It should pass each element from the array into the callback function
If the callback function returns true, then return the index of the current element
If the callback never returns true then it should return -1
Examples:
let numbers = [1, 3, 5, 64, 7, 12];
let evens = [2, 4, 6, 8, 10, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
    return !(num % 2);
}

console.log(finderFunc(numbers, isEven)) // 3 
console.log(finderFunc(evens, isEven)) // 0 
console.log(finderFunc(odds, isEven)) // -1
*/

function finderFunc(arr, callback) {
  //write code here
  let map = arr.map(function (element, idx) {
    return callback(element);
  });
  return map.indexOf(true);
}

/*
Who's a Special
Write a function called whosASpecial:

It should take 1 parameter, which is an array
It should return a string saying that each pet in the array is special. See the below example
It should use .forEach in your answer
Examples:
let specialPets = [
  {
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];
whosASpecial(specialPets) should return this string:

"Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!"
*/

function whosASpecial(pets) {
  // Your code here
  let string = "";
  pets.forEach((element, idx) => {
    if (idx !== 0) {
      string += " ";
    }
    string += `${element.name} the ${element.species} is very special!`;
  });
  return string;
}

/*
Phone Book
Write a function called phoneBook:

It should take 2 parameters

a) the first is an array of objects called people

b) the second is a string representing a a property of that object to look for

It should return an array of elements of the matching property from the object.

It should use map in your solution
Examples:
let list = [
  {
    name: 'Doug',
    age: 22,
    phone: '755-555-5444'
  },
  {
    name: 'Lily',
    age: 25,
    phone: '723-555-2211'
  },
  {
    name: 'Sarah',
    age: 30,
    phone: '718-555-3154'
  }
];

console.log(phoneBook(list, 'age')) // should return [22,25,30]
console.log(phoneBook(list, 'name')) // should return ['Doug', 'Lily', 'Sarah']
*/

function phoneBook(arrOfObj, propOfObj) {
  //write code here
  let info = [];
  arrOfObj.map((x) => {
    info.push(x[propOfObj]);
  });
  return info;
}

/*
Names Too Long
Write a function called namesTooLong:

It should take 1 parameter, which is an array of names (strings)
It should return a new array that only contains names with a length less than or equal to 8
It should use filter in your solution
Examples:
let nameArray = ['Corey', 'Desdemona', 'Montgomery', 'Danielle'] 

console.log(namesTooLong(nameArray)) // should return ['Corey', 'Danielle']
*/

function namesTooLong(names) {
  //write code here
  let shortNames = names.filter((name) => {
    return name.length < 9;
  });
  return shortNames;
}

/* 
Carded
Write a function called carded:

It should take 1 parameter, which is an array of objects with name and age properties
It should return a new array containing only the names of people who are 21 years old or older
It should use filter in your solution
Examples:
const people = [
  {
    name: 'Lily', 
    age: 25
  }, {
    name: 'Andy', 
    age: 9
  }, {
    name: 'Danielle', 
    age: 30
  }
];

console.log(carded(people)) // should return ['Lily', 'Danielle']
*/

function carded(arrOfObj) {
  //write code here
  let over21 = [];
  arrOfObj.forEach((element) => {
    if (element.age > 20) {
      over21.push(element.name);
    }
  });
  return over21;
}

/* 
Only the Best
Write a function called onlyTheBest, which will be used for quality control at your local cookie shop.

It should take 3 parameters

a) The first is an array of objects called cookies. Each cookie has a type (string), a size (number), and a number representing the number of cookies for that batch (number)

b) the second is a callback function that will run on each cookie to ensure quality control

c) the third, is the type of cookie that we are interested in

It should return the sum total of all of the cookies that are of the specified type and that meet the quality control standards (aka size)

If no cookies are of the specified type and/or no cookies meet the quality control standards, then the total size of the batch will be 0.
It should use reduce in your solution
Examples:
const cookies = [
  {
    type: 'chocolate chip',
    size: 2, 
    number: 3
  },
  {
    type: 'oatmeal raisin',
    size: 3, 
    number: 5
  },
  {
    type: 'chocolate chip',
    size: 4, 
    number: 2
  },
  {
    type: 'thin mint',
    size: 1, 
    number: 1000000
  }
];

const cookieChecker = (cookie) => {
  return cookie.size > 2
};

console.log(onlyTheBest(cookies, cookieChecker, 'chocolate chip')) // should return 2
*/

function onlyTheBest(cookies, callback, typeWeWant) {
  //write code here
  let map = cookies.map((element) => {
    if (element.type === typeWeWant && callback(element)) {
      return element.number;
    } else {
      return 0;
    }
  });
  if (map.length === 0) {
    map = 0;
  }
  let initialVal = 0;
  let reduce = map.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    initialVal
  );
  return reduce;
}

/* 
My Filter
Write a function called myFilter:

It should take 2 parameters

a) The first is an array

b) the second is a callback function that will act as the filter

It should return a new array with only the values that when passed into the callback function return true

DO NOT use the built-in filter function in your solution.
Examples:
const numbersArr = [2,3,4,6,7,8,10]

const isEven = (element) => {
  return element % 2 === 0
}

const isNull = (element) => {
  if(element === null){
    return true
  } else {
    return false
  }
}

const isOdd = (element) => element % 2 !== 0  

console.log(myFilter(numbersArr, isEven)) // should return [2,4,6,8,10]

console.log(myFilter(numbersArr, isNull)) // should return []

console.log(myFilter(numbersArr, isOdd)) // should return [3,7]
*/

function myFilter(arr, callback) {
  //write code here
  let trueArr = [];
  arr.forEach((element) => {
    let trueOr = callback(element);
    if (trueOr === true) {
      trueArr.push(element);
    }
  });
  return trueArr;
}

/* 
My Map
Write a function called myMap:

It should take 2 parameters

a) The first is an array

b) the second is a callback function that will run on each element of the passed in array.

It should return a new array with the return values of the callback function after it is called on each element.

The original array should NOT be modified
DO NOT use the built-in map function in your solution.
Examples:
const numbersArr = [2,4,6,8,10]

const doubleNumbers = (num) => {
  return num * 2
};

console.log(myMap(numbersArr, doubleNumbers)) // should return [4,8,12,16,20]
*/

function myMap(arr, callback) {
  //write code here
  let mapped = [];
  arr.forEach((element) => {
    let newElement = callback(element);
    mapped.push(newElement);
  });
  return mapped;
}
