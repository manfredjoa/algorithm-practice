// Prompt
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Recursive Solution
const reverseBetweenRecursive = (head, left, right) => {
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

// Iterative Solution (One Pass)
const reverseBetweenIterative = (head, left, right) => {
  if (left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = head;
  let prev = dummy;
  let subListPrev = dummy;
  let subListEnd = dummy;
  let i = 1;

  while (curr) {
    if (i < left) {
      subListPrev = curr;
      prev = curr;
      curr = curr.next;
    } else if (i === left) {
      subListEnd = curr;
      prev = curr;
      curr = curr.next;
    } else if (i > left && i < right) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    } else {
      if (subListPrev) subListPrev.next = curr;
      else dummy.next = curr;

      subListEnd.next = curr.next;
      curr.next = prev;

      return dummy.next;
    }

    i++;
  }
};
