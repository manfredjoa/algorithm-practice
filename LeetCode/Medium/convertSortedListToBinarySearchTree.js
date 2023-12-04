// Prompt
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

const sortedListToBST = (head) => {
  if (!head) return null;

  const values = [];
  let curr = head;

  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  const mid = Math.floor(values.length / 2);
  const tree = new TreeNode(values[mid]);

  const makeBST = (node, leftVals, rightVals) => {
    const leftMid = Math.floor(leftVals.length / 2);
    const rightMid = Math.floor(rightVals.length / 2);
    let curr = node;

    if (leftVals.length) curr.left = new TreeNode(leftVals[leftMid]);
    else curr.left = null;

    if (rightVals.length) curr.right = new TreeNode(rightVals[rightMid]);
    else curr.right = null;

    if (leftVals.length > 1) {
      curr = curr.left;

      makeBST(curr, leftVals.slice(0, leftMid), leftVals.slice(leftMid + 1));
    }

    if (rightVals.length > 1) {
      curr = node.right;

      makeBST(
        curr,
        rightVals.slice(0, rightMid),
        rightVals.slice(rightMid + 1)
      );
    }

    return node;
  };

  return makeBST(tree, values.slice(0, mid), values.slice(mid + 1));
};
