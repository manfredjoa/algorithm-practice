function KthLargest(k, nums) {
  this.minHeap = nums;
  this.k = k;
  this.min = -Infinity;

  this.minHeap.sort((a, b) => a - b);

  while (this.minHeap.length > this.k) this.minHeap.shift();

  if (this.minHeap.length > 0) this.min = this.minHeap[0];
}

KthLargest.prototype.add = function (val) {
  if (val > this.min || this.minHeap.length < this.k) {
    this.minHeap.push(val);
    this.minHeap.sort((a, b) => a - b);
  }

  while (this.minHeap.length > this.k) this.minHeap.shift();

  this.min = this.minHeap[0];

  return this.min;
};
