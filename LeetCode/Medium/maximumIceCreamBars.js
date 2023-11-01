// Prompt
// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars.
// You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins.
// The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

// Note: The boy can buy the ice cream bars in any order.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// You must solve the problem by counting sort.

const maxIceCream = (costs, coins) => {
  const frequency = Array(Math.max(...costs) + 1).fill(0);

  for (const cost of costs) frequency[cost]++;

  let bars = 0;

  for (let cost = 1; cost <= coins && cost < frequency.length; cost++) {
    const count = Math.min(frequency[cost], Math.floor(coins / cost));

    coins -= cost * count;
    bars += count;
  }

  return bars;
};
