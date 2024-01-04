from collections import *
from heapq import *


class Twitter:

    def __init__(self):
        self.count = 0
        self.tweet_map = defaultdict(list)
        self.follow_map = defaultdict(set)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweet_map[userId].append([self.count, tweetId])
        self.count -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        min_heap = []
        result = []

        self.follow_map[userId].add(userId)

        for followee_id in self.follow_map[userId]:
            if followee_id in self.tweet_map:
                index = len(self.tweet_map[followee_id]) - 1
                count, tweet_id = self.tweet_map[followee_id][index]
                min_heap.append([count, tweet_id, followee_id, index - 1])

        heapify(min_heap)

        while min_heap and len(result) < 10:
            count, tweet_id, followee_id, index = heappop(min_heap)
            result.append(tweet_id)

            if index >= 0:
                count, tweet_id = self.tweet_map[followee_id][index]
                heappush(min_heap, [count, tweet_id, followee_id, index - 1])

        return result

    def follow(self, followerId: int, followeeId: int) -> None:
        self.follow_map[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follow_map:
            self.follow_map[followerId].remove(followeeId)
