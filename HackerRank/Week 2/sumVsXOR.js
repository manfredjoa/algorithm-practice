// Problem
// Given an integer n, find each x such that:
// - 0 <= x <= n
// - n + x = n ^ x
// where ^ denotes the bitwise XOR operator.
// Return the number of x's satisfying the criteria.

// This works, but it's too slow for HackerRank's test cases when n is a really large number.
function sumXor(n) {
  let sum = 0;

  for (let x = 0; x <= n; x++) {
    if (n + x === (n ^ x)) sum++;
  }
  return sum;
}
