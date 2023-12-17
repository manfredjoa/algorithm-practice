const fib = (n) => {
  if (n === 0) return 0;

  let one = 1;
  let two = 1;

  for (i = 0; i < n - 2; i++) {
    const temp = one;

    one = one + two;
    two = temp;
  }

  return one;
};
