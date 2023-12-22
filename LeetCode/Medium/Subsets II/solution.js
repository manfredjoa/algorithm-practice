const subsetsWithDup = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b);

  const dfs = (i, subset) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1, subset);

    while (nums[i] === nums[i + 1]) i++;

    subset.pop();
    dfs(i + 1, subset);
  };

  dfs(0, []);

  return result;
};
