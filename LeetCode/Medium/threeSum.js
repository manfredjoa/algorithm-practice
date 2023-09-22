// Prompt
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = (nums) => {
  let results = [];

  if (nums.length < 3) return results;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      let target = -nums[i];

      while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) {
          results.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return results;
};
