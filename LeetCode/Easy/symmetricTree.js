// Prompt
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Recursive Solution
const isSymmetric = (root) => {
  const helper = (left, right) => {
    if (!left && !right) return true;
    else if ((!left && right) || (left && !right) || left.val !== right.val)
      return false;

    const outside = helper(left.left, right.right);
    const inside = helper(left.right, right.left);

    return outside && inside;
  };

  return helper(root.left, root.right);
};
