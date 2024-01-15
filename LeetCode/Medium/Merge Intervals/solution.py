class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals = sorted(intervals, key=lambda x: x[0])
        merged_intervals = []
        prev_interval = None

        for interval in intervals:
            if prev_interval and interval[0] <= prev_interval[1]:
                merged_interval = [min(prev_interval[0], interval[0]), max(
                    prev_interval[1], interval[1])]

                if prev_interval in merged_intervals:
                    merged_intervals.remove(prev_interval)

                merged_intervals.append(merged_interval)
                prev_interval = merged_interval
            else:
                merged_intervals.append(interval)
                prev_interval = interval

        return merged_intervals
