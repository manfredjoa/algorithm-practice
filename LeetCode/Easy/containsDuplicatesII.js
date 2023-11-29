// Prompt
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();

  for (i in nums) {
    if (!map.get(nums[i])) map.set(nums[i], i);
    else {
      if (Math.abs(map.get(nums[i]) - i) <= k) return true;
      else map.set(nums[i], i);
    }
  }

  return false;
};
