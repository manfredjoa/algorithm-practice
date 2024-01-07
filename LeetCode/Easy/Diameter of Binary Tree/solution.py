class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        result = [0]

        def traverse(subtree):
            if not subtree:
                return 0

            left = traverse(subtree.left)
            right = traverse(subtree.right)

            result[0] = max(result[0], left + right)

            return 1 + max(left, right)

        traverse(root)

        return result[0]
