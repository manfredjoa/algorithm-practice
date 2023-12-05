// Prompt
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

const removeNthFromEnd = (head, n) => {
  let length = 0;
  let position = Infinity;

  const traverse = (node, pos) => {
    if (!node) {
      if (length === n) {
        head = head.next;
        return;
      } else return (position = length - n);
    }

    length++;

    traverse(node.next, pos + 1);

    if (pos === position) node.next = node.next.next;
  };

  if (head) {
    traverse(head, 1);
    return head;
  } else return null;
};
