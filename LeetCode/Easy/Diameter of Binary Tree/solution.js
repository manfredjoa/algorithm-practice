const diameterOfBinaryTree = (root) => {
  result = 0;

  const traverse = (subtree) => {
    if (!subtree) return 0;

    const left = traverse(subtree.left);
    const right = traverse(subtree.right);

    result = Math.max(result, left + right);

    return 1 + Math.max(left, right);
  };

  traverse(root);

  return result;
};
