// Prompt
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

const equalPairs = (grid) => {
  let columns = [];
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    columns.push(grid.map((row) => row[i]));
    columns[i] = columns[i].join(",");
  }

  grid = grid.map((row) => row.join(","));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (grid[i] === columns[j]) count++;
    }
  }
  return count;
};
