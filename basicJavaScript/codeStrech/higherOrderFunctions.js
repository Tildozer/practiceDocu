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
  
  /*
    catMarkup
catMarkup
takes an array of cat names
returns an array of the cat names in upper case
console.log(catMarkup(['fluffy', 'meeka']));//['FLIUFFY', 'MEEKA']
console.log(catMarkup(['fluffy', 'meeka', 'itchy']));//['FLIUFFY', 'MEEKA', 'ITCHY']
  */

//TODO

const catMarkup = cats => (
  cats.map(catName => catName.toUpperCase())
  );
  
  // console.log(catMarkup(['fluffy', 'meeka']));//['FLIUFFY', 'MEEKA']
  // console.log(catMarkup(['fluffy', 'meeka', 'itchy']));//['FLIUFFY', 'MEEKA', 'ITCHY']

  /*
    fourByFour
fourByFour takes a list of words
returns all four letter words
if there are more than four words it only returns the first four
  */

//TODO
const fourByFour = (names) => {
  let filteredNames = names.filter(name =>  name.length === 4)
  while (filteredNames.length > 4){
    filteredNames.pop();   
}
return filteredNames;
}

// console.log(fourByFour(['foo', 'bar', 'fizz', 'buzz']));//['fizz', 'buzz']
// console.log(fourByFour(['foo', 'bar', 'fizz', 'buzz', 'boat', 'tack', 'bill']));//['fizz', 'buzz', 'boat', 'tack']

/*
findFriendPairs
findFriendPairs
takes an array of objects
each object can have a list of friends
returns the pairs of friends
*/

const findFriendPairs = (people) => {
  const peopleWithFriends = people.filter(person => person.friends);
  const names = peopleWithFriends.map(person => person.name);
  const friendsList = peopleWithFriends.map(person => person.friends.map(friend => friend.name));
  
    return friendsList.map((friends, idx) => friends.map((friend) => [names[idx], friend])).flat();
}
// that took me to long to do...
// const people = [
//   {
//     name: 'moe',
//     friends: [
//       {
//         name: 'larry'
//       },
//       {
//         name: 'curly'
//       },
//     ]
//   },
//   {
//      name: 'lucy'
//   },
//   {
//      name: 'ethyl',
//      friends: [
//        { name: 'lucy' }
//      ]
//   }
// ];
// console.log(findFriendPairs(people));//[['moe', 'larry'], ['moe', 'curly'], ['ethyl', 'lucy']]

/*
object generator
generateObject takes a set of strings and returns an object
each entry in the object consists of a key and value which corresponds to the string
const obj = generateObject('FOO', 'BAR', 'BAZZ');
*/

//TODO
const generateObject = (...arr) => {
  let obj = {};
  arr.forEach(key => obj[key] = key);
    return obj;
}
// I can't remember how to make an object pair with recuce() so this was the best I could do.
//const obj = generateObject('FOO', 'BAR', 'BAZZ');

//console.log(obj);
/*
{
  BAR: "BAR",
  BAZZ: "BAZZ",
  FOO: "FOO"
}*/

/*
findPopularPeople - those with more than one friend!
findPopularPeople
takes an array of objects
each object can have a list of friends
returns the names of users who have more than one friend
*/

//TODO
/* 
const findPopularPeople = (people) => {
  let mostPop;
  for(let key in people){
    let person = people[key];
    if(!mostPop){
      mostPop = person;
    }
    //if(person.friends.length > mostPop.friends.length){
     //mostPop = person
   // }
  }
}
Didn't finish, profs answer below
*/

const findPopularPeople = () => {
  return people.filter(person => person.friends && person.friends.length > 1)
  .map(person => person.name);
}
// const people = [
//   {
//     name: 'moe',
//     friends: [
//       {
//         name: 'larry'
//       },
//       {
//         name: 'curly'
//       },
//     ]
//   },
//   {
//      name: 'lucy'
//   },
//   {
//      name: 'ethyl',
//      friends: [
//        { name: 'lucy' }
//      ]
//   }
// ];
// console.log(findPopularPeople(people));//['moe']

