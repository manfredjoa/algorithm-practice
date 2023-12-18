class Solution:
    def rob(self, nums: List[int]) -> int:
        one, two = 0, 0

        for num in nums:
            temp = max(one + num, two)
            one = two
            two = temp

        return two
