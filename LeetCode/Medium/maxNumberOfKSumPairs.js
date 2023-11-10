// Prompt
// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

const maxOperations = (nums, k) => {
  const frequencies = new Map();
  let count = 0;

  for (const num of nums) {
    const difference = k - num;

    if (frequencies.has(difference) && frequencies.get(difference) > 0) {
      frequencies.set(difference, frequencies.get(difference) - 1);
      count++;
    } else {
      if (frequencies.has(num)) frequencies.set(num, frequencies.get(num) + 1);
      else frequencies.set(num, 1);
    }
  }

  return count;
};
