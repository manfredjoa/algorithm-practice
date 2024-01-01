const reorderList = (head) => {
  const vals = [];
  let curr = head;

  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  let left = 0;
  let right = vals.length - 1;
  let even = true;

  while (curr) {
    if (even) {
      curr.val = vals[left];
      left++;
    } else {
      curr.val = vals[right];
      right--;
    }

    curr = curr.next;
    even = !even;
  }
};