/**
 * Anagram Test
Write a function that takes in two strings and returns a boolean based on if they are anagrams of each other
anagrams are words which have the exact same letters in different orders
 */

//TODO
const isAnagram = (word, wordTwo) => {
  const longerWord = word.length > wordTwo.length ? word.length : wordTwo.length;
  let wordArr = word.split('');
  
  for(let i = 0; i < longerWord; i++){
    const letterCheck = wordArr.indexOf(wordTwo[i]);
    if(letterCheck !== -1){
      wordArr.splice(letterCheck, 1)
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("cinema", "iceman")); // true
// console.log(isAnagram("the eyes", "they see")); // true
// console.log(isAnagram("waffle", "nutmeg")) // false
// console.log(isAnagram("build", "building")); // false

/**
 * who goes next - tic tac toe
whoGoesNext takes an array of 'x's and 'o's and ''
these values represent the 9 spaces of a tic-tac-toe board
it returns 'x' if 'x' goes next
it returns 'o' if 'o' goes next
it returns false if there are no spaces
 */

//TODO
const whoGoesNext = (board) => {
  const pieceCount = board.reduce((howMany, piece) => {
    howMany[piece]++;
    return howMany;
  }, {x: 0, o: 0});
  
  if(pieceCount.x + pieceCount.o === 9){
   return false;
  } 
  if(pieceCount.x > pieceCount.o){
    return 'o';
  } 
  return 'x';
}
let board = [
  'x','o','x',
  '', '', '',
  '', '', ''
];
console.log(whoGoesNext(board));//'o'
board[4] = 'o';//
console.log(whoGoesNext(board));//'x'
board = [
  'x','o','x',
  'o', 'x', 'o',
  'o', 'x', 'x'
];
console.log(whoGoesNext(board));//false


/**
 * processScores

    processScores takes string, with line breaks
    each row represents a student
    each row is delimited by commas
    the first value in the row is the name
    the rest of the values are scores
    processScores returns an object, where keys are names and values are score averages
    finish writing processScores

 */

const str = `
moe,100,80,90
lucy,100,99,98
curly,80,81,82
`;

const processScores = (data)=> {
  const result = {};
  data.trim().split('\n').forEach( row => {
    const parts = row.split(',')
    const name = parts[0];
    const scores = parts.slice(1);
    let sum = 0;
    scores.forEach( score => {
      sum += +score;
    })
    const average = sum / scores.length;
    result[name] = average;
  });
  return result; 
}
// console.log(processScores(str));//{moe: 90, lucy: 99, curly: 81}

/**
 * peopleAndPets
write peopleAndPets
returns all the users and an array of the pets that user owns
 */

//TODO
//const peopleAndPets = () => {
  //return people.map(person => {return person})
//}

const peopleAndPets = () => {
  let results = [];
  people.forEach( person => {
    person.pets = [];
    ownerships.forEach( ownership => {
      if(ownership.personId === person.id){
        const pet = pets.find(pet => pet.id === ownership.petId);
        person.pets.push(pet);
      }
    })
    results.push(person);
  })
  return results;
}


const pets = [
  { id: 1, name: 'Fido'},
  { id: 2, name: 'Rex'},
  { id: 3, name: 'Fluffy'},
];

const people = [
  { id: 1, name: 'Prof'},
  { id: 2, name: 'Pete'},
  { id: 3, name: 'Stanley'},
  { id: 4, name: 'Ben'},
];

const ownerships = [
  { personId: 2, petId: 2},
  { personId: 3, petId: 2},
  { personId: 3, petId: 3},
];

//console.log(peopleAndPets());
/*
[
  {
    "id": 1,
    "name": "Prof",
    "pets": []
  },
  {
    "id": 2,
    "name": "Pete",
    "pets": [
      {
        "id": 2,
        "name": "Rex"
      }
    ]
  },
  {
    "id": 3,
    "name": "Stanley",
    "pets": [
      {
        "id": 2,
        "name": "Rex"
      },
      {
        "id": 3,
        "name": "Fluffy"
      }
    ]
  },
  {
    "id": 4,
    "name": "Ben",
    "pets": []
  }
] */

/**
 * Capitalize Every Other Letter
Write a function that capitalizes every other letter in a string starting with the first
 */

//TODO
const stringConverter = (str) => {
  /*let newStr = ''; 
  let acc = 0
  for(let i = 0; i < str.length; i++){
    let letter = str[i];
    if(acc % 2){
      newStr += letter.toLowerCase();
    } else {
      newStr += letter.toUpperCase();
    }
    if(letter.match(/[a-z]/i)){
      acc++;
    }
  }
  return newStr;*/
  const strArr = [...str];
  let acc = 0;
  
  return strArr.reduce( (newStr, letter) => {
    acc % 2 ?
      newStr += letter.toLowerCase()
    : newStr += letter.toUpperCase();
    
    if(letter.match(/[a-z]/i)){
      acc++;
    }
    
    return newStr;
  }, '');
}
// console.log(stringConverter("That was so cool!!!! Let's do it again!")); // "ThAt WaS sO cOoL!!!! lEt'S dO iT aGaIn!"
// console.log(stringConverter("My name is Jon and I am so serious right now!")); // "My NaMe Is JoN aNd I aM sO sErIoUs RiGhT nOw!"

/**
 * Searching An Object For A String
write objectContainsString
returns true if one of the values in the passed in object contains the passed in string
Search is case insensitive
returns false otherwise
 */

//TODO
const objContainsString = (obj, str) => {
  for(let key in obj){
    if(obj[key].toLowerCase().includes(str.toLowerCase())){
      return true;
    }
  }
  return false;
}

// console.log(objContainsString({
//   x: 'Foo',
//   b: 'bare'
// }, 'foo'));//true
// console.log(objContainsString({
//   x: 'Foo',
//   b: 'bare'
// }, 'bar'));//true
// console.log(objContainsString({
//   one: 'Foo',
//   two: 'bare'
// }, 'bazz'));//false
// console.log(objContainsString({}, 'whatever'));//false

/**
 * find length of short keys
write countKeyLength
it takes an object
it returns a number which is the string length of all the combined keys
but don't count keys which are longer than 3 characters
 */

//TODO
const obj = {
  foo: 'hello',
  bar: 'world',
  bazz: '!!'
}

const countShortKeys = (obj) => {
  let keyLength = 0;
  for(let key in obj){
    if(key.length < 4){
      keyLength += key.length;
    }
  }
  return keyLength;
}

// console.log(countShortKeys(obj));//6 because the short keys are foo and bar
// delete obj.foo;
// console.log(countShortKeys(obj));//3 because the short keys are bar
// delete obj.bar;
// console.log(countShortKeys(obj));//0 because there are no short keys

/**
 * processScores
processScores takes string, with line breaks
each row represents a student
each row is delimited by commas
the first value in the row is the name
the rest of the values are scores
processScores returns an object, where keys are names and values are score averages
finish writing processScores

 */

const studentsScores = `
moe,100,80,90
lucy,100,99,98
curly,80,81,82
`;

const processScoresStr = (data)=> {
  const result = {};
  data.trim().split('\n').forEach( row => {
    const parts = row.split(',')
    const name = parts[0];
    const scores = parts.slice(1);
    let sum = 0;
    scores.forEach( score => {
      sum += +score;
    })
    const average = sum / scores.length;
    result[name] = average;
  });
  return result; 
}
//console.log(processScoresStr(studentsScores));//{moe: 90, lucy: 99, curly: 81}

