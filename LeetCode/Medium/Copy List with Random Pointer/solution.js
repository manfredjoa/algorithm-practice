const copyRandomList = (head) => {
  const copiedList = new Map();
  let curr = head;

  while (curr) {
    const copy = new Node(curr.val);

    copiedList.set(curr, copy);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const copy = copiedList.get(curr);

    if (curr.next) copy.next = copiedList.get(curr.next);
    if (curr.random) copy.random = copiedList.get(curr.random);

    curr = curr.next;
  }

  return copiedList.get(head);
};
