// Problem
// Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its data attribute, insert this node at the desired position and return the head node.

// A position of 0 indicates head, a position of 1 indicates one node away from the head and so on.
// The head pointer given may be null meaning that the initial list is empty.

function insertNodeAtPosition(llist, data, position) {
  if (position === 0)
    return {
      data: data,
      next: llist,
    };

  let storedNext = null;
  let current = llist;
  let count = 0;

  while (!storedNext) {
    if (count !== position - 1) current = current.next;
    else {
      storedNext = current.next;
      current.next = { data: data };
      current = current.next;
    }
    count++;
  }
  current.next = storedNext;

  return llist;
}
