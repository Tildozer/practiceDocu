function myPow(x: number, n: number): number {
  const sign: number = Math.sign(n);
  if(n === 0 || x * sign === 1) {
    return 1;
  }
  let pow: number = x;
  for(let i = 1; i < n * sign; i++) {
    pow = pow * x;
  }
  return sign > 0 ? pow : 1 / pow;
};

// better
function myPowOptimal(x: number, n: number): number {
  return x**n;
};