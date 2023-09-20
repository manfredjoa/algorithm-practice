// Prompt
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  let h = haystack.length;
  let n = needle.length;

  if (n > h) return -1;

  for (let i = 0; i <= h - n; i++) {
    let slicedStr = haystack.slice(i, i + n);
    if (slicedStr === needle) return i;
  }
  return -1;
};
