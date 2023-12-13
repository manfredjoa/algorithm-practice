// Prompt
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10 - 5 will be accepted.

const findMaxAverage = (nums, k) => {
  let maxSum = 0;

  for (let i = 0; i < k; i++) maxSum += nums[i];

  let sum = maxSum;

  for (let i = 1; i < nums.length - k + 1; i++) {
    sum -= nums[i - 1];
    sum += nums[i + k - 1];

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
