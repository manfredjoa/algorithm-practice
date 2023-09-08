// Problem
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  let n = arr.length;

  let positiveIntsRatio = arr.filter((int) => int > 0).length / n;
  let negativeIntsRatio = arr.filter((int) => int < 0).length / n;
  let zeroesRatio = arr.filter((int) => int === 0).length / n;

  console.log(positiveIntsRatio.toFixed(6));
  console.log(negativeIntsRatio.toFixed(6));
  console.log(zeroesRatio.toFixed(6));
}
