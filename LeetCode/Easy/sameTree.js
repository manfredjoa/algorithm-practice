// Prompt
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  else if ((!p && q) || (p && !q) || p.val !== q.val) return false;

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  return left && right;
};
