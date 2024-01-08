class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not subRoot:
            return True
        elif not root:
            return False

        if self.same_tree(root, subRoot):
            return True

        return (self.isSubtree(root.left, subRoot) or
                self.isSubtree(root.right, subRoot))

    def same_tree(self, root, sub_root):
        if not root and not sub_root:
            return True

        if root and sub_root and root.val == sub_root.val:
            return (self.same_tree(root.left, sub_root.left) and
                    self.same_tree(root.right, sub_root.right))

        return False
