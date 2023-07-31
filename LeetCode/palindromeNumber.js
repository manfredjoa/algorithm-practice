const isPalindrome = (x) => {
  if (x.toString().split("").reverse().join("") == x) {
    return true;
  } else return false;
};
