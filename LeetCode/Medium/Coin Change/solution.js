const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (a - coin >= 0) dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
    }
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
};
