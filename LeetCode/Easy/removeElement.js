// Prompt
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

const removeElement = (nums, val) => {
  let nonValInts = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nonValInts.push(nums[i]);
  }
  nums.length = 0;

  for (let i = 0; i < nonValInts.length; i++) nums.push(nonValInts[i]);

  return nums.length;
};
