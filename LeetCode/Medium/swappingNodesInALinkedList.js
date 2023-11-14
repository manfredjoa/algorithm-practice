// Prompt

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

const swapNodes = (head, k) => {
  let curr = head;
  let first = head;
  let second = head;
  let count = 1;

  while (count < k) {
    curr = curr.next;
    count++;
  }

  first = curr;
  curr = curr.next;

  while (curr) {
    curr = curr.next;
    second = second.next;
  }

  [first.val, second.val] = [second.val, first.val];

  return head;
};
