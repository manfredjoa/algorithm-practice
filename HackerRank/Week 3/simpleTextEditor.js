// Problem
// Implement a simple text editor.
// The editor initially contains an empty string, S.
// Perform Q operations of the following 4 types:

// 1. append(W) - Append string W to the end of S.
// 2. delete(k) - Delete the last k characters of S.
// 3. print(k) - Print the kth character of S.
// 4. undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

function processData(input) {
  input = input.split("\n");
  let s = "";
  let stack = [];

  for (let i = 1; i < input.length; i++) {
    let op = input[i][0];
    let text = input[i].slice(2);

    if (op === "1") {
      stack.push(s);
      s += text;
    } else if (op === "2") {
      stack.push(s);
      let splitS = s.split("");

      for (let i = 0; i < parseInt(text); i++) splitS.pop();
      s = splitS.join("");
    } else if (op === "3") console.log(s[text - 1]);
    else {
      s = stack.pop();
    }
  }
}
