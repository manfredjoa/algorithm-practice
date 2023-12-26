const exist = (board, word) => {
  const rows = board.length,
    cols = board[0].length;
  const path = new Set();

  const dfs = (r, c, i) => {
    if (i === word.length) return true;
    else if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      word[i] !== board[r][c] ||
      path.has(`${r}${c}`)
    )
      return false;

    path.add(`${r}${c}`);

    const result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    path.delete(`${r}${c}`);

    return result;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};
