// Problem
// An arcade game player wants to climb to the top of the leaderboard and track their ranking.
// The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number 1 on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

function climbingLeaderboard(ranked, player) {
  const uniqueRanked = [...new Set(ranked)];
  const playerRanks = [];
  let rank = uniqueRanked.length - 1;

  for (let i = 0; i < player.length; i++) {
    let right = uniqueRanked[rank];

    if (player[i] >= right) {
      rank--;
      i--;
    } else playerRanks.push(rank + 2);
  }
  return playerRanks;
}
