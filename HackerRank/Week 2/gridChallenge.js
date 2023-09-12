// Problem
// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
// Determine if the columns are also in ascending alphabetical order, top to bottom.
// Return YES if they are or NO if they are not.

function gridChallenge(grid) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetical = true;

  for (let i = 0; i < grid.length; i++)
    grid[i] = grid[i].split("").sort().join("");

  for (let j = 0; j < grid.length - 1; j++) {
    for (let k = 0; k < grid.length; k++) {
      if (alphabet.indexOf(grid[j][k]) > alphabet.indexOf(grid[j + 1][k])) {
        alphabetical = false;
        break;
      }
    }
  }
  return alphabetical ? "YES" : "NO";
}
