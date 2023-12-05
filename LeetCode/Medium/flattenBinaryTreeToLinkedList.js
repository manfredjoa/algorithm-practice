// Prompt
// Given the root of a binary tree, flatten the tree into a "linked list":

// - The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// - The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Do not return anything, modify root in-place instead.

const flatten = (root) => {
  const values = [];
  let curr = root;

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  for (let i = 1; i < values.length; i++) {
    curr.left = null;
    curr.right = new TreeNode(values[i]);
    curr = curr.right;
  }
};
