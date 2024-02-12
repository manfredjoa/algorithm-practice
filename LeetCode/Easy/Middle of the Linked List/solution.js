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
