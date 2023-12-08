// Prompt
// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

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
