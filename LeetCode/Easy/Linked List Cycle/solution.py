class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        list_set = set()
        curr = head

        while curr:
            if curr in list_set:
                return True
            else:
                list_set.add(curr)

            curr = curr.next

        return False
