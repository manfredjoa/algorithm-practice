// Prompt
// Given a binary tree, determine if it is height-balanced.

const isBalanced = (root) => {
  let balanced = true;

  const getHeights = (node, height) => {
    if (!node) return 0;

    const left = getHeights(node.left, height + 1);
    const right = getHeights(node.right, height + 1);

    if (Math.abs(left - right) > 1) balanced = false;

    return Math.max(left, right) + 1;
  };

  getHeights(root, 0);

  return balanced;
};
