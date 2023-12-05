// Prompt
// Given the head of a linked list, rotate the list to the right by k places.

const rotateRight = (head, k) => {
  const values = [];
  let curr = head;

  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  const n = values.length;

  for (let i = 0; i < k % n; i++) values.unshift(values.pop());

  curr = head;

  for (let i = 0; i < values.length; i++) {
    curr.val = values[i];
    curr = curr.next;
  }

  return head;
};
