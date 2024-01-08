const rightSideView = (root) => {
  const result = [];
  const queue = [];

  if (root) queue.push(root);

  while (queue.length) {
    const length = queue.length;

    result.push(queue[length - 1].val);

    for (let i = 0; i < length; i++) {
      const curr = queue.shift();

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  return result;
};
