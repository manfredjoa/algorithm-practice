const kClosest = (points, k) => {
  const distances = [];
  const result = [];

  for (const point of points) {
    const distance = point[0] ** 2 + point[1] ** 2;

    distances.push([distance, ...point]);
  }

  distances.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < k; i++) {
    distances[i].shift();
    result.push(distances[i]);
  }

  return result;
};
