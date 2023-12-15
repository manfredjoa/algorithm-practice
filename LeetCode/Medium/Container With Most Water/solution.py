class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        area = 0

        while left < right:
            container_width = right - left
            container_height = 0
            current_area = 0

            if height[left] < height[right]:
                container_height = height[left]
                left += 1
            else:
                container_height = height[right]
                right -= 1

            current_area = container_height * container_width
            area = max(area, current_area)

        return area
