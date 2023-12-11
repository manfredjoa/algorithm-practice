// Prompt
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index.
// Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
};
