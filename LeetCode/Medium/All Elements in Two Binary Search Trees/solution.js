const getAllElements = (root1, root2) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root1);
  traverse(root2);

  return values.sort((a, b) => a - b);
};
