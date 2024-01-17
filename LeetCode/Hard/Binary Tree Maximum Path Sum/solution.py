class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_sum = [float(-inf)]

        def find_max_sum(node):
            if not node:
                return 0

            left_max = max(0, find_max_sum(node.left))
            right_max = max(0, find_max_sum(node.right))
            current_sum = node.val + left_max + right_max

            max_sum[0] = max(max_sum[0], current_sum)

            return node.val + max(left_max, right_max)

        find_max_sum(root)

        return max_sum[0]
