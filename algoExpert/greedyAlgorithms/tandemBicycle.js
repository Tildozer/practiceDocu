/*
A tandem bike is a bike that's operated by two people: person A and person B.
Both people pedal the bike, but the person that pedals the faster dictates the speed of the bicycle. 
So if person A pedals at a speed of `5`, and person B pedals at a speed of `4`, the tandem bike moves at a speed of `5` i.e(tandemSpeed = max(speedA, speedB) ).

You're given two list of positive integers: one which is the speed that they pedal a tandem bike at.
Both list have the same length, meaning that there are as many red-shirt riders as there are blue-shirt riders.
Your goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate the tandem bike.

Write a function taht returns the maximum possible total seep of all of the tande bikes being ridden based on an input parameter, `fastest`.
If `fastest = true`, your function should return the maximum possible total speed: otherwise it should return the minimum total speed.
"Total speed" is defined as the sum of the speeds of all the tande bikes being ridden. 
For example, if there are 4 riders (2 red shirt riders and 2 blue shirt riders) who have speeds of `1, 3, 4, 5` and if they're paired on tandem bike as follows: [1, 4], [5, 3], then the total speed of these tandem bikes is `4 + 5 = 9`.
*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    const redShirtsSorted = redShirtSpeeds.sort((a, b) => a - b);
    const blueShirtsSorted = blueShirtSpeeds.sort((a, b) => a - b);
    let partnerArray = []
    if(fastest){
      _tandemBicycleHelper(blueShirtsSorted, redShirtsSorted, partnerArray)
    } else {
      for (let i = 0; i < redShirtSpeeds.length; i++) {
        partnerArray.push([redShirtsSorted[i], blueShirtsSorted[i]])
      }
    }
    let sum = 0;  
    partnerArray.forEach(partner => {
      sum += Math.max(...partner)
    })
    return sum;
  }
  
  function _tandemBicycleHelper(blueShirtSpeeds, redShirtSpeeds, partnerArray){
    const half = redShirtSpeeds.length / 2
      if(half % 1 !== 0){
        partnerArray.push([redShirtSpeeds[Math.floor(half)], blueShirtSpeeds[Math.floor(half)]]) 
      }
      for (let i = 0; i < Math.floor(half); i++) {
        partnerArray.push([redShirtSpeeds[i], blueShirtSpeeds[blueShirtSpeeds.length - (i + 1)]])
        partnerArray.push([blueShirtSpeeds[i], redShirtSpeeds[redShirtSpeeds.length - (i + 1)]]) 
      }
  }
  




// ---------- Test Case 1 ----------
console.log([ 2, 3, 5, 5, 9 ], [ 1, 2, 3, 6, 7 ], true);// 32
// ---------- Test Case 2 ----------
console.log([ 2, 3, 5, 5, 9 ], [ 1, 2, 3, 6, 7 ], false);// 25
// ---------- Test Case 3 ----------
console.log([ 1, 1, 2, 3, 9, 12 ], [ 1, 2, 3, 3, 4, 6 ], false);// 30
// ---------- Test Case 4 ----------
console.log([ 1, 1, 2, 3, 9, 12 ], [ 1, 2, 3, 3, 4, 6 ], true);// 37
// ---------- Test Case 5 ----------
console.log(
  [1, 1, 1, 1,  2, 3, 9, 12, 21, 32, 54, 231], 
  [1, 2, 3, 3,  4, 5, 6, 6, 32, 34, 123, 256],
  true
);// 816
// ---------- Test Case 6 ----------
console.log(
  [1, 1, 1, 1, 2, 3, 9, 12, 21, 32, 54, 231], 
  [1, 2, 3, 3, 4,5, 6, 6, 32, 34, 123, 256],
  false
);// 484
// ---------- Test Case 7 ----------
console.log([ 1 ], [ 5 ], true);// 5
// ---------- Test Case 8 ----------
console.log([ 1 ], [ 5 ], false);// 5
// ---------- Test Case 9 ----------
console.log([ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], true);// 4
// ---------- Test Case 10 ----------
console.log([ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], false);// 4
// ---------- Test Case 11 ----------
console.log(
  [1, 1, 1, 1,  2, 2, 2, 2, 9, 11], 
  [1, 1, 1, 1, 3, 3, 3, 3, 5, 7],
  true
);// 48
// ---------- Test Case 12 ----------
console.log(
  [1, 1, 1, 1,  2, 2, 2, 2, 9, 11], 
  [1, 1, 1, 1, 3, 3, 3, 3, 5, 7],
  false
);// 36
// ---------- Test Case 13 ----------
console.log(
  [2, 2, 3, 5, 6, 8, 9], 
  [1, 1, 3, 4, 4, 8, 9], 
  true
);// 49
// ---------- Test Case 14 ----------
console.log(
  [2, 2, 3, 5, 6, 8, 9],
  [1, 1, 3, 4, 4, 8, 9], 
  false
);// 35
// ---------- Test Case 15 ----------
console.log([ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], false);// 15
// ---------- Test Case 16 ----------
console.log(
  [ 1, 2, 3, 4, 5 ], 
  [ 1, 2, 3, 4, 5 ], 
  true
);// 21
// ---------- Test Case 17 ----------
console.log([], [], true);// 0
