// Problem
// We define subsequence as any subset of an array.
// We define a subarray as a contiguous subsequence in an array.

// Given an array, find the maximum possible sum among:

// 1. all nonempty subarrays.
// 2. all nonempty subsequences.

// Print the two values as space-separated integers on one line.

// Note that empty subarrays/subsequences should not be considered.

function maxSubarray(arr) {
  const add = (arr) => arr.reduce((a, b) => a + b);

  let positiveNums = arr.filter((num) => num > 0);

  if (positiveNums.length === 0) {
    arr.sort((a, b) => b - a);
    return [arr[0], arr[0]];
  }

  let subsequenceSum = add(positiveNums);
  let subarraySum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], arr[i] + currentSum);
    subarraySum = Math.max(subarraySum, currentSum);
  }

  return [subarraySum, subsequenceSum];
}
