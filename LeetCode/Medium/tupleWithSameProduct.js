// Prompt
// Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

const tupleSameProduct = (nums) => {
  const map = new Map();
  let result = 0;

  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      const product = nums[a] * nums[b];
      const count = map.get(product) ?? 0;

      result += 8 * count;

      map.set(product, count + 1);
    }
  }

  return result;
};
