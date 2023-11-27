// Prompt
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
  const map = new Map();
  const n = nums.length;

  for (const num of nums) map.set(num, (map.get(num) ?? 0) + 1);

  for (const [key, value] of map) {
    if (value > n / 2) return key;
  }
};
