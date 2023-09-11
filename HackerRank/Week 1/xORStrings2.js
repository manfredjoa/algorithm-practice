// Problem
// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// Debug the given function strings_xor to find the XOR of the two given strings appropriately.

// HackerRank did not have any code to debug available for JavaScript, so I wrote my own function here:
// I've created xORStrings2.py to debug the Python version of this problem.
function strings_xor(s, t) {
  let resultArray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) resultArray.push("1");
    else resultArray.push("0");
  }

  return resultArray.join("");
}
