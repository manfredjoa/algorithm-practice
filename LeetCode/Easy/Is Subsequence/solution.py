class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        next = [{} for _ in range(len(t) + 1)]

        for i in range(len(t) - 1, -1, -1):
            next[i] = next[i + 1].copy()
            next[i][t[i]] = i + 1

        i = 0

        for char in s:
            if char in next[i]:
                i = next[i][char]
            else:
                return False

        return True
