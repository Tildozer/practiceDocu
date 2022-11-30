/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.


*/

function past(h, m, s){
    //#Happy Coding! ^_^
    let totMilli = 0;
    let sec = s * 1000;
    let min = m * 60000;
    let hour = h * 3600000;
    return sec + min + hour;
  }

  /*other solution
  function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
  */


/*
DESCRIPTION:
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle
*/

const areaOrPerimeter = function(l , w) {
    // Return your answer
    if(l === w){
      return l * l;
    } else {
      return l * 2 + w * 2;
    }
  };

  /* other solution
  const areaOrPerimeter = function(l , w) {
  let area = l * w;
  let perimeter = (l + w) * 2;
  
  return l === w ? area : perimeter;
};
  */

/*
DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!


*/

function doubleChar(str) {
    let dub = '';
    for(let i = 0; i < str.length; i++){
      dub += str[i] + str[i]
    }
    return dub
  
  }
  
  /*other solution
  function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
  */

/*
DESCRIPTION:
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".

*/

function hoopCount (n) {
    //your code goes here
   if(n < 10){
     return `Keep at it until you get it`
   }
   return `Great, now move on to tricks`
 }


 /*
 DESCRIPTION:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


 */

 function feast(beast, dish) {
    //your function here
      let i = beast.length - 1;
      let j = dish.length - 1;
      if(beast[0] === dish[0] && beast[i] === dish[j]){
        return true;
      }
      return false;
    }

    /* othersolution
    function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
    */


/*
DESCRIPTION:
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

*/

function enough(cap, on, wait) {
    // your code here
    let howMuch = on + wait;
    let check = howMuch - cap;
    if(check < 0){
      return 0;
    }
    return check;
  }

  /*
  otherSolution

  function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

  */

/*
DESCRIPTION:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


*/

function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 27.777777777778)
  }

/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


*/

function squareSum(numbers){
    let prodSum = 0;
    for(let i = 0; i < numbers.length; i++){
      let num = numbers[i];
      prodSum = prodSum + num * num;
    }
    return prodSum;
  }


  /*
  DESCRIPTION:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
  */

  function bmi(weight, height) {
    let heightSq = height * height;
    let bmiCheck = weight / heightSq
    if(bmiCheck <= 18.5){
      return 'Underweight'
    } else if(bmiCheck <= 25.0){
      return 'Normal'
    } else if(bmiCheck <= 30.0){
      return 'Overweight'
    }else {
     return "Obese";
    }
  }

/*
DESCRIPTION:
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)


*/

reverse = function(array) {
    // TODO: program me!
    let finalArr = [];
    for(let i = array.length -1; i >= 0; i--){
      finalArr.push(array[i]);
    }
    return finalArr;
  }

/*
DESCRIPTION:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
    z.push(i * x);
    }
    return z;
  }

  /*
  DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.


  */

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestNum = args[0];
      for(let i = 0; i < args.length; i++){
        let numCheck = args[i];
        if(numCheck < smallestNum){
          smallestNum = numCheck;
        }
      }
      return smallestNum;
    }
  }