// Prompt
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list.
// If the number of nodes is not a multiple of k then left - out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

const reverseKGroup = (head, k) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let n = 0;

  for (let i = head; i; i = i.next) n++;

  for (let prev = dummy, tail = head; n >= k; n -= k) {
    for (let i = 1; i < k; i++) {
      let next = tail.next.next;
      tail.next.next = prev.next;
      prev.next = tail.next;
      tail.next = next;
    }

    prev = tail;
    tail = tail.next;
  }

  return dummy.next;
};
