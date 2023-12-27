class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        result = []
        digitsMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        def backtrack(i, currStr):
            if len(currStr) == len(digits):
                result.append(currStr)
                return

            for char in digitsMap[digits[i]]:
                backtrack(i + 1, currStr + char)

        if digits:
            backtrack(0, '')
        else:
            return []

        return result
