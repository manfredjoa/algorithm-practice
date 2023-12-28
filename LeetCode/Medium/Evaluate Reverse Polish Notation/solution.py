class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for token in tokens:
            if token == '+':
                stack.append(stack.pop() + stack.pop())
            elif token == '-':
                stack.append(stack.pop(len(stack) - 2) - stack.pop())
            elif token == '*':
                stack.append(stack.pop() * stack.pop())
            elif token == '/':
                stack.append(int(stack.pop(len(stack) - 2) / stack.pop()))
            else:
                stack.append(int(token))

        return stack[0]
