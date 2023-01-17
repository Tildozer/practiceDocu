// Question dogBreeder;
/*
Define a function, dogBreeder, that accepts up to two optional arguments:

name (string)
age (number)
dogBreeder should return an object that represents a new dog! If the user doesn't define a name, assume the dog's name is 'Steve'. If the user doesn't define the dog's age, assume the dog's age is 0.

dogBreeder('Sam', 12) // => {name: 'Sam', age: 12}

dogBreeder(15) // => {name:'Steve', age: 15}
*/

// YOUR CODE BELOW
const dogBreeder = (name, age) => {
  let dogInfo = {};

  dogInfo.name = name;

  dogInfo.age = age;

  if (dogInfo.name === undefined) {
    dogInfo.name = "Steve";
  }
  if (dogInfo.age === undefined) {
    dogInfo.age = 0;
  }
  if (typeof dogInfo.name === typeof 1) {
    dogInfo.age = name;
    dogInfo.name = "Steve";
  }
  return dogInfo;
};

// console.log(dogBreader('Snoopy', 3));
// console.log(dogBreader('Snoopy'));
// console.log(dogBreader());
// console.log(dogBreader(3));

/*
// if the user didn't provide a second argument...
  if (age === undefined) {
  
      // ...check to see if the user inputted the age as the first argument
      if (typeof name === 'number') {
  
        // if the first argument is the age, assign that value to the age parameter
        age = name;
  
        // set name to null, since we don't know what the name is
        name = null;
      }
  
      // otherwise, use the default value for age
      else {
        age = 0;
      }
    }
  
    // if we don't have a name yet...
    if (!name) {
  
      // ...use the default name here
      name = 'Steve';
    }
  
    let newDog =  {
      name: name,
      age: age
    };
  
    return newDog;
  }
  
  // alternative solution using ES6 default parameters
  
  function dogBreeder(name='Steve', age=0) {
    if (typeof name === 'number') {
      age = name;
      name = 'Steve'
    }
  
    let newDog =  {
      name: name,
      age: age
    };
  
    return newDog;
  }
  */

// question frequencyAnalaysis;
/* 
Frequency Analysis
Define a function frequencyAnalysis that accepts a string of lower-case letters as an argument.

frequencyAnalysis should return an object containing the amount of times each letter appeared in the string.

frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
*/
// YOUR CODE BELOW

const frequencyAnalysis = (str, letter) => {
  let letterCount = {};

  for (let i = 0; i < str.length; i++) {
    let strCount = str[i];

    if (strCount in letterCount === false) {
      letterCount[strCount] = 1;
    } else {
      letterCount[strCount]++;
    }
  }
  // console.log(letterCount);
  return letterCount;
};

// console.log(frequencyAnalysis('i like pumpkins'));
// console.log(frequencyAnalysis('tomato soup is bomb'));
// console.log(frequencyAnalysis('wheres the water at?'));

/*
function frequencyAnalysis(string) {
  let charFrequencies = {};

  // loop through every character in the string
  for (let i = 0; i < string.length; i++) {

    // store the current character in a variable
    let char = string[i];

    // if the character hasn't been added to the object yet...
    if (!charFrequencies[char]) {

      // ...add it to the object now, starting the count at 1
      charFrequencies[char] = 1;
    }
    else {

      // otherwise, increment the count by one for that character
      charFrequencies[char]++;
    }
  }

  // return the object after the for loop
  return charFrequencies;
}
*/

// question petSounds;
/*
Pet Sounds
Write a function petSounds that takes an animal name and a country name as arguments.

Using the globally-defined animalNoises array, petSounds should return a sentence that explains which sound the animal makes in the given country.

petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!

petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!
*/

let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

const petSounds = (animal, region) => {
  for (let i = 0; i < animalNoises.length; i++) {
    let animalObject = animalNoises[i];

    if (animal in animalObject) {
      let countrySound = animalObject[animal];

      let sound = countrySound[region];

      animal = animal[0].toUpperCase() + animal.slice(1) + "s";

      // console.log(animal)
      return `${animal} in ${region} say ${sound}`;
    }
  }
};

