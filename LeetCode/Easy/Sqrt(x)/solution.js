const mySqrt = (x) => {
  if (x === 0) return 0;
  if (x === 1) return 1;

  for (let i = 0; i < x; i++) {
    if (i * i === x) return i;
    if (x > i * i && x < (i + 1) * (i + 1)) return i;
  }
};
