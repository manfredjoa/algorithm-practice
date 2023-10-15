// Prompt
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"

// Given n and k, return the kth permutation sequence.

const getPermutation = (n, k) => {
  const factorials = { 0: 1 };
  const nums = [];
  let str = "";
  k--;

  for (let i = 1; i <= n; i++) {
    nums.push(i);
    factorials[i] = factorials[i - 1] * i;
  }

  while (nums.length > 0) {
    const availableLength = nums.length - 1;
    let i = Math.floor(k / factorials[availableLength]);

    str += nums[i];

    nums.splice(i, 1);

    k = k % factorials[availableLength];
  }

  return str;
};
