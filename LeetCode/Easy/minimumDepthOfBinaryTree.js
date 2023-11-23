// Prompt
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

const minDepth = (root) => {
  const getDepths = (node, depth) => {
    if (!node) return depth;

    const left = getDepths(node.left, depth + 1);
    const right = getDepths(node.right, depth + 1);

    if (!node.left || !node.right) return Math.max(left, right);
    else return Math.min(left, right);
  };

  return getDepths(root, 0);
};
