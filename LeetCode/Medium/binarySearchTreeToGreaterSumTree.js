// Prompt
// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

const bstToGst = (root) => {
  const map = new Map();
  const values = [];
  let totalSum = 0;

  const traverse = (node) => {
    if (!node) return;

    if (map.size === 0) {
      values.push(node.val);
      totalSum += node.val;
    } else node.val = map.get(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  values.sort((a, b) => a - b);

  for (let i = 0; i < values.length; i++) {
    if (i === 0) map.set(values[i], totalSum);
    else map.set(values[i], (totalSum -= values[i - 1]));
  }

  traverse(root);

  return root;
};
