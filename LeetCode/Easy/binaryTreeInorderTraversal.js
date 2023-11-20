// Prompt
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Recursive Solution
const inorderTraversal = (root) => {
  const result = [];

  const helper = (root) => {
    if (!root) return;

    helper(root.left);
    result.push(root.val);
    helper(root.right);
  };

  helper(root);

  return result;
};