//    console.log(petSounds('dog', 'Korea'));
//    console.log(petSounds('cat', 'Algeria'));
//    console.log(petSounds('chicken', 'Uruguay'));
//    console.log(petSounds());

/*
 function petSounds(animal, country) {

  // loop through the animalNoises array
  for (let i = 0; i < animalNoises.length; i++) {

    // store each animal object in a variable
    let animalObject = animalNoises[i];

    // if the animal is a key in that animal object...
    if (animal in animalObject) {
      // ... we're looking at the right object for this animal!

      // store the object with the countries and sounds for this animal in a variable
      let countrySounds = animalObject[animal];

      // store the specific sound we're looking for in a variable
      let sound = countrySounds[country];

      // format the animal string correctly
      animal = animal[0].toUpperCase() + animal.slice(1) + 's';

      // return the final string, concating all of the pieces together
      return animal + ' in ' + country + ' say ' + sound;
    }
  }
}

// alternative solution using ES6 string interpolation
function petSounds2(animal, country) {
  for (let i = 0; i < animalNoises.length; i++) {
    let animalObject = animalNoises[i];

    if (animal in animalObject) {
      let countrySounds = animalObject[animal];
      let sound = countrySounds[country];

      animal = animal[0].toUpperCase() + animal.slice(1);

      return `${animal}s in ${country} say ${sound}`;
    }
  }
}
  */

// question attendanceCheck;

/*
Attendance Check
Define a function, attendanceCheck, that accepts a string argument corresponding to a day of the week.

Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.

classCheck('Monday'); // => ['Marnie', 'Shoshanna']

classCheck('Wednesday'); // => ['Marnie', 'Lena']
*/

let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
const attendanceCheck = (day) => {
  let studentsOnDay = [];

  for (let i = 0; i < classRoom.length; i++) {
    let classCheck = classRoom[i];

    let studentName = Object.keys(classCheck)[0];

    let studentAtt = classCheck[studentName];

    for (let j = 0; j < studentAtt.length; j++) {
      let dayCheck = studentAtt[j];

      let dayName = Object.keys(dayCheck)[0];
      if (dayName === day && dayCheck[dayName]) {
        studentsOnDay.push(studentName);
      }
    }
  }
  return studentsOnDay;
};

// console.log(attendanceCheck('Monday'));
// console.log(attendanceCheck('Tuesday'));
// console.log(attendanceCheck('Wednesday'));
// console.log(attendanceCheck('Thursday'));
// console.log(attendanceCheck('Friday'));

/*
  function attendanceCheck(day) {
    let presentStudents = [];
  
    // loop through the students in classRoom
    for (let i = 0; i < classRoom.length; i++) {
  
      // store each student object in a variable
      let studentObj = classRoom[i];
  
      // each object has one key, which is the name of the student
      let studentName = Object.keys(studentObj)[0];
  
      // the only value in studentObj is the array of attendance objects
      let attendanceObjs = studentObj[studentName];
  
      // loop through the array of attendance objects
      for (let j = 0; j < attendanceObjs.length; j++) {
  
        // store each attendance object in a variable
        let attendanceObj = attendanceObjs[j];
  
        // each attendance has one key, which is the name of a day of the week
        let dayName = Object.keys(attendanceObj)[0];
  
        // if the dayName is the same as the day parameter...
        // ...and the value in the attendanceObj is true...
        if (dayName === day && attendanceObj[dayName]){
  
          // ...the student was present on that day!
          presentStudents.push(studentName);
        }
      }
    }
  
    return presentStudents;
  }*/

//   question leetTranslator;
/*
Leet Translator
"Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

Define a function called leetTranslator that take a string of normal characters.

leetTranslator should return a new string that is the translation of the original string into leet.

The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.
*/

