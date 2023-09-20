// Prompt
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.

const merge = (nums1, m, nums2, n) => {
  nums1.length = m;

  let nums = [...nums1, ...nums2].sort((a, b) => a - b);

  nums1.length = 0;

  for (let i = 0; i < nums.length; i++) nums1.push(nums[i]);

  return nums1;
};
