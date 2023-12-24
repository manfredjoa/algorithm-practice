const combinationSum2 = (candidates, target) => {
  const result = [];

  candidates.sort();

  const dfs = (i, currArr, currSum) => {
    if (currSum === target) {
      result.push([...currArr]);
      return;
    } else if (i >= candidates.length || currSum > target) return;

    currArr.push(candidates[i]);
    dfs(i + 1, currArr, currSum + candidates[i]);

    while (candidates[i] === candidates[i + 1]) i++;

    currArr.pop();
    dfs(i + 1, currArr, currSum);
  };

  dfs(0, [], 0);

  return result;
};
