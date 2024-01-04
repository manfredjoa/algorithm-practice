function Twitter() {
  this.count = 0;
  this.tweetMap = new Map();
  this.followMap = new Map();
}

Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetMap.get(userId))
    this.tweetMap.set(userId, [[this.count, tweetId]]);
  else this.tweetMap.get(userId).push([this.count, tweetId]);

  this.count--;
};

Twitter.prototype.getNewsFeed = function (userId) {
  const result = [];
  let tweets = [];

  if (!this.followMap.get(userId))
    this.followMap.set(userId, new Set([userId]));
  else this.followMap.get(userId).add(userId);

  for (const followeeId of this.followMap.get(userId)) {
    if (this.tweetMap.get(followeeId)) {
      let index = this.tweetMap.get(followeeId).length - 1;
      let count = this.tweetMap.get(followeeId)[index][0];
      let tweetId = this.tweetMap.get(followeeId)[index][1];

      tweets.push([count, tweetId, followeeId, index - 1]);
    }
  }

  while (tweets.length && result.length < 10) {
    tweets.sort((a, b) => b[0] - a[0]);

    let tweet = tweets.pop(),
      tweetId = tweet[1],
      followeeId = tweet[2],
      index = tweet[3];

    result.push(tweetId);

    if (index >= 0) {
      tweet = this.tweetMap.get(followeeId)[index];
      tweets.push([tweet[0], tweet[1], followeeId, index - 1]);
    }
  }

  return result;
};

Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap.get(followerId))
    this.followMap.set(followerId, new Set([followeeId]));
  else this.followMap.get(followerId).add(followeeId);
};

Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.followMap.get(followerId))
    this.followMap.get(followerId).delete(followeeId);
};
