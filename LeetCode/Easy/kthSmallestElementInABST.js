// Prompt
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

const kthSmallest = (root, k) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  values.sort((a, b) => a - b);

  return values[k - 1];
};
