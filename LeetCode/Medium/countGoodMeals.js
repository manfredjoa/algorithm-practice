// Prompt
// A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.

// You can pick any two different foods to make a good meal.

// Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo 10 ** 9 + 7.

// Note that items with different indices are considered different even if they have the same deliciousness value.

const countPairs = (deliciousness) => {
  const modulo = 10 ** 9 + 7;
  const map = new Map();
  const powers = Array(22)
    .fill(0)
    .map((_, index) => 2 ** index);
  let count = 0;

  for (let i = 0; i < deliciousness.length; i++) {
    const curr = deliciousness[i];

    for (const power of powers) {
      const difference = power - curr;

      if (map.has(difference)) count += map.get(difference);
    }

    map.set(curr, (map.get(curr) ?? 0) + 1);
  }

  return count % modulo;
};
