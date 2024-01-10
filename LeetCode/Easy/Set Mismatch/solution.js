const findErrorNums = (nums) => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const inputSum = nums.reduce((a, b) => a + b);
  const set = new Set();
  let duplicateNumber;

  for (const num of nums) {
    if (set.has(num)) {
      duplicateNumber = num;
      break;
    }

    set.add(num);
  }

  const missingNumber = expectedSum - inputSum + duplicateNumber;

  return [duplicateNumber, missingNumber];
};
