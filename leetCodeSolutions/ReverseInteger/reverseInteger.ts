function reverse(x: number): number {
  let stringNumber = (x * Math.sign(x)).toString();
  stringNumber = reverseStringNumber(stringNumber);
  return is32BitInteger(+stringNumber * Math.sign(x));
};

function reverseStringNumber(str: string): string {
  return str === "" 
  ? ""
  : reverseStringNumber(str.slice(1)) + str.slice(0, 1);
}

function is32BitInteger(num: number): number {
  return num > 2147483647 || num < -2147483647 
  ? 0
  : num;
}