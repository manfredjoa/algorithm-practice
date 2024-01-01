const hasCycle = (head) => {
  const set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr)) return true;
    else set.add(curr);

    curr = curr.next;
  }

  return false;
};
