const permute = (nums) => {
  let result = [];

  if (nums.length === 1) return [nums];

  for (i in nums) {
    const n = nums.shift();
    const perms = permute(nums);

    for (const perm of perms) result.push([...perm, n]);

    nums.push(n);
  }

  return result;
};
