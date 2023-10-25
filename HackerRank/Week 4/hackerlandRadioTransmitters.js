// Problem
// Hackerland is a one-dimensional city with houses aligned at integral locations along a road.
// The Mayor wants to install radio transmitters on the roofs of the city's houses.
// Each transmitter has a fixed range meaning it can transmit a signal to all houses within that number of units distance away.

// Given a map of Hackerland and the transmission range, determine the minimum number of transmitters so that every house is within range of at least one transmitter.
// Each transmitter must be installed on top of an existing house.

const hackerlandRadioTransmitters = (x, k) => {
  let count = 0;
  let i = 0;

  let houses = Array.from(new Set(x));
  houses.sort((a, b) => a - b);

  let min = houses[0];
  let mid;

  while (i <= houses.length - 2) {
    if (min + k >= houses[i + 1]) {
      mid = houses[i + 1];
      i++;
    } else {
      if (houses[i + 1] <= mid + k) i++;
      else {
        min = houses[i + 1];
        count++;
      }
    }
  }

  count++;

  return count;
};
