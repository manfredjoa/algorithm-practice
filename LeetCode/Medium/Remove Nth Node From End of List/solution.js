const removeNthFromEnd = (head, n) => {
  let curr = head;
  let dummy = new ListNode(0, curr);
  let nthNode = dummy;
  let pos = 1;

  while (curr) {
    if (curr.next) {
      if (pos < n) pos++;
      else nthNode = nthNode.next;
    } else {
      nthNode.next = nthNode.next.next;

      return dummy.next;
    }

    curr = curr.next;
  }
};
