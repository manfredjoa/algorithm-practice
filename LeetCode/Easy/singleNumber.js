// Prompt
// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => nums.reduce((prev, curr) => prev ^ curr);
