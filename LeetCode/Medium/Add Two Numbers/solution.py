class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        curr1, curr2 = l1, l2
        num1, num2, total_sum = 0, 0, 0
        power_ten = 0
        result = ListNode(0)
        result_curr = result

        while curr1 or curr2:
            if curr1:
                num1 += curr1.val * 10 ** power_ten
                curr1 = curr1.next

            if curr2:
                num2 += curr2.val * 10 ** power_ten
                curr2 = curr2.next

            power_ten += 1

        total_sum = str(num1 + num2)

        if len(total_sum) == 1:
            return ListNode(total_sum)

        for i in range(len(total_sum) - 1, 0, -1):
            result_curr.val, result_curr.next = total_sum[i], ListNode(
                total_sum[i - 1])
            result_curr = result_curr.next

        return result
