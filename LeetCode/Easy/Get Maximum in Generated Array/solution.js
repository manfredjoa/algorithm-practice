const getMaximumGenerated = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;

  const values = [0, 1];
  let maxNum = 1;

  for (let i = 2; i < n + 1; i++) {
    if (i % 2 === 0) values.push(values[i / 2]);
    else {
      const first = Math.floor(i / 2);

      values.push(values[first] + values[first + 1]);
    }

    maxNum = Math.max(maxNum, values[values.length - 1]);
  }

  return maxNum;
};
