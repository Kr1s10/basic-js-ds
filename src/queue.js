const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstElement = null;
    this.lastElement = null;
  }

  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    let newEl = new ListNode(value);
    this.firstElement ? this.lastElement.next = newEl : this.firstElement = newEl;
    this.lastElement = newEl;
    return this;
  }

  dequeue() {
    let firstInQueue = this.firstElement.value;
    this.firstElement = this.firstElement.next;
    return firstInQueue;
  }
}

module.exports = {
  Queue
};
