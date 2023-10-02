// Problem
// A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear.
// This is called a First - In - First - Out(FIFO) data structure because the first element added to the queue(i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:

// Enqueue: add a new element to the end of the queue.
// Dequeue: remove the element from the front of the queue and return it.
// In this challenge, you must first implement a queue using two stacks.
// Then process q queries, where each query is one of the following 3 types:

// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

// This doesn't actually use 2 stacks, but seems simpler.
function processData(input) {
  let queries = input.split("\n");
  let queue = [];

  for (let i = 1; i < queries.length; i++) {
    if (queries[i][0] === "1") {
      let num = queries[i].split(" ");
      queue.push(num[1]);
    } else if (queries[i][0] === "2") queue.shift();
    else console.log(queue[0]);
  }
}
