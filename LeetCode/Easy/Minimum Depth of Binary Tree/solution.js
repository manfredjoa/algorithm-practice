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
