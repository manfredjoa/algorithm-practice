// Prompt
// You have n processors each having 4 cores and n * 4 tasks that need to be executed such that each core should perform only one task.

// Given a 0-indexed integer array processorTime representing the time at which each processor becomes available for the first time and a 0-indexed integer array tasks representing the time it takes to execute each task, return the minimum time when all of the tasks have been executed by the processors.

// Note: Each core executes the task independently of the others.

const minProcessingTime = (processorTime, tasks) => {
  processorTime.sort((a, b) => a - b);
  tasks.sort((a, b) => a - b);

  let min = -Infinity;

  for (let i = 0; i < processorTime.length; i++) {
    let splicedTasks = tasks.splice(tasks.length - 4);

    let timeTaken = processorTime[i] + splicedTasks[3];

    if (timeTaken > min) min = timeTaken;
  }

  return min;
};
