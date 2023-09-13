// Problem
// Louise and Richard have developed a numbers game.
// They pick a number and check to see if it is a power of 2.
// If it is, they divide it by 2.
// If not, they reduce it by the next lower number which is a power of 2.
// Whoever reduces the number to 1 wins the game.
// Louise always starts.
// Given an initial value, determine who wins the game.

function counterGame(n) {
  let louiseWins = false;
  let richardWins = false;
  let turns = 0;

  if (n === 1) return "Richard";

  const checkWinner = (n) => {
    if (Math.log2(n) % 1 === 0) {
      turns += Math.log2(n);
      if (turns % 2 === 1) louiseWins = true;
      else richardWins = true;
    } else {
      let result = n - 2 ** Math.floor(Math.log2(n));
      turns++;
      checkWinner(result);
    }
  };
  checkWinner(n);
  return louiseWins ? "Louise" : "Richard";
}
