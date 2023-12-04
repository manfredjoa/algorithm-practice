// Prompt
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

const reverseBetween = (head, left, right) => {
  const stack = [];
  let curr = head;
  let i = 1;

  const swapValues = (node) => {
    let prev = node;

    if (i < right) {
      stack.push(node.val);
      node = node.next;
      i++;

      swapValues(node);
    } else if (i === right) stack.push(node.val);

    prev.val = stack[0];
    stack.shift();
  };

  while (curr) {
    if (i < left) {
      curr = curr.next;
      i++;
      continue;
    }

    swapValues(curr);
    break;
  }

  return head;
};
