// Problem
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// Input Format
// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

function diagonalDifference(arr) {
  let n = arr[0].length;
  let j = 0;
  let k = n - 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i][j];
    sum -= arr[i][k];
    j++, k--;
  }

  if (sum < 0) return sum * -1;
  else return sum;
}
