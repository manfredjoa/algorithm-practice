from heapq import *


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        min_heap = []
        result = []

        for x, y in points:
            distance = (x ** 2) + (y ** 2)
            min_heap.append([distance, x, y])

        heapify(min_heap)

        for i in range(k):
            distance, x, y = heappop(min_heap)
            result.append([x, y])

        return result
