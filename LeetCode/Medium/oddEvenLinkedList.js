// Prompt
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

const oddEvenList = (head) => {
  if (!head || !head.next) return head;

  let flag = true;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  let temp = head.next.next;

  while (temp) {
    if (flag) {
      odd.next = temp;
      odd = odd.next;
    } else {
      even.next = temp;
      even = even.next;
    }
    temp = temp.next;
    flag = !flag;
  }

  odd.next = evenHead;
  even.next = null;

  return head;
};
