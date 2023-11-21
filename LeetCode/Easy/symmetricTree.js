// Prompt
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Recursive Solution
const isSymmetricRecursive = (root) => {
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

// Iterative Solution
const isSymmetricIterative = (root) => {
  if (!root) return true;

  const queue = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    else if ((!left && right) || (left && !right) || left.val !== right.val)
      return false;

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
};
