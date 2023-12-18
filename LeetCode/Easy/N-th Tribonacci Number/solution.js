const tribonacci = (n) => {
  if (n === 0) return 0;
  else if (n === 1 || n === 2) return 1;

  const values = [0, 1, 1];

  for (let i = 3; i < n; i++) {
    values.push(values[0] + values[1] + values[2]);
    values.shift();
  }

  return values[0] + values[1] + values[2];
};
