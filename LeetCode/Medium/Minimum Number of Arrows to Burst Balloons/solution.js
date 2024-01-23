const findMinArrowShots = (points) => {
  let arrowCount = 0;
  let currentArrowPos = -Infinity;

  points.sort((a, b) => a[1] - b[1]);

  for (const [start, end] of points) {
    if (start > currentArrowPos) {
      arrowCount++;
      currentArrowPos = end;
    }
  }

  return arrowCount;
};
