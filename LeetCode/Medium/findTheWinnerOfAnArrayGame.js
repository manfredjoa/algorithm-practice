// Prompt
// Given an integer array arr of distinct integers and an integer k.

// A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]).
// In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0, and the smaller integer moves to the end of the array.
// The game ends when an integer wins k consecutive rounds.

// Return the integer which will win the game.

// It is guaranteed that there will be a winner of the game.

const getWinner = (arr, k) => {
  if (k > arr.length) return Math.max(...arr);

  let count = 0;
  let curr = 0;
  let next = 1;

  while (count < k) {
    if (curr === arr.length - 1) return arr[curr];

    if (next > arr.length - 1) next = 0;

    if (curr === next) next++;

    if (arr[curr] > arr[next]) {
      count++;
      next++;
    } else {
      curr = next;
      next = curr + 1;
      count = 1;
    }
  }

  return arr[curr];
};
