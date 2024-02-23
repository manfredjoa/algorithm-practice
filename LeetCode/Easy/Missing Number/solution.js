const missingNumber = (nums) => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const currentSum = nums.reduce((a, b) => a + b);

  return expectedSum - currentSum;
};
