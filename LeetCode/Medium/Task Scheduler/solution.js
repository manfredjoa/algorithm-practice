const leastInterval = (tasks, n) => {
  const map = new Map();
  const counts = [];
  const queue = [];
  let time = 0;

  for (const task of tasks) map.set(task, (map.get(task) ?? 0) + 1);

  for (const value of map.values()) counts.push(-value);

  while (counts.length || queue.length) {
    counts.sort((a, b) => b - a);

    time++;

    if (counts.length) {
      const count = 1 + counts.pop();

      if (count) queue.push([count, time + n]);
    }

    if (queue.length && queue[0][1] === time) counts.push(queue.shift()[0]);
  }

  return time;
};
