// Problem
// Palindromes are strings that read the same from the left or right, for example madam or 0110.

// You will be given a string representation of a number and a maximum number of changes you can make.
// Alter the string, one digit at a time, to create the string representation of the largest number possible given the limit to the number of changes.
// The length of the string may not be altered, so you must consider 0's left of all higher digits in your tests.
// For example 0110 is valid, 0011 is not.

// Given a string representing the starting number, and a maximum number of changes allowed, create the largest palindromic string of digits possible or the string '-1' if it is not possible to create a palindrome under the constraints.

const highestValuePalindrome = (s, n, k) => {
  const max = "9";
  let left = 0;
  let right = s.length - 1;
  let i = 0;

  if (n === k) return max.repeat(n);

  let newS = s.split("");

  while (left < right) {
    if (newS[left] !== newS[right]) {
      if (newS[left] < newS[right]) newS[left] = newS[right];
      else newS[right] = newS[left];

      k--;
    }

    if (k < 0) return -1;

    left++;
    right--;
  }

  if (k === 0) return newS.join("");

  while (k > 0 && i < n / 2) {
    if (newS[i] !== max) {
      if (newS[i] !== s[i] || newS[n - i - 1] !== s[n - i - 1]) {
        newS[i] = max;
        newS[n - i - 1] = max;
        k--;
      } else if (k > 1) {
        newS[i] = max;
        newS[n - i - 1] = max;
        k -= 2;
      } else if (n % 2 === 1) {
        newS[Math.floor(n / 2)] = max;
        return newS.join("");
      }
    }
    i++;
  }

  return newS.join("");
};
