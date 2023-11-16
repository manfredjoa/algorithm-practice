// Prompt
// You are given an integer array nums.
// The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

const sumOfUnique = (nums) => {
  const map = new Map();
  let sum = 0;

  for (const num of nums) {
    if (!map.has(num)) map.set(num, 0);
    else map.set(num, map.get(num) + 1);
  }

  for (const [key] of map) {
    if (!map.get(key)) sum += key;
  }

  return sum;
};
