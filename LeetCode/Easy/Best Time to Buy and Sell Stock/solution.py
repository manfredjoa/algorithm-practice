class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = prices[0]
        profit = 0

        for right in range(1, len(prices)):
            left = min(left, prices[right])
            profit = max(profit, prices[right] - left)

        return profit
