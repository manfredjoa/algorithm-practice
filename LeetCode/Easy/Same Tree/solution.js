const isSameTree = (p, q) => {
  if (!p && !q) return true;
  else if ((!p && q) || (p && !q) || p.val !== q.val) return false;

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  return left && right;
};
