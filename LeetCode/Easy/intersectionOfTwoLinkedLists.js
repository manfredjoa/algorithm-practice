// Prompt
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

const getIntersectionNode = (headA, headB) => {
  const set = new Set();
  let currA = headA;
  let currB = headB;

  while (currA || currB) {
    if (currA) {
      if (!set.has(currA)) set.add(currA);
      else return currA;

      currA = currA.next;
    }

    if (currB) {
      if (!set.has(currB)) set.add(currB);
      else return currB;

      currB = currB.next;
    }
  }

  return null;
};
