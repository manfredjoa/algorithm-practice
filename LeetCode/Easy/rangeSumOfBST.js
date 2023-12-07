// Prompt
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

const rangeSumBST = (root, low, high) => {
  let sum = 0;

  const traverse = (node) => {
    if (!node) return;
    else if (node.val >= low && node.val <= high) sum += node.val;

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return sum;
};
