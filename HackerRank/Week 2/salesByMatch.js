// Problem
// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        ar.splice(j, 1);
        ar.splice(i, 1);
        pairs++;
        i--;
        break;
      }
    }
  }
  return pairs;
}

// More efficient solution
function sockMerchant(n, ar) {
  let sortedArray = ar.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      pairs++, i++;
    }
  }
  return pairs;
}
