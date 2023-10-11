// Prompt
// You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.

// Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip.
// Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.

// You are also given an integer totalTrips, which denotes the number of trips all buses should make in total.
// Return the minimum time required for all buses to complete at least totalTrips trips.

const minimumTime = (time, totalTrips) => {
  let min = Math.min(...time);
  let max = Math.max(...time);

  let left = min;
  let right = max * totalTrips;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let trips = 0;

    for (let tripTime of time) trips += Math.floor(mid / tripTime);

    if (trips < totalTrips) left = mid + 1;
    else right = mid;
  }

  return left;
};
