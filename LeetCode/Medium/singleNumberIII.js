// Prompt
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
// Find the two elements that appear only once.
// You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

const singleNumber = (nums) => {
  let numsObj = new Set();
  let result = [];

  for (const i in nums) {
    if (!numsObj.has(nums[i])) numsObj.add(nums[i]);
    else numsObj.delete(nums[i]);
  }

  numsObj.forEach((num) => result.push(num));

  return result;
};
