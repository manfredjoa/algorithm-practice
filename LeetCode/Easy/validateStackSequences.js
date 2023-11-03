// Prompt
// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

const validateStackSequences = (pushed, popped) => {
  const stack = [];
  let popCount = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack[stack.length - 1] === popped[popCount] && stack.length > 0) {
      stack.pop();
      popCount++;
    }
  }

  for (let i = popCount; i < popped.length; i++) {
    if (popped[i] === stack[stack.length - 1]) stack.pop();
  }

  return stack.length === 0 ? true : false;
};
