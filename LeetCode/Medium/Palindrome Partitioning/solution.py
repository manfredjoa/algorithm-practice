class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        partition = []

        def isPalindrome(str, left, right):
            while left < right:
                if str[left] != str[right]:
                    return False

                left += 1
                right -= 1

            return True

        def dfs(i):
            if i >= len(s):
                result.append(partition.copy())
                return

            for j in range(i, len(s)):
                if isPalindrome(s, i, j):
                    partition.append(s[i: j + 1])
                    dfs(j + 1)
                    partition.pop()

        dfs(0)

        return result
