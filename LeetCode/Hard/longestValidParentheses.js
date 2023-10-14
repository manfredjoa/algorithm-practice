// Prompt
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

const longestValidParentheses = (s) => {
  let stack = [];
  let stackIndex = [];
  let lengths = [];
  let tempCount = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      stackIndex.push(i);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        stackIndex.pop();
        tempCount += 2;
      } else {
        if (tempCount > count) count = tempCount;
        tempCount = 0;
        stackIndex.push(i);
      }
    }
  }

  if (tempCount > count) count = tempCount;

  if (stackIndex.length > 0) {
    for (let i = 0; i < stackIndex.length; i++) {
      if (stackIndex[i] === 0) continue;

      if (i === 0) {
        let slicedS = s.slice(0, stackIndex[i]);

        if (slicedS.length % 2 === 0 && slicedS.length > 0)
          lengths.push(slicedS.length);
      } else {
        let slicedS = s.slice(stackIndex[i - 1] + 1, stackIndex[i]);

        if (slicedS.length % 2 === 0 && slicedS.length > 0)
          lengths.push(slicedS.length);
      }
    }

    let lastSection = s.slice(stackIndex[stackIndex.length - 1] + 1, s.length);

    lengths.push(lastSection.length);

    if (lengths.length > 0) return Math.max(...lengths);
  }

  return count;
};
