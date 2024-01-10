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
