from collections import *
from heapq import *


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counts = Counter(tasks)
        max_heap = [-count for count in counts.values()]
        queue = []
        time = 0

        heapify(max_heap)

        while max_heap or queue:
            time += 1

            if max_heap:
                count = 1 + heappop(max_heap)

                if count:
                    queue.append([count, time + n])

            if queue and queue[0][1] == time:
                heappush(max_heap, queue.pop(0)[0])

        return time
