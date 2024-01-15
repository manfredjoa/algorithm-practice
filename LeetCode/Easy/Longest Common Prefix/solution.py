class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = strs[0]

        for s in strs[1:]:
            while prefix:
                if not s.startswith(prefix):
                    prefix = prefix[:-1]
                else:
                    break

        return prefix
