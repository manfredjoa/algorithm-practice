class Solution:
    def romanToInt(self, s: str) -> int:
        roman_numerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        result = 0

        for char in s:
            if char in roman_numerals:
                result += roman_numerals[char]

        for i in range(len(s) - 1):
            if s[i] == 'I' and (s[i+1] == 'V' or s[i+1] == 'X'):
                result -= 2
            elif s[i] == 'X' and (s[i+1] == 'L' or s[i+1] == 'C'):
                result -= 20
            elif s[i] == 'C' and (s[i+1] == 'D' or s[i+1] == 'M'):
                result -= 200

        return result
