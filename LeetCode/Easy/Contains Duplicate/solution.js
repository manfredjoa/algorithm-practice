const containsDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (!set.has(num)) set.add(num);
    else return true;
  }

  return false;
};
