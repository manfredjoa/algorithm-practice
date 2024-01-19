const getDecimalValue = (head) => {
  let values = "";
  let curr = head;

  while (curr) {
    values += curr.val;
    curr = curr.next;
  }

  return parseInt(values, 2);
};
