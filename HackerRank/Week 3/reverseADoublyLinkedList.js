// Problem
// Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place.
// That is, change the next and prev pointers of the nodes so that the direction of the list is reversed.
// Return a reference to the head node of the reversed list.

function reverse(llist) {
  let current = llist;
  let storedValue = [];

  while (current) {
    storedValue.push(current.next);
    current.next = current.prev;
    current.prev = storedValue[0];
    storedValue.pop();

    if (current.prev === null) return current;

    current = current.prev;
  }
  return llist;
}
