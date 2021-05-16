const Queue = require("./queue");

const queueDrills = () => {
  const starTrekQ = new Queue();

  // 6. Create a queue using singly linked list
  // 7. Create a queue class using doubly linked likest

  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");

  console.log(starTrekQ);

  // peek at what the 1st item in the queue is
  const peek = (q) => {
    let first = q.first;
    if (q.first === null) {
      return null;
    }
    return first.data;
  };

  console.log("first: " + peek(starTrekQ));

  // check if the queue is empty or not
  const isEmpty = (q) => {
    if (q.first === null) {
      return true;
    }
    return false;
  };

  console.log("isEmpty: " + isEmpty(starTrekQ));

  // display what is in the queue
  const display = (q) => {
    console.log("display queue: ");
    if (q.first === null) {
      return "queue is empty";
    }
    let current = q.first;
    while (current.next) {
      console.log(current.data);
      current = current.next;
    }
  };

  display(starTrekQ);

  // 8. Queue implementation using a stack

  // 9. Square dance pairing

  // 10. The Ophidian Bank
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function counter(q) {
    let counter = 0
    let current = q.first
    while (current.next) {
      counter ++
      current = current.next
    }
    console.log("# people in in line at start: " + counter)
    return counter
  }

  const ophidianBank = (q) => {
    let paperwork = 0;
    // counts the number of people in line
    let customers = counter(q)
    // we will look through the line of customers once
    for (let i = 0; i < customers; i++) {
      // 1 out of 4 (25%) probability paperwork isn't quite right
      paperwork = getRandomIntInclusive(1, 4);
      // 1 = bad paperwork => dequeue, then enqueue
      if (paperwork === 1) {
        console.log("You have bad paperwork, please go to the end of the line");
        let current = q.first;
        let goToEnd = q.first.data;
        // loop through the queue
        for (let j = 0; j < i; j++) {
          current = current.next;
        }
        goToEnd = current.data;
        q.dequeue(current.data);
        q.enqueue(goToEnd);
      }
      // 2, 3, 4 = good paperwork => dequeue
      else {
        console.log("You have good paperwork, have a nice day");
        let current = q.first;
        for (let k = 0; k < i; k++) {
          current = current.next;
        }
        q.dequeue(current.data);
      }
    }
    return display(q);
  };

  console.log(ophidianBank(starTrekQ));
};

module.exports = queueDrills;
