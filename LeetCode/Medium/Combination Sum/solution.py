class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        def dfs(i, curr_list, curr_sum):
            if curr_sum == target:
                result.append(curr_list.copy())
                return
            elif i >= len(candidates) or curr_sum > target:
                return

            curr_list.append(candidates[i])
            dfs(i, curr_list, curr_sum + candidates[i])

            curr_list.pop()
            dfs(i + 1, curr_list, curr_sum)

        dfs(0, [], 0)

        return result
