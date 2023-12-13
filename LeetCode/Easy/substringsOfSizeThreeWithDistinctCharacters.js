// Prompt
// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

const countGoodSubstrings = (s) => {
  let count = 0;

  for (let i = 0; i < s.length - 2; i++) {
    const set = new Set([s[i], s[i + 1], s[i + 2]]);

    if (set.size === 3) count++;
  }

  return count;
};
