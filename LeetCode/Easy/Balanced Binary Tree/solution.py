class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def get_height(root):
            if not root:
                return 0

            left = get_height(root.left)
            right = get_height(root.right)

            if left != None and right != None and abs(left - right) <= 1:
                return max(left, right) + 1
            else:
                return None

        if get_height(root) or get_height(root) == 0:
            return True
        else:
            return False
