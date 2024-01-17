const maxPathSum = (root) => {
  let maxSum = -Infinity;

  function findMaxSum(node) {
    if (node === null) return 0;

    const leftMax = Math.max(0, findMaxSum(node.left));
    const rightMax = Math.max(0, findMaxSum(node.right));
    const currentSum = node.val + leftMax + rightMax;

    maxSum = Math.max(maxSum, currentSum);

    return node.val + Math.max(leftMax, rightMax);
  }

  findMaxSum(root);

  return maxSum;
};
