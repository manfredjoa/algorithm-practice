// Problem
// Bomberman lives in a rectangular grid. Each cell in the grid either contains a bomb or nothing at all.

// Each bomb can be planted in any cell of the grid but once planted, it will detonate after exactly 3 seconds.
// Once a bomb detonates, it's destroyed — along with anything in its four neighboring cells.
// This means that if a bomb detonates in cell i, j, any valid cells (i +- 1, j) and (i, j+- 1) are cleared.
// If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating, so there's no chain reaction.

// Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:

// 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
// 2. After one second, Bomberman does nothing.
// 3. After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs detonate at this point.
// 4. After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
// 5. Bomberman then repeats steps 3 and 4 indefinitely.
// Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), and any bombs planted at the same time will detonate at the same time.

// Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, determine the state of the grid after n seconds.

function bomberMan(n, grid) {
  if (n === 0 || n === 1) return grid;

  if (n % 2 === 0) {
    let r = grid.length;
    let c = grid[0].length;

    return new Array(r).fill("O".repeat(c));
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let currentGrid = grid.map((row) => row.split(""));

  const detonatedGrid = new Array(rows)
    .fill()
    .map(() => new Array(cols).fill("O"));

  const detonate = () => {
    const detonatedGridCopy = JSON.parse(JSON.stringify(detonatedGrid));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (currentGrid[i][j] === "O") {
          detonatedGridCopy[i][j] = ".";
          if (i > 0) detonatedGridCopy[i - 1][j] = ".";
          if (i < rows - 1) detonatedGridCopy[i + 1][j] = ".";
          if (j > 0) detonatedGridCopy[i][j - 1] = ".";
          if (j < cols - 1) detonatedGridCopy[i][j + 1] = ".";
        }
      }
    }
    currentGrid = detonatedGridCopy;
  };

  let detonations;

  if (n % 4 === 3) detonations = 1;
  else detonations = 2;

  for (let i = 0; i < detonations; i++) detonate();

  return currentGrid.map((row) => row.join(""));
}
