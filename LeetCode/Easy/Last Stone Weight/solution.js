const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    const stone1 = stones.splice(stones.indexOf(Math.max(...stones)), 1)[0];
    const stone2 = stones.splice(stones.indexOf(Math.max(...stones)), 1)[0];

    if (stone1 > stone2) stones.push(stone1 - stone2);
    else if (stone2 > stone1) stones.push(stone2 - stone1);
  }

  return stones[0] ? stones[0] : 0;
};
