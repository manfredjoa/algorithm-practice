const countSubstrings = (s) => {
  let count = 0;

  const palindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    palindrome(i, i);
    palindrome(i, i + 1);
  }

  return count;
};
