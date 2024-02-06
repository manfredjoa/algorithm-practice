const majorityElement = (nums) => {
  const map = new Map();
  const n = nums.length;

  for (const num of nums) map.set(num, (map.get(num) ?? 0) + 1);

  for (const [key, value] of map) {
    if (value > n / 2) return key;
  }
};
