// Problem
// There are two n-element arrays of integers, A and B.
// Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.
// There will be q queries consisting of A, B, and k.
// For each query, return YES if some permutation A', B' satisfying the relation exists.
// Otherwise, return NO.

function twoArrays(k, A, B) {
  let sortedA = A.sort((a, b) => a - b);
  let sortedB = B.sort((a, b) => b - a);

  let sumCheck = true;

  for (let i = 0; i < A.length; i++) {
    if (sortedA[i] + sortedB[i] < k) sumCheck = false;
  }

  return sumCheck ? "YES" : "NO";
}
