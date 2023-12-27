const partition = (s) => {
  const result = [];
  const partition = [];

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) return false;

      left++;
      right--;
    }

    return true;
  };

  const dfs = (i) => {
    if (i >= s.length) {
      result.push([...partition]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        partition.push(s.slice(i, j + 1));
        dfs(j + 1);
        partition.pop();
      }
    }
  };

  dfs(0);

  return result;
};
