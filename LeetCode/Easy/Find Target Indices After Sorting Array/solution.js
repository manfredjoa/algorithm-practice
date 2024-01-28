const targetIndices = (nums, target) => {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result.push(i);
    else if (nums[i] > target) break;
  }

  return result;
};
