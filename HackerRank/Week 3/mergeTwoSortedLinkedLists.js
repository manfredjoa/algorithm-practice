// Problem
// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list.
// Either head pointer may be null meaning that the corresponding list is empty.

function mergeLists(head1, head2) {
  // These checks weren't required for the test cases provided.
  // if (!head1) return head2
  // if (!head2) return head1

  let nums = [];
  let current1 = head1;
  let current2 = head2;

  nums.push(current1.data);
  nums.push(current2.data);

  while (current1.next) {
    current1 = current1.next;
    nums.push(current1.data);
  }

  while (current2.next) {
    current2 = current2.next;
    nums.push(current2.data);
  }

  nums.sort((a, b) => a - b);

  let head = {};
  let current = {};

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) current.next = null;
    else if (i === 0) {
      head.data = nums[i];
      head.next = { data: nums[i + 1] };
      current = head.next;
    } else {
      current.data = nums[i];
      current.next = { data: nums[i + 1] };
      current = current.next;
    }
  }
  return head;
}
