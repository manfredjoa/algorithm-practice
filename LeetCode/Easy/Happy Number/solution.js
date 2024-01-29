const isHappy = (n) => {
  const set = new Set([n]);

  while (n !== 1) {
    if (n < 10) n = n ** 2;
    else
      n = n
        .toString()
        .split("")
        .reduce((a, b) => a + b ** 2, 0);

    if (set.has(n)) return false;
    else set.add(n);
  }

  return true;
};
