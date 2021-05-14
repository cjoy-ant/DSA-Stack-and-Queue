  /* FIFO (First In First Out)
  e.g., ordering fast food at McD
  you line up, and service is provided in the order that you and everyone else lined up
  a queue is a type of list where data is inserted at the end
  and is removed from the front; they store data in the order in which they occur
  e.g., events loops of a web browser
  different events are triggered (e.g., clicking a btn)
  they are added the an event loop queue and handled in the order they entered the queue
  */

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }

  // INSERTION
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  // REMOVAL
  dequeue() {
    //if the queue is empty, there is nothing to return
   if (this.first === null) {
       return;
   }
   const node = this.first;
   this.first = this.first.next;
    //if this is the last item in the queue
   if (node === this.last) {
       this.last = null;
   }
   return node.value;
  }
}