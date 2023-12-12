// Prompt
// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;
  else if (s.length === 1) return 1;

  const set = new Set(s[0]);
  let left = 0;
  let maxLength = 0;

  for (let i = 1; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
};
