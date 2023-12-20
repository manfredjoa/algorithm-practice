const maxProduct = (nums) => {
  let result = Math.max(...nums);
  let currMax = 1;
  let currMin = 1;

  for (const num of nums) {
    const temp = currMax * num;

    currMax = Math.max(temp, currMin * num, num);
    currMin = Math.min(temp, currMin * num, num);
    result = Math.max(result, currMax);
  }

  return result;
};
