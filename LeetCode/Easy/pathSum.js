// Prompt
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

const hasPathSum = (root, targetSum) => {
  let target = false;

  const traverse = (node, sum) => {
    if (target || !node) return;
    else if (!node.left && !node.right) {
      if (sum === targetSum) return (target = true);
      else return;
    }

    if (node.left) traverse(node.left, sum + node.left.val);
    if (node.right) traverse(node.right, sum + node.right.val);

    return;
  };

  if (root) traverse(root, root.val);

  return target;
};
