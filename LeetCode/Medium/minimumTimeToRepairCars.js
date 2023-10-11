// Prompt
// You are given an integer array ranks representing the ranks of some mechanics. ranksi is the rank of the ith mechanic.
// A mechanic with a rank r can repair n cars in r * n2 minutes.

// You are also given an integer cars representing the total number of cars waiting in the garage to be repaired.

// Return the minimum time taken to repair all the cars.

// Note: All the mechanics can repair the cars simultaneously.

const repairCars = (ranks, cars) => {
  let min = Math.min(...ranks);
  let max = Math.max(...ranks);

  let repairedCars = 0;
  let minTime = min;
  let maxTime = max * cars ** 2;

  while (minTime < maxTime) {
    let mid = Math.floor((minTime + maxTime) / 2);
    repairedCars = 0;

    for (let time of ranks) repairedCars += Math.floor(Math.sqrt(mid / time));

    if (repairedCars < cars) minTime = mid + 1;
    else maxTime = mid;
  }

  return minTime;
};
