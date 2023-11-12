// Prompt
// You are given an array of positive integers nums and want to erase a subarray containing unique elements.
// The score you get by erasing the subarray is equal to the sum of its elements.

// Return the maximum score you can get by erasing exactly one subarray.

// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

const maximumUniqueSubarray = (nums) => {
  const seen = new Set();
  let sum = 0;
  let result = 0;
  let i = 0;
  let j = 0;

  while (i < nums.length && j < nums.length) {
    if (!seen.has(nums[j])) {
      sum += nums[j];
      seen.add(nums[j]);
      result = Math.max(sum, result);
      j++;
    } else {
      sum -= nums[i];
      seen.delete(nums[i]);
      i++;
    }
  }

  return result;
};
