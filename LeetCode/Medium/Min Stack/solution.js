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
