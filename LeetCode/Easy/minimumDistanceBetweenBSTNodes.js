// Prompt
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

const minDiffInBST = (root) => {
  const values = [];
  let minDiff = Infinity;

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  values.sort((a, b) => a - b);

  for (let i = 0; i < values.length - 1; i++) {
    const diff = values[i + 1] - values[i];

    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
};
