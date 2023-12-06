// Prompt
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

const middleNode = (head) => {
  const values = [];
  let curr = head;

  while (curr) {
    values.push(curr);
    curr = curr.next;
  }

  const mid = Math.floor(values.length / 2);

  return values[mid];
};
