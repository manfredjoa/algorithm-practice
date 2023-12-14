const isPalindrome = (s) => {
  s = s
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, "")
    .split("");

  if (s.join("") === s.reverse().join("")) return true;
  else return false;
};
