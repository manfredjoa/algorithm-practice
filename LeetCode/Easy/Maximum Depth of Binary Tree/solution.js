const maxDepth = (root) => {
  const traverse = (root, depth) => {
    if (!root) return depth;

    return Math.max(
      traverse(root.left, depth + 1),
      traverse(root.right, depth + 1)
    );
  };

  return traverse(root, 0);
};
