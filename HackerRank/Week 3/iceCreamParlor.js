// Problem
// Two friends like to pool their money and go to the ice cream parlor.
// They always choose two distinct flavors and they spend all of their money.

// Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

function icecreamParlor(m, arr) {
  let indices = [];
  let sum = [];
  let j = 0;

  for (let i = 1; i <= arr.length; i++) {
    if (j >= arr.length) {
      j = i;
      sum.pop();
      indices.pop();
      continue;
    }

    if (arr[j] >= m) {
      i--;
      j++;
      continue;
    }

    if (sum.length === 0) {
      sum.push(arr[j]);
      indices.push(j + 1);
      i--;
      j++;
    } else if (sum[0] + arr[j] === m) {
      indices.push(j + 1);
      return indices;
    } else {
      i--;
      j++;
    }
  }
}

// Using a hash map
function icecreamParlor(m, arr) {
  let combinations = {};

  for (let i = 0; i < arr.length; i++) {
    let difference = m - arr[i];

    if (combinations[difference]) return [combinations[difference] + 1, i + 1];
    // if (combinations[difference] !== undefined) is needed for it to pass the test cases on HackerRank
    else combinations[arr[i]] = i;
  }
}
