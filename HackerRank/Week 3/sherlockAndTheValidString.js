// Problem
// Sherlock considers a string to be valid if all characters of the string appear the same number of times.
// It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times.
// Given a string s, determine if it is valid.
// If so, return YES, otherwise return NO.

function isValid(s) {
  let frequencies = {};
  let result = "YES";

  if (s.length < 3) return result;

  for (let i = 0; i < s.length; i++) {
    if (frequencies[s[i]]) frequencies[s[i]]++;
    else frequencies[s[i]] = 1;
  }

  let values = Object.values(frequencies);
  let lastIndex = values.length - 1;

  values.sort((a, b) => a - b);

  let checkFirst = values.filter((value) => value === values[0]).length;
  let checkLast = values.filter((value) => value === values[lastIndex]).length;

  if (checkFirst === 1 && checkLast === values.length - 1) return result;

  if (values[0] !== values[lastIndex] && values[0] !== values[lastIndex - 1])
    result = "NO";
  else if (
    values[0] !== values[lastIndex] &&
    values[0] === values[lastIndex - 1]
  ) {
    if (values[lastIndex] - values[0] > 1) result = "NO";
    else return result;
  }
  return result;
}
