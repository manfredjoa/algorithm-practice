class Node {
  constructor(key, val) {
    (this.key = key), (this.val = val);
  }
}

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  (this.left = new Node(0, 0)), (this.right = new Node(0, 0));
  (this.left.next = this.right), (this.right.prev = this.left);
};

LRUCache.prototype.remove = function (node) {
  let prev = node.prev,
    next = node.next;

  (prev.next = next), (next.prev = prev);
};

LRUCache.prototype.insert = function (node) {
  let prev = this.right.prev,
    next = this.right;

  (prev.next = node), (next.prev = node);
  (node.prev = prev), (node.next = next);
};

LRUCache.prototype.get = function (key) {
  if (this.cache.get(key)) {
    this.remove(this.cache.get(key));
    this.insert(this.cache.get(key));

    return this.cache.get(key).val;
  } else return -1;
};

LRUCache.prototype.put = function (key, val) {
  if (this.cache.get(key)) this.remove(this.cache.get(key));

  this.cache.set(key, new Node(key, val));
  this.insert(this.cache.get(key));

  if (this.cache.size > this.capacity) {
    const lru = this.left.next;

    this.remove(lru);
    this.cache.delete(lru.key);
  }
};
