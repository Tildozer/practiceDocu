/*
template with function
write template
it takes an array and a function
it returns a string using the array and template function
*/

const template = (arr, callback) => {
  let finalStr = "";
  arr.forEach((num) => {
    callback(num);
    finalStr += `${callback(num)} `;
  });
  return finalStr;
};

let output = template([1, 2, 3], function (x) {
  return `**${x}**`;
});
console.log(output); //**1** **2** **3**
output = template([1, 2, 3], function (x) {
  return `|${x * 2}|`;
});
console.log(output); //|2| |4| |6|

/*
    countOdd with forEach
write countOdd function
takes an array
returns the number of odd numbers
use forEach
    */

/*
template with transformation
template gets passed an array, a decorator string, and an optional transformation function
*/

//TODO
const templateTrans = (arr, strDecoration, optFunc) => {
  let str = "";
  arr.forEach((element) => {
    if (optFunc) {
      element = optFunc(element);
    }
    str += `${strDecoration}${element}${strDecoration} `;
  });
  return str;
};

console.log(templateTrans(["foo", "bar", "bazz"], "-")); //-foo- -bar- -bazz-
console.log(templateTrans(["foo", "bar", "bazz"], "*")); //*foo* *bar* *bazz*
console.log(templateTrans(["moe", "lucy"], "*", (item) => item.toUpperCase())); //"*MOE* *LUCY*"
console.log(
  templateTrans(["moe", "lucy", "stan"], "-", (item) => item.slice(0, 2))
); //-mo- -lu- -st-
