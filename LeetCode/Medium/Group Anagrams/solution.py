from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for s in strs:
            sTuple = tuple(sorted(s))
            anagrams[sTuple].append(s)

        return list(anagrams.values())
