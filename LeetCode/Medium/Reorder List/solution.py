class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """

        curr = head
        vals = []

        while curr:
            vals.append(curr.val)
            curr = curr.next

        curr = head
        left = 0
        right = len(vals) - 1
        even = True

        while curr:
            if even:
                curr.val = vals[left]
                left += 1
            else:
                curr.val = vals[right]
                right -= 1

            curr = curr.next
            even = not even
