const combinationSum = (candidates, target) => {
  const result = [];

  const dfs = (i, currArr, currSum) => {
    if (currSum === target) {
      result.push([...currArr]);
      return;
    } else if (i >= candidates.length || currSum > target) return;

    currArr.push(candidates[i]);
    dfs(i, currArr, currSum + candidates[i]);

    currArr.pop();
    dfs(i + 1, currArr, currSum);
  };

  dfs(0, [], 0);

  return result;
};