const leetCodex = {
  a: "@",
  b: "8",
  c: "(",
  d: "|)",
  e: "3",
  f: "ph",
  g: "g",
  h: "#",
  i: "l",
  j: "_|",
  k: "|<",
  l: "1",
  m: "|'|'|",
  n: "//",
  o: "0",
  p: "|D",
  q: "(,)",
  r: "|2",
  s: "5",
  t: "+",
  u: "|_|",
  v: "|/",
  w: "|/|/",
  x: "><",
  y: "j",
  z: "2",
  " ": " ",
};

const leetTranslator = (cypher) => {
  let solution = "";
  for (let i = 0; i < cypher.length; i++) {
    let current = cypher[i].toLowerCase();
    solution += leetCodex[current];
  }
  return solution;
};

// console.log(leetTranslator('fullstack'));
// console.log(leetTranslator('Hopper'));
// console.log(leetTranslator('butter toast'));
// console.log(leetTranslator(''));

/*

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
function leetTranslator(originalString) {

  // we'll use an object to translate letters to leet
  let leetDict = {};

  // loop through every letter in letters
  for (let i = 0; i < letters.length; i++) {

    // store the current letter in a variable
    let letter = letters[i];

    // store the leetChar at the same index in another variable
    let leetChar = leetChars[i];

    // add the letter/leetChar as a key/value pair in the object
    leetDict[letter] = leetChar;
  }

  let leetString = '';

  // loop through the originalString
  for (let i = 0; i < originalString.length; i++) {

    // store the current letter in a variable
    let letter = originalString[i].toLowerCase();

    // get the letter's corresponding leetChar from the leetDict
    let leetChar = leetDict[letter];

    // concat the leetChar onto the leetString
    leetString += leetChar;
  }

  // return the leetString after the for loop
  return leetString;
}
*/

// question compareObjects;

/*
Compare Objects
Define a function, compareObjects, that accepts two objects as arguments.

compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.

compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
*/

// YOUR CODE BELOW
const compareObjects = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

//   console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 2})); //true
//   console.log(compareObjects({a: 1, b: 2}, {a: 1, c: 2})); //false
//   console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 3})); //false
//   console.log(compareObjects(({a: 1, b: 2}, {a: 1}));  //false
//   console.log(compareObjects({a: 1}, {a: 1, b: 2}));  //false

/*
function compareObjects(obj1, obj2) {

  // loop through the keys in obj1
  for (let key in obj1) {

    // if obj1 and obj2 have different values for any key...
    if (obj1[key] !== obj2[key]) {

      // ...immediately return false
      return false;
    }
  }

  // repeat for obj2
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  // if we never found a mismatched key/value pair, return true
  return true;
}
// Alternative Approach

function compareObjects(object1, object2) {
  // if the two objects are not the same size, their key/val pairs cannot match
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // since we already checked if the two objects are same in size,
  // we now only need to check in "one direction" (different from approach 1)
  for (let key in object1) {
    // if obj1 and obj2 have different values for any key...
    if (object1[key] !== object2[key]) {
      // ...immediately return false
      return false;
    }
  }
  return true;
}
*/
// question lastFridayNight;

/*
Last Friday Night
According to the song, Katy Perry "maxed our credit cards".

Define a function, lastFridayNight, takes an array of transactions.

lastFridayNight should return the total amount she spent last Friday night.





let transactions = [
      {
        name: 'apples',
        amount: 5
      },
      {
        name: 'kleenex',
        amount: 2
      },
      {
        name: 'knitting supplies',
        amount: 10,
      }
*/

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

// YOUR CODE BELOW
const lastFridayNight = (transactions) => {
  let sum = 0;

  for (let i = 0; i < transactions.length; i++) {
    let addAmount = transactions[i];

    let cost = addAmount.amount;
    // let cost = transaction[i].amount // also acceptable instead of the two variables
    sum += cost;
  }
  return sum;
};

//   console.log(lastFridayNight(transactions))

/*
function lastFridayNight(transactions){
  let total = 0;

  // loop through all of the transactions
  for (let i = 0; i < transactions.length; i++) {

    // store each transaction in a variable (optional)
    let transaction = transactions[i];

    // add the value stored in the object's amount property to the running total
    total += transaction.amount;
  }

  // return total after the for loop
  return total;
}
*/
