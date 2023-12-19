class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0

        def palindrome(left, right):
            nonlocal count

            while left >= 0 and right < len(s) and s[left] == s[right]:
                count += 1
                left -= 1
                right += 1

        for i in range(len(s)):
            palindrome(i, i)
            palindrome(i, i + 1)

        return count
