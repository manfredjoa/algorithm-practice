from heapq import *


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [-stone for stone in stones]

        heapify(heap)

        while len(heap) > 1:
            stone1 = -heappop(heap)
            stone2 = -heappop(heap)

            if stone1 > stone2:
                heappush(heap, -(stone1 - stone2))
            elif stone2 > stone1:
                heappush(heap, -(stone2 - stone1))

        return -heap[0] if len(heap) == 1 else 0
