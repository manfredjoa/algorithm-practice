// Prompt
// Given a roman numeral, convert it to an integer.

const romanToInt = (s) => {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;

  for (let i = 0; i < s.length; i++) {
    let current = symbols[s[i]];
    let next = symbols[s[i + 1]];

    if (current < next) int -= symbols[s[i]];
    else int += symbols[s[i]];
  }
  return int;
};
