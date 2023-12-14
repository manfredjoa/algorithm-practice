// Prompt
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// - MinStack() initializes the stack object.
// - void push(int val) pushes the element val onto the stack.
// - void pop() removes the element on the top of the stack.
// - int top() gets the top element of the stack.
// - int getMin() retrieves the minimum element in the stack.

// You must implement a solution with O(1) time complexity for each function.

const MinStack = function () {
  this.values = [];
  this.min = [];
};

MinStack.prototype.push = function (val) {
  this.values.push(val);
  this.min.push(
    this.min.length ? Math.min(val, this.min[this.min.length - 1]) : val
  );
};

MinStack.prototype.pop = function () {
  this.values.pop();
  this.min.pop();
};

MinStack.prototype.top = function () {
  return this.values[this.values.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};
