// Prompt
// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

const permute = (nums) => {
  const result = [];
  const n = nums.length;

  const helper = (arr) => {
    if (arr.length === n) result.push(Array.from(arr));
    else {
      for (i in nums) {
        if (arr.includes(nums[i])) continue;

        arr.push(nums[i]);
        helper(arr);
        arr.pop();
      }
    }
  };

  helper([]);

  return result;
};
