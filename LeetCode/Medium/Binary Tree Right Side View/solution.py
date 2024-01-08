from collections import *


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        queue = deque()

        if root:
            queue.append(root)

        while len(queue):
            result.append(queue[len(queue) - 1].val)

            for i in range(len(queue)):
                curr = queue.popleft()

                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)

        return result
