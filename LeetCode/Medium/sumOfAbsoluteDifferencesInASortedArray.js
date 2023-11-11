// Prompt
// You are given an integer array nums sorted in non-decreasing order.

// Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

// In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

const getSumAbsoluteDifferences = (nums) => {
  const result = [];
  let rightLength = nums.length - 1;
  let leftLength = 0;
  let rightSum = nums.reduce((a, b) => a + b);
  let leftSum = 0;

  for (const num of nums) {
    rightSum -= num;

    let right = rightSum - num * rightLength;
    let left = num * leftLength - leftSum;

    result.push(right + left);
    leftSum += num;
    leftLength++;
    rightLength--;
  }

  return result;
};
