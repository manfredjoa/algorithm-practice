const dailyTemperatures = (temperatures) => {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      const stackIndex = stack[stack.length - 1][1];

      stack.pop();
      result[stackIndex] = i - stackIndex;
    }

    stack.push([temperatures[i], i]);
  }

  return result;
};
