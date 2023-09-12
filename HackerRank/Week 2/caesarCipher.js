// Problem
// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let newString = [];
  for (let i = 0; i < s.length; i++) {
    let upperCase = false;
    let newIndex;

    if (s[i] !== s[i].toLowerCase()) {
      upperCase = true;
      newIndex = (alphabet.indexOf(s[i].toLowerCase()) + k) % 26;
    } else if (alphabet.indexOf(s[i]) === -1) newString.push(s[i]);
    else newIndex = (alphabet.indexOf(s[i]) + k) % 26;

    upperCase
      ? newString.push(alphabet[newIndex].toUpperCase())
      : newString.push(alphabet[newIndex]);
  }
  return newString.join("");
}
