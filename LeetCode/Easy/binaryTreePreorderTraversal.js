// Prompt
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

const preorderTraversal = (root) => {
  const result = [];

  const traverse = (node) => {
    if (!node) return;

    result.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return result;
};
