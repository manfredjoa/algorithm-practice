// Prompt
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) => {
  if (nums.includes(target)) return nums.indexOf(target);

  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  for (let i = 1; i < nums.length; i++)
    if (target > nums[i - 1] && target < nums[i]) return i;
};
