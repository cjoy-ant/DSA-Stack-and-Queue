// Creates a node containing the data and a reference to the next item
class _Node {
  // add prev as parameter for doubly linked list
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

module.exports = _Node;
