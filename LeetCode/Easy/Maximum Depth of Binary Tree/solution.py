class Solution:

    def maxDepth(self, root: Optional[TreeNode]) -> int:

        def traverse(root, depth):
            if not root:
                return depth

            return max(traverse(root.left, depth + 1), traverse(root.right, depth + 1))

        return traverse(root, 0)
