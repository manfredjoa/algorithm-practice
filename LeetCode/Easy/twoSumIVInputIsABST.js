// Prompt
// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

const findTarget = (root, k) => {
  const map = new Map();
  let result = false;

  const traverse = (node) => {
    if (!node) return;

    if (map.has(k - node.val)) result = true;
    else map.set(node.val, 1);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return result;
};
