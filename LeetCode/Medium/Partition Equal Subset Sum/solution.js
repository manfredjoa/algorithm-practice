const canPartition = (nums) => {
  const sum = nums.reduce((a, b) => a + b);
  const target = sum / 2;
  let set = new Set([0]);

  if (sum % 2 === 1) return false;

  for (let i = nums.length - 1; i >= 0; i--) {
    const newSet = new Set();

    for (const num of set) {
      if (num + nums[i] === target) return true;

      newSet.add(num);
      newSet.add(num + nums[i]);
    }

    set = newSet;
  }

  return false;
};
