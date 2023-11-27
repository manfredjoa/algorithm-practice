// Prompt
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      const temp = nums[right];

      nums[right] = nums[left];
      nums[left] = temp;

      left++;
    }
  }

  return nums;
};
