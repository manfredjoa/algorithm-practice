const lengthOfLastWord = (s) => {
  s = s.trim().split(" ");

  return s[s.length - 1].length;
};
