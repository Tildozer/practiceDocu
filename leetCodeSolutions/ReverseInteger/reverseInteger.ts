function reverse(x: number): number {
  let stringNumber: string;
  if (x < 0) {
    stringNumber = x.toString().slice(1);
    stringNumber = reverseNumber(stringNumber);
    return is32BitInteger(-+stringNumber);
  } else {
    stringNumber = x.toString();
    stringNumber = reverseNumber(stringNumber);
    return is32BitInteger(+stringNumber);
  }
}

function reverseNumber(str: string): string {
  let reverseString: string = "";
  for (let i = str.length - 1; i > -1; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

function is32BitInteger(num: number): number {
  if (num > 2147483647 || num < -2147483647) {
    return 0;
  }
  return num;
}
