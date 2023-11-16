// Prompt
// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = (head) => {
  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
