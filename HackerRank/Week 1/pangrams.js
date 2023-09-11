// Problem
// A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet. Ignore case.
// Return either pangram or not pangram as appropriate.

// function pangrams(s) {
//   let pangramCheck =
//     s.toLowerCase().includes("a") &&
//     s.toLowerCase().includes("b") &&
//     s.toLowerCase().includes("c") &&
//     s.toLowerCase().includes("d") &&
//     s.toLowerCase().includes("e") &&
//     s.toLowerCase().includes("f") &&
//     s.toLowerCase().includes("g") &&
//     s.toLowerCase().includes("h") &&
//     s.toLowerCase().includes("i") &&
//     s.toLowerCase().includes("j") &&
//     s.toLowerCase().includes("k") &&
//     s.toLowerCase().includes("l") &&
//     s.toLowerCase().includes("m") &&
//     s.toLowerCase().includes("n") &&
//     s.toLowerCase().includes("o") &&
//     s.toLowerCase().includes("p") &&
//     s.toLowerCase().includes("q") &&
//     s.toLowerCase().includes("r") &&
//     s.toLowerCase().includes("s") &&
//     s.toLowerCase().includes("t") &&
//     s.toLowerCase().includes("u") &&
//     s.toLowerCase().includes("v") &&
//     s.toLowerCase().includes("w") &&
//     s.toLowerCase().includes("x") &&
//     s.toLowerCase().includes("y") &&
//     s.toLowerCase().includes("z");

//   if (pangramCheck) return "pangram";
//   else return "not pangram";
// }

function pangrams(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const splitAlphabet = alphabet.split("");

  let string = s.toLowerCase();
  let pangramCheck = true;

  splitAlphabet.forEach((letter) => {
    if (string.indexOf(letter) == -1) pangramCheck = false;
  });

  return pangramCheck ? "pangram" : "not pangram";
}
