// Problem
// You will be given a list of integers, arr, and a single integer k.
// You must create an array of length k from elements of arr such that its unfairness is minimized.
// Call that array arr'.
// Unfairness of an array is calculated as max(arr') - min(arr')

// Where:
// - max denotes the largest integer in arr'
// - min denotes the smallest integer in arr'

function maxMin(k, arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let unfairness = Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let unfairnessInstance = sortedArr[i + k - 1] - sortedArr[i];
    if (unfairnessInstance < unfairness) unfairness = unfairnessInstance;
  }
  return unfairness;
}
