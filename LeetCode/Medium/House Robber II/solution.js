const rob = (nums) => {
  const robHelper = (arr) => {
    let one = 0;
    two = 0;

    for (i in arr) {
      temp = Math.max(one + arr[i], two);
      one = two;
      two = temp;
    }

    return two;
  };

  return Math.max(
    nums[0],
    robHelper(nums.slice(1)),
    robHelper(nums.slice(0, nums.length - 1))
  );
};
