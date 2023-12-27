const letterCombinations = (digits) => {
  const result = [];
  const digitsMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const backtrack = (i, currStr) => {
    if (currStr.length === digits.length) {
      result.push(currStr);
      return;
    }

    for (const char of digitsMap[digits[i]]) backtrack(i + 1, currStr + char);
  };

  if (digits) backtrack(0, "");
  else return [];

  return result;
};
