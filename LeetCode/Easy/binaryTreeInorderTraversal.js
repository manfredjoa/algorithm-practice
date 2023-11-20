// Prompt
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Recursive Solution
const inorderTraversalRecursive = (root) => {
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

// Iterative Solution
const inorderTraversalIterative = (root) => {
  const result = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  }

  return result;
};
