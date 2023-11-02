// Prompt
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

const combine = (n, k) => {
  const result = [];

  const dfs = (curr, start) => {
    if (curr.length === k) {
      result.push([...curr]);
      return;
    }

    for (let i = start; i <= n; i++) {
      curr.push(i);
      dfs(curr, i + 1);
      curr.pop();
    }
  };

  dfs([], 1);

  return result;
};
