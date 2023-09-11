// Problem
// You will be given a list of 32 bit unsigned integers.
// Flip all the bits (1 => 0 and 0 => 1) and return the result as an unsigned integer.

function flippingBits(n) {
  const num = n.toString(2);
  const flippedNums = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") flippedNums.push("1");
    else flippedNums.push("0");
  }
  return parseInt(flippedNums.join("").padStart(32, "1"), 2);
}
