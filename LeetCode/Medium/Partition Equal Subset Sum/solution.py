class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total_sum = sum(nums)
        target = total_sum // 2
        dp = set([0])

        if total_sum % 2:
            return False

        for i in range(len(nums) - 1, -1, -1):
            next_dp = set()

            for j in dp:
                if (j + nums[i] == target):
                    return True

                next_dp.add(j)
                next_dp.add(j + nums[i])

            dp = next_dp

        return True if target in dp else False
