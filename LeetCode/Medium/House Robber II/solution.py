class Solution:
    def rob(self, nums: List[int]) -> int:
        def robHelper(arr):
            one, two = 0, 0

            for i in arr:
                temp = max(one + i, two)
                one = two
                two = temp

            return two

        return max(nums[0], robHelper(nums[1:]), robHelper(nums[:-1]))
