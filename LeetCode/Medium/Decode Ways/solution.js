const numDecodings = (s) => {
  const n = s.length;
  const dp = Array(n + 1).fill(0);
  dp[n] = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] !== "0") dp[i] = dp[i + 1];

    if (
      i + 1 < n &&
      (s[i] === "1" || (s[i] === "2" && parseInt(s[i] + s[i + 1]) <= 26))
    )
      dp[i] += dp[i + 2];
  }

  return dp[0];
};
