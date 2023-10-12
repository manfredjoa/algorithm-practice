// Problem
// A company has n employees with a unique ID for each employee from 0 to n - 1.
// The head of the company is the one with headID.

// Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1.
// Also, it is guaranteed that the subordination relationships have a tree structure.

// The head of the company wants to inform all the company employees of an urgent piece of news.
// He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

// Return the number of minutes needed to inform all the employees about the urgent news.

const numOfMinutes = (n, headID, manager, informTime) => {
  if (n === 1) return 0;

  const managers = {};

  for (let i = 0; i < manager.length; i++) {
    if (manager[i] === -1) continue;

    if (!managers[manager[i]]) managers[manager[i]] = [i];
    else managers[manager[i]].push(i);
  }

  const traverse = (currentEmployee) => {
    let maxTime = informTime[currentEmployee];

    if (managers[currentEmployee]) {
      let time = 0;

      for (const subordinate of managers[currentEmployee])
        time = Math.max(time, traverse(subordinate));

      maxTime += time;
    }

    return maxTime;
  };

  return traverse(headID);
};
