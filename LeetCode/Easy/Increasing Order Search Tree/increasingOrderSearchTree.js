const increasingBST = (root) => {
  const values = [];
  let curr = root;

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  values.sort((a, b) => a - b);

  for (i in values) {
    curr.val = values[i];
    curr.left = null;

    if (i == values.length - 1) return root;
    else if (curr.right) curr = curr.right;
    else {
      curr.right = new TreeNode(values[i + 1]);
      curr = curr.right;
    }
  }
};
