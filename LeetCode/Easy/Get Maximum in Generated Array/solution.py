class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1:
            return 1

        values = [0, 1]
        max_num = 1

        for i in range(2, n + 1):
            if i % 2 == 0:
                values.append(values[i // 2])
            else:
                first = i // 2
                values.append(values[first] + values[first + 1])

            max_num = max(max_num, values[len(values) - 1])

        return max_num
