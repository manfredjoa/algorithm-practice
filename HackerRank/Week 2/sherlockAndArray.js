// Problem
// Watson gives Sherlock an array of integers.
// His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

function balancedSums(arr) {
  let balanced = false;
  let totalSum = arr.reduce((accumSum, index) => accumSum + index, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      balanced = true;
      break;
    } else leftSum += arr[i];
  }
  return balanced ? "YES" : "NO";
}
