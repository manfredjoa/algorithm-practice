// Prompt
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

const mergeKLists = (lists) => {
  const values = [];
  let result = null;
  let resultCurr = null;

  for (let i = 0; i < lists.length; i++) {
    let curr = lists[i];

    while (curr) {
      values.push(curr.val);
      curr = curr.next;
    }
  }

  values.sort((a, b) => a - b);

  if (values.length === 1) return new ListNode(values[0]);

  for (let i = 0; i < values.length - 1; i++) {
    if (!result) {
      result = new ListNode(values[i], new ListNode(values[i + 1]));
      resultCurr = result.next;
    } else {
      resultCurr.next = new ListNode(values[i + 1]);
      resultCurr = resultCurr.next;
    }
  }

  return result;
};
