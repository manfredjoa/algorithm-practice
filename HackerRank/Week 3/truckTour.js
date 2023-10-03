// Problem
// Suppose there is a circle. There are N petrol pumps on that circle. Petrol pumps are numbered 0 to (N - 1)(both inclusive).

// You have two pieces of information corresponding to each of the petrol pump:
// (1) the amount of petrol that particular petrol pump will give, and
// (2) the distance from that petrol pump to the next petrol pump.

// Initially, you have a tank of infinite capacity carrying no petrol.
// You can start the tour at any of the petrol pumps.
// Calculate the first point from where the truck will be able to complete the circle.
// Consider that the truck will stop at each of the petrol pumps.
// The truck will move one kilometer for each litre of the petrol.

function truckTour(petrolpumps) {
  let totalPetrol = 0;
  let totalDistance = 0;
  let petrolInTank = 0;
  let startIndex = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    const [petrol, distance] = petrolpumps[i];
    totalPetrol += petrol;
    totalDistance += distance;

    petrolInTank += petrol - distance;
    if (petrolInTank < 0) {
      petrolInTank = 0;
      startIndex = i + 1;
    }
  }

  // If total petrol is less than total distance, it is not possible to complete the circle.
  // if (totalPetrol < totalDistance) {
  //   return -1;
  // }

  return startIndex;
}
