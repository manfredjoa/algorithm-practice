class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        expected_sum = int(n * ((n + 1) / 2))
        input_sum = sum(nums)
        input_set = set()
        duplicate_number = None

        for num in nums:
            if num in input_set:
                duplicate_number = num
                break

            input_set.add(num)

        missing_number = expected_sum - input_sum + duplicate_number

        return [duplicate_number, missing_number]
