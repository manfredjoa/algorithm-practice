// Prompt
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

const partition = (head, x) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let partition = null;
  let partitionPrev = null;
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (!partition && curr.val >= x) {
      partition = curr;
      partitionPrev = prev;
    } else if (partition && curr.val < x) {
      let next = curr.next;
      partitionPrev.next = curr;
      partitionPrev = curr;
      curr.next = partition;
      prev.next = next;
      curr = next;
      continue;
    }

    prev = curr;
    curr = curr.next;
  }

  return dummy.next;
};
