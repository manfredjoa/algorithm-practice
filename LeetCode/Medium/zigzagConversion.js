// Prompt
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

// P   A   H   N
// A P L S I I G
// Y   I   R

//And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

const convert = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) return s;

  let splitS = s.split("");

  let newS = [];
  for (let i = 0; i < numRows; i++) newS.push([]);

  let j = 0;
  let increment = true;

  for (let i = 0; i < s.length; i++) {
    newS[j].push(splitS[i]);

    if (j === numRows - 1 && increment === true) increment = false;
    if (j === 0 && increment === false) increment = true;

    if (increment) j++;
    else j--;
  }
  let convertedS = newS.flat().join("");

  return convertedS;
};
