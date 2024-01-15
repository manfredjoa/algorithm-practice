class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        char_map = {}

        for i, char in enumerate(s):
            if char in char_map:
                if char_map[char] != t[i]:
                    return False
            else:
                if t[i] in char_map.values():
                    return False

                char_map[char] = t[i]

        return True
