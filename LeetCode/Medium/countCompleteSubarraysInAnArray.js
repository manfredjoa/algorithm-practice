// Prompt
// You are given an array nums consisting of positive integers.

// We call a subarray of an array complete if the following condition is satisfied:

// - The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.

// Return the number of complete subarrays.

const countCompleteSubarrays = (nums) => {
  const set = new Set(nums);
  const distinctNums = set.size;
  let count = 0;

  for (let left = 0; left < nums.length - distinctNums + 1; left++) {
    const subarraySet = new Set();

    for (let right = left + distinctNums - 1; right < nums.length; right++) {
      if (subarraySet.size === 0) {
        for (let i = left; i <= right; i++) subarraySet.add(nums[i]);
      } else subarraySet.add(nums[right]);

      if (subarraySet.size === distinctNums) count++;
    }
  }

  return count;
};
