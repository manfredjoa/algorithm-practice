// Prompt
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0, 1, 2, 4, 5, 6, 7] might become:

// - [4,5,6,7,0,1,2] if it was rotated 4 times.
// - [0,1,2,4,5,6,7] if it was rotated 7 times.

// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    min = Math.min(min, nums[mid]);

    if (nums[left] <= nums[mid]) {
      if (nums[mid] < nums[right]) right = mid - 1;
      else left = mid + 1;
    } else right = mid - 1;
  }

  return min;
};
