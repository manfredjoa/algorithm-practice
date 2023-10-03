// Problem
// You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height.
// You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

// Find the maximum possible height of the stacks such that all of the stacks are exactly the same height.
// This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.

function equalStacks(h1, h2, h3) {
  const add = (arr) => arr.reduce((a, b) => a + b);
  let height1 = add(h1);
  let height2 = add(h2);
  let height3 = add(h3);

  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  while (true) {
    if (index1 === h1.length || index2 === h2.length || index3 === h3.length)
      return 0;

    if (height1 === height2 && height2 === height3) return height1;

    if (height1 >= height2 && height1 >= height3) height1 -= h1[index1++];
    else if (height2 >= height1 && height2 >= height3) height2 -= h2[index2++];
    else height3 -= h3[index3++];
  }
}
