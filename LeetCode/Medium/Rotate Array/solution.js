const rotate = (nums, k) => {
  k = k % nums.length;

  nums.reverse();

  const left = nums.slice(0, k).reverse();
  const right = nums.slice(k).reverse();
  const newNums = [...left, ...right];

  for (let i = 0; i < nums.length; i++) nums[i] = newNums[i];
};
