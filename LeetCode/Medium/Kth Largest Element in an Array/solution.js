class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return;
    else if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return root;
  }

  heapifyUp() {
    let currIndex = this.heap.length - 1;

    while (currIndex > 0) {
      const parentIndex = Math.floor((currIndex - 1) / 2);

      if (this.heap[currIndex] < this.heap[parentIndex]) {
        this.swap(currIndex, parentIndex);
        currIndex = parentIndex;
      } else break;
    }
  }

  heapifyDown() {
    let currIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currIndex + 1;
      const rightChildIndex = 2 * currIndex + 2;
      let minIndex = currIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      )
        minIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      )
        minIndex = rightChildIndex;

      if (minIndex !== currIndex) {
        this.swap(currIndex, minIndex);
        currIndex = minIndex;
      } else break;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

const findKthLargest = (nums, k) => {
  const minHeap = new MinHeap();

  for (let i = 0; i < k; i++) minHeap.push(nums[i]);

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.heap[0]) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  return minHeap.heap[0];
};
