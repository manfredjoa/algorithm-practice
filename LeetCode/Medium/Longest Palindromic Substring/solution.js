const longestPalindrome = (s) => {
  let result = "";
  let resultLength = 0;

  const palindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;

      if (length > resultLength) {
        result = s.substring(left, right + 1);
        resultLength = length;
      }

      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    palindrome(i, i);
    palindrome(i, i + 1);
  }

  return result;
};
