class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        parentheses_map = {
            "(": ")",
            "[": "]",
            "{": "}"
        }

        for char in s:
            if char in parentheses_map:
                stack.append(parentheses_map[char])
            elif len(stack) == 0 or char != stack.pop():
                return False

        return len(stack) == 0
