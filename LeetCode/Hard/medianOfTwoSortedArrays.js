// Prompt
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (nums1, nums2) => {
  let nums = [];
  let median = null;

  nums.push(...nums1, ...nums2);
  nums.sort((a, b) => a - b);

  if (nums.length % 2 === 0) {
    let mid = nums.length / 2;
    median = (nums[mid - 1] + nums[mid]) / 2;
  } else {
    let mid = Math.floor(nums.length / 2);
    median = nums[mid];
  }

  return median;
};
