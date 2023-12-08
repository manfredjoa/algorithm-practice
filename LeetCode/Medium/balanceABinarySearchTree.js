// Prompt
// Given the root of a binary search tree, return a balanced binary search tree with the same node values.
// If there is more than one answer, return any of them.

// A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

const balanceBST = (root) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  values.sort((a, b) => a - b);

  const mid = Math.floor(values.length / 2);
  const result = new TreeNode(values[mid]);

  const createTree = (node, left, right) => {
    if (!node) return;

    if (left.length) {
      const leftMid = Math.floor(left.length / 2);
      node.left = new TreeNode(left[leftMid]);
      createTree(node.left, left.slice(0, leftMid), left.slice(leftMid + 1));
    }

    if (right.length) {
      const rightMid = Math.floor(right.length / 2);
      node.right = new TreeNode(right[rightMid]);
      createTree(
        node.right,
        right.slice(0, rightMid),
        right.slice(rightMid + 1)
      );
    }
  };

  createTree(result, values.slice(0, mid), values.slice(mid + 1));

  return result;
};
