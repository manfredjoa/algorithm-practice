class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        min_len = min(len(word1), len(word2))
        merged_str = ''

        for i in range(min_len):
            merged_str += word1[i] + word2[i]

        if len(word1) > min_len:
            merged_str += word1[min_len:]
        elif len(word2) > min_len:
            merged_str += word2[min_len:]

        return merged_str
