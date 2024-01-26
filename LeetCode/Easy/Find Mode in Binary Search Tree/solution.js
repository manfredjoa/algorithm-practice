const findMode = (root) => {
  const map = new Map();
  const result = [];
  let maxOccurences = 0;

  const traverse = (node) => {
    if (!node) return;

    map.set(node.val, (map.get(node.val) ?? 0) + 1);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  for (const [key, value] of map) {
    if (value > maxOccurences) {
      maxOccurences = value;
      result.length = 0;
      result.push(key);
    } else if (value === maxOccurences) result.push(key);
  }

  return result;
};
