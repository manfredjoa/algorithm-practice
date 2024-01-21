class Solution:
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        arrows = 0
        curr_arrow_pos = float('-inf')

        points.sort(key=lambda x: x[1])

        for start, end in points:
            if start > curr_arrow_pos:
                arrows += 1
                curr_arrow_pos = end

        return arrows


print(Solution().findMinArrowShots([[1, 2], [3, 4, 5]]))
