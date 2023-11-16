// Prompt
// There is an integer array nums that consists of n unique elements, but you have forgotten it.
// However, you do remember every pair of adjacent elements in nums.

// You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.

// It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]].
// The pairs can appear in any order.

// Return the original array nums.
// If there are multiple solutions, return any of them.

const restoreArray = (adjacentPairs) => {
  const resultLength = adjacentPairs.length + 1;
  const map = new Map();
  const result = [];
  let curr;

  for (const pair of adjacentPairs) {
    if (!map.has(pair[0])) map.set(pair[0], []);
    if (!map.has(pair[1])) map.set(pair[1], []);

    map.get(pair[0]).push(pair[1]);
    map.get(pair[1]).push(pair[0]);
  }

  for (const [entry, values] of map) {
    if (values.length === 1) {
      curr = entry;
      result.push(curr);
      break;
    }
  }

  while (result.length < resultLength) {
    if (result.length === 1) {
      result.push(map.get(curr)[0]);
      curr = map.get(curr)[0];
    } else {
      if (map.get(curr)[0] === result[result.length - 2]) {
        result.push(map.get(curr)[1]);
        curr = map.get(curr)[1];
      } else {
        result.push(map.get(curr)[0]);
        curr = map.get(curr)[0];
      }
    }
  }

  return result;
};
