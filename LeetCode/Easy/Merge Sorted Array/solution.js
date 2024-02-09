const merge = (nums1, m, nums2, n) => {
  nums1.length = m;

  let nums = [...nums1, ...nums2].sort((a, b) => a - b);

  nums1.length = 0;

  for (let i = 0; i < nums.length; i++) nums1.push(nums[i]);

  return nums1;
};
