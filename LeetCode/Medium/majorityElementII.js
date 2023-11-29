// Prompt
// Given an integer array of size n, find all elements that appear more than n / 3  times.

const majorityElement = (nums) => {
  const map = new Map();
  const n = nums.length / 3;
  const result = [];

  for (const num of nums) map.set(num, (map.get(num) ?? 0) + 1);

  for (const [key, value] of map) {
    if (value > n) result.push(key);
  }

  return result;
};
