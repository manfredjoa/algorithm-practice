const threeSum = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right + 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        while (nums[left] === nums[left + 1]) left++;

        left++;
      } else {
        while (nums[right] === nums[right - 1]) right--;

        right--;
      }
    }
  }

  return result;
};
