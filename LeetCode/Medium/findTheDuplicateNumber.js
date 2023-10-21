// Prompt
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

const findDuplicate = (nums) => {
  let low = 1;
  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    let count = 0;

    for (const num of nums) {
      if (num <= mid) count++;
    }

    if (count > mid) high = mid;
    else low = mid + 1;
  }
  return low;
};
