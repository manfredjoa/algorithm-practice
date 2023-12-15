class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_dict = {}

        for i in range(len(nums)):
            difference = target - nums[i]

            if difference not in nums_dict:
                nums_dict[nums[i]] = i
            else:
                return [nums_dict.get(difference), i]
