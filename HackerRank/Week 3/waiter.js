// Problem
// You are a waiter at a party.
// There is a pile of numbered plates.
// Create an empty answers array.
// At each iteration, i, remove each plate from the top of the stack in order.
// Determine if the number on the plate is evenly divisible by the ith prime number.
// If it is, stack it in pile Bi.
// Otherwise, stack it in stack Ai.
// Store the values in from top to bottom in answers.
// In the next iteration, do the same with the values in stack Ai.
// Once the required number of iterations is complete, store the remaining values in Ai in answers, again from top to bottom.
// Return the answers array.

function waiter(plates, q) {
  let answers = [];
  let A = plates;
  let B = [];

  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const getIthPrime = (i) => {
    let primes = [];
    let num = 2;

    while (primes.length < i) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes[i - 1];
  };

  for (let i = 1; i <= q; i++) {
    let prime = getIthPrime(i);
    let newA = [];

    while (A.length > 0) {
      let plate = A.pop();

      if (plate % prime === 0) {
        B.push(plate);
      } else {
        newA.push(plate);
      }
    }

    while (B.length > 0) answers.push(B.pop());

    A = newA;
  }

  while (A.length > 0) answers.push(A.pop());

  return answers;
}
