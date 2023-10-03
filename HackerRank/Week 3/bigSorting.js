// Problem
// Consider an array of numeric strings where each string is a positive number with anywhere from to digits.
// Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

function bigSorting(unsorted) {
  unsorted.sort((a, b) => {
    let bigA = BigInt(a);
    let bigB = BigInt(b);

    if (bigA < bigB) return -1;
    else if (bigA > bigB) return 1;
    else return 0;
  });

  return unsorted;
}
