// Prompt
// Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n.
// You can return the answer in any order.

const simplifiedFractions = (n) => {
  const decimals = new Set();
  const result = [];

  for (let denominator = 2; denominator <= n; denominator++) {
    for (let numerator = 1; numerator < denominator; numerator++) {
      if (decimals.has(numerator / denominator)) continue;
      else {
        decimals.add(numerator / denominator);
        result.push(`${numerator}/${denominator}`);
      }
    }
  }

  return result;
};
