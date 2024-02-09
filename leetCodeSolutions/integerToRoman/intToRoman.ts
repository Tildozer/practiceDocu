// function intToRoman(num: number): string {
//   let roman = "";

//   while(num > 0) {
//     if(num >= 1000) {
//       roman += "M";
//       num += -1000;
//     } else if(num >= 500) {
//       if(num >= 900) {
//         roman += "CM"
//         num += -900;
//       } else {
//         roman += "M";
//         num += -500;
//       }
//     } else if(num >= 100) {
//       if(num >= 400) {
//         roman += "CD"
//         num += -400;
//       } else {
//         roman += "C"
//         num += -100
//       }
//     } else if(num >= 50) {
//       if(num >= 90) {
//         roman += "XC"
//         num += -90
//       } else {
//         roman += "L";
//         num += -50
//       }
//     } else if (num >= 10) {
//       if(num >= 40) {
//         roman += "XL"
//         num += -40;
//       } else {
//         roman += "X";
//         num += -10;
//       }
//     } else if(num >= 5) {
//       if(num >= 9) {
//         roman += "XL"
//         num += -9;
//       } else {
//         roman += "X";
//         num += -5;
//       }
//     } else {
//       if(num >= 4) {
//         roman += "IV"
//         num += -4;
//       } else {
//         roman += "I";
//         num += -1;
//       }
//     }
//   }

//   return roman;

// };
// More Optimal
type NumValue = {
  value: number;
};
function intToRoman(num: number, roman: string = ""): string {
  const number: NumValue = { value: num };
  if (num === 0) {
    return roman;
  } else if (num >= 1000) {
    roman += "M";
    number.value -= 1000;
    return intToRoman(number.value, roman);
  } else if (num >= 500) {
    roman = checkAndSubtract(number, roman, 500, 900, "CM", "D");
  } else if (num >= 100) {
    roman = checkAndSubtract(number, roman, 100, 400, "CD", "C");
  } else if (num >= 50) {
    roman = checkAndSubtract(number, roman, 50, 90, "XC", "L");
  } else if (num >= 10) {
    roman = checkAndSubtract(number, roman, 10, 40, "XL", "X");
  } else if (num >= 5) {
    roman = checkAndSubtract(number, roman, 5, 9, "IX", "V");
  } else {
    roman = checkAndSubtract(number, roman, 1, 4, "IV", "I");
  }
  return intToRoman(number.value, roman);
}

function checkAndSubtract(
  num: NumValue,
  roman: string,
  base: number,
  basePlus: number,
  basePlusString: string,
  baseString: string,
): string {
  if (num.value >= basePlus) {
    roman += basePlusString;
    num.value -= basePlus;
  } else {
    roman += baseString;
    num.value -= base;
  }
  return roman;
}
