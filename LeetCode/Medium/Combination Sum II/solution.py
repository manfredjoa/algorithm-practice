class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        candidates.sort()

        def dfs(i, currArr, currSum):
            if currSum == target:
                result.append(currArr.copy())
                return
            elif i >= len(candidates) or currSum > target:
                return

            currArr.append(candidates[i])
            dfs(i + 1, currArr, currSum + candidates[i])

            while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
                i += 1

            currArr.pop()
            dfs(i + 1, currArr, currSum)

        dfs(0, [], 0)

        return result
