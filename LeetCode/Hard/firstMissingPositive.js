// Prompt
// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

const firstMissingPositive = (nums) => {
  let i = 0;

  while (i < nums.length) {
    let correctIndex = nums[i] - 1;

    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIndex])
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    else i++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return nums.length + 1;
};
