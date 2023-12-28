class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        stack = []

        def backtrack(opening, closing):
            if opening + closing == n * 2:
                result.append(''.join(stack))
                return

            if opening < n:
                stack.append('(')
                backtrack(opening + 1, closing)
                stack.pop()

            if closing < opening:
                stack.append(')')
                backtrack(opening, closing + 1)
                stack.pop()

        backtrack(0, 0)

        return result
