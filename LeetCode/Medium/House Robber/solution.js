const rob = (nums) => {
  let one = 0;
  two = 0;

  for (const num of nums) {
    const temp = Math.max(one + num, two);
    one = two;
    two = temp;
  }

  return two;
};
