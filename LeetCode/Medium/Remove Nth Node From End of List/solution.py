class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        curr = head
        dummy = ListNode(0, curr)
        nth_node = dummy
        pos = 1

        while (curr):
            if curr.next:
                if pos < n:
                    pos += 1
                else:
                    nth_node = nth_node.next
            else:
                nth_node.next = nth_node.next.next

                return dummy.next

            curr = curr.next
