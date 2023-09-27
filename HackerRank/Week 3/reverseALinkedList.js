// Problem
// Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed.
// The head pointer given may be null meaning that the initial list is empty.

function reverse(llist) {
  let nums = [];
  let current = llist;

  while (current.next) {
    if (nums.length === 0) nums.push(current.data);
    current = current.next;
    nums.push(current.data);
  }

  nums.reverse();

  current = llist;
  let i = 0;

  while (current.next) {
    current.data = nums[i];
    current = current.next;
    i++;
    if (i === nums.length - 1) current.data = nums[i];
  }
  return llist;
}
