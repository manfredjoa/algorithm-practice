// Problem
// Jesse loves cookies and wants the sweetness of some cookies to be greater than value k.
// To do this, two cookies with the least sweetness are repeatedly mixed.
// This creates a special combined cookie with:

// sweetness = Least sweet cookie + 2 * 2nd least sweet cookie).

// This occurs until all the cookies have a sweetness >= k.

// Given the sweetness of a number of cookies, determine the minimum number of operations required.
// If it is not possible, return -1.

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.sinkDown(0);
    }

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallest]
    )
      smallest = leftIndex;

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    )
      smallest = rightIndex;

    if (smallest !== index) {
      this.swap(smallest, index);
      this.sinkDown(smallest);
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

const cookies = (k, A) => {
  if (A.length === 1) return A[0] < k ? -1 : 0;

  const minHeap = new MinHeap();

  A.forEach((cookie) => minHeap.push(cookie));

  let count = 0;

  while (minHeap.heap.length > 1) {
    const firstMin = minHeap.pop();
    const secondMin = minHeap.pop();
    const newCookie = firstMin + 2 * secondMin;

    minHeap.push(newCookie);

    if (firstMin >= k) return count;
    else count++;

    if (minHeap.heap[0] >= k) return count;
  }

  return minHeap.heap[0] >= k ? count : -1;
};
