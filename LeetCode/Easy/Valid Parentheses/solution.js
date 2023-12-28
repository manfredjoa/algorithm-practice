const isValid = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (i in s) {
    if (map[s[i]]) stack.push(map[s[i]]);
    else if (s[i] !== stack.pop()) return false;
  }

  return stack.length === 0;
};
