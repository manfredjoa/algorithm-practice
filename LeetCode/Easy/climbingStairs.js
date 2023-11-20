// Prompt
// You are climbing a staircase.
// It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
  let count = 1;
  let prev = 1;

  for (let i = 1; i < n; i++) {
    count = count + prev;
    prev = count - prev;
  }

  return count;
};
