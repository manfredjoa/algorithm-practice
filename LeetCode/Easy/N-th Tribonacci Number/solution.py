class Solution:
    def tribonacci(self, n: int) -> int:
        values = [0, 1, 1]

        if n == 0:
            return 0
        elif n in {1, 2}:
            return 1

        for i in range(3, n):
            values.append(values[0] + values[1] + values[2])
            values.pop(0)

        return values[0] + values[1] + values[2]
