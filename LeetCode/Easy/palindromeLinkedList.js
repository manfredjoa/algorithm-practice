// Prompt
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

const isPalindrome = (head) => {
  let nums = [];
  let curr = head;

  while (curr) {
    nums.push(curr.val);
    curr = curr.next;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] !== nums[right]) return false;

    left++;
    right--;
  }

  return true;
};
