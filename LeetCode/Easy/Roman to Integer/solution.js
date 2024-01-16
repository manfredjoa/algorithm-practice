const romanToInt = (s) => {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (const char of s) result += numerals[char];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) result -= 2;
    else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C"))
      result -= 20;
    else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
      result -= 200;
  }

  return result;
};
