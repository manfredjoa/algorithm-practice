class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0

        one, two = 1, 1

        for i in range(0, n - 2):
            temp = one
            one = one + two
            two = temp

        return one
