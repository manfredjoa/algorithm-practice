class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        area = 0

        while left < right:
            containerWidth = right - left
            containerHeight = 0
            currentArea = 0

            if height[left] < height[right]:
                containerHeight = height[left]
                left += 1
            else:
                containerHeight = height[right]
                right -= 1

            currentArea = containerHeight * containerWidth
            area = max(area, currentArea)

        return area
