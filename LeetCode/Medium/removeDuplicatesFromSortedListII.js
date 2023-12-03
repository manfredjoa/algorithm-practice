// Prompt
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

const deleteDuplicates = (head) => {
  const map = new Map();
  let curr = head;
  let i = 1;

  while (curr) {
    map.set(curr.val, (map.get(curr.val) ?? 0) + 1);
    curr = curr.next;
  }

  for (const [key, value] of map) {
    if (value > 1) map.delete(key);
  }

  if (map.size === 0) return null;

  curr = head;

  for (const [key] of map) {
    curr.val = key;

    if (i === map.size) curr.next = null;
    else {
      curr = curr.next;
      i++;
    }
  }

  return head;
};
