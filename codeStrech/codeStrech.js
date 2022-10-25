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


