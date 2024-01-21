class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        candidates.sort()

        def dfs(i, curr_list, curr_sum):
            if curr_sum == target:
                result.append(curr_list.copy())
                return
            elif i >= len(candidates) or curr_sum > target:
                return

            curr_list.append(candidates[i])
            dfs(i + 1, curr_list, curr_sum + candidates[i])

            while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
                i += 1

            curr_list.pop()
            dfs(i + 1, curr_list, curr_sum)

        dfs(0, [], 0)

        return result
