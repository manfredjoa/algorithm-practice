// Prompt
//You are given an integer array nums.
// The absolute sum of a subarray[numsl, numsl + 1, ..., numsr - 1, numsr] is abs(numsl + numsl + 1 + ... + numsr - 1 + numsr).

// Return the maximum absolute sum of any (possibly empty) subarray of nums.

// Note that abs(x) is defined as follows:

// - If x is a negative integer, then abs(x) = -x.
// - If x is a non-negative integer, then abs(x) = x.

const maxAbsoluteSum = (nums) => {
  let sum = (max = min = 0);

  for (const num of nums) {
    sum += num;
    max = Math.max(sum, max);
    min = Math.min(sum, min);
  }

  return max - min;
};
