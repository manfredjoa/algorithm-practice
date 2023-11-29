// Prompt
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order.

const letterCombinations = (digits) => {
  if (digits === "") return [];

  const map = new Map();
  const result = [];

  map.set("2", ["a", "b", "c"]);
  map.set("3", ["d", "e", "f"]);
  map.set("4", ["g", "h", "i"]);
  map.set("5", ["j", "k", "l"]);
  map.set("6", ["m", "n", "o"]);
  map.set("7", ["p", "q", "r", "s"]);
  map.set("8", ["t", "u", "v"]);
  map.set("9", ["w", "x", "y", "z"]);

  const helper = (str, i) => {
    if (str.length === digits.length) result.push(str);
    else {
      const letters = map.get(digits[i]);

      for (j in letters) helper(str + letters[j], i + 1);
    }
  };

  helper("", 0);

  return result;
};
