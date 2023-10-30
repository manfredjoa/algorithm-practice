// Prompt
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
// If no such indices exists, return false.

const increasingTriplet = (nums) => {
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (let num of nums) {
    if (num > secondNum) return true;

    if (num > firstNum) secondNum = num;
    else firstNum = num;
  }

  return false;
};
