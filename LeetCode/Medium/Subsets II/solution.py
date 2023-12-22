class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        result = []

        nums.sort()

        def dfs(i, subset):
            if i >= len(nums):
                result.append(subset.copy())
                return

            subset.append(nums[i])
            dfs(i + 1, subset)

            while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i += 1

            subset.pop()
            dfs(i + 1, subset)

        dfs(0, [])

        return result
