from collections import *


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        result = []
        queue = deque()

        if root:
            queue.append(root)

        while len(queue):
            level = []
            length = len(queue)

            for i in range(length):
                curr = queue.popleft()
                level.append(curr.val)

                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)

            result.append(level)

        return result
