const topKFrequent = (nums, k) => {
  let frequencies = {};
  let result = [];

  for (const i in nums) {
    if (!frequencies[nums[i]]) frequencies[nums[i]] = 1;
    else frequencies[nums[i]]++;
  }

  let frequenciesArr = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) result.push(parseInt(frequenciesArr[i][0]));

  return result;
};
