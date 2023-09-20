// Prompt
// Given two binary strings a and b, return their sum as a binary string.

const addBinary = (a, b) => {
  let sum = (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
  return sum;
};
