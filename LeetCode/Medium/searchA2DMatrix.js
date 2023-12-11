// Prompt
// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

const searchMatrix = (matrix, target) => {
  let matrixLow = 0;
  let matrixHigh = matrix.length - 1;
  let found = false;

  while (matrixLow <= matrixHigh) {
    let matrixMid = Math.floor((matrixLow + matrixHigh) / 2);
    let low = 0;
    let high = matrix[matrixMid].length - 1;

    if (matrix[matrixMid][low] > target) {
      matrixHigh = matrixMid - 1;
      continue;
    } else if (matrix[matrixMid][high] < target) {
      matrixLow = matrixMid + 1;
      continue;
    } else if (
      matrix[matrixMid][low] === target ||
      matrix[matrixMid][high] === target
    )
      return true;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (matrix[matrixMid][mid] === target) {
        found = true;
        return found;
      } else if (matrix[matrixMid][mid] > target) high = mid - 1;
      else low = mid + 1;
    }

    return found;
  }

  return found;
};
