const climbStairs = (n) => {
  let one = 1;
  let two = 1;

  for (let i = 1; i < n; i++) {
    const temp = one;

    one = one + two;
    two = temp;
  }

  return one;
};
