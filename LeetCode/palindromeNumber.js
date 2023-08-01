// Prompt
// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (x) => {
  if (x.toString().split("").reverse().join("") == x) {
    return true;
  } else return false;
};
