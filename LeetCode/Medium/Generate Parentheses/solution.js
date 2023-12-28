const generateParenthesis = (n) => {
  const result = [];
  const stack = [];

  const backtrack = (open, close) => {
    if (open + close === n * 2) {
      result.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);

  return result;
};
