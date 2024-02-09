function isPalindrome(x: number): boolean {
  const numString = x.toString();

  return compareNumbers(numString);
}

function compareNumbers(number: string): boolean {
  if (number.length <= 1) {
    return true;
  }
  if (number[0] !== number[number.length - 1]) {
    return false;
  }

  return compareNumbers(number.slice(1, number.length - 1));
}
