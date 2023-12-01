// Prompt
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

const removeElements = (head, val) => {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === val) {
      if (!prev) {
        head = head.next;
        curr = head;
      } else {
        prev.next = curr.next;
        curr = curr.next;
      }
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};
