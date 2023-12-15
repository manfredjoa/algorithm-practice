class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        maxCount = 0

        for num in nums_set:
            count = 1

            if num - 1 not in nums_set:
                while num + count in nums_set:
                    count += 1

                maxCount = max(maxCount, count)

        return maxCount
