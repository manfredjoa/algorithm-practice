// Problem
// We define super digit of an integer x using the following rules:
// Given an integer, we need to find the super digit of the integer.
// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

function superDigit(n, k) {
  if (n.length === 1 && k === 1) return parseInt(n);

  let total = n.split("").reduce((a, b) => parseInt(a) + parseInt(b));
  let superDigitSum = total * k;

  return superDigit(superDigitSum.toString(), 1);
}
