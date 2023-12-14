// Prompt
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// - Starting with any positive integer, replace the number by the sum of the squares of its digits.
// - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// - Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

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
