// Prompt
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

const generate = (numRows) => {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    result.push(Array(i + 1).fill(1));

    if (i > 1) {
      for (j = 1; j < result[i].length - 1; j++)
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }

  return result;
};
