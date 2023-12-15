const twoSum = (nums, target) => {
  const map = new Map();

  for (i in nums) {
    const difference = target - nums[i];

    if (!map.has(difference)) map.set(nums[i], i);
    else return [map.get(difference), i];
  }
};
