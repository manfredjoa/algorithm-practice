// Problem
// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
// Declare an integer, lastAnswer, and initialize it to 0.

// There are 2 types of queries, given as an array of strings for you to parse:

// Query: 1 x y
// Let idx = ((x ^ lastAnswer) % n).
// Append the integer y to arr[idx].

// Query: 2 x y
// Let idx = ((x ^ lastAnswer) % n).
// Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
// Store the new value of lastAnswer to an answers array.

function dynamicArray(n, queries) {
  let lastAnswer = 0;
  let arr = [];
  let answers = [];

  for (let i = 0; i < n; i++) arr.push([]);

  for (let i = 0; i < queries.length; i++) {
    let x = queries[i][1];
    let y = queries[i][2];
    let idx = (x ^ lastAnswer) % n;

    if (queries[i][0] === 1) arr[idx].push(y);
    else {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }
  return answers;
}
