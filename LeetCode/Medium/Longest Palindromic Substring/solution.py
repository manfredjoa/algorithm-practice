class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ""
        resultLength = 0

        def palindrome(left, right):
            nonlocal result, resultLength

            while left >= 0 and right < len(s) and s[left] == s[right]:
                length = right - left + 1

                if length > resultLength:
                    result = s[left:right + 1]
                    resultLength = length

                left -= 1
                right += 1

        for i in range(len(s)):
            palindrome(i, i)
            palindrome(i, i + 1)

        return result
