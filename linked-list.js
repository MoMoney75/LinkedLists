/** node for a singly linked list. */

const { error } = require("console");
const e = require("express");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
          let current = this.head
          this.head = newNode;
          newNode.next = current;
}
this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return undefined;
    }
  
    let current = this.head;
    let newTail = current;
  
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
  
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  
    return current.val;
  }
  /** shift(): return & remove first item. */

  shift() {
  if(this.length === 0){
    return undefined;
  }
  
  let removed = this.head;
  this.head = this.head.next;
  this.length--

  if(this.length === 0){
    this.head = null
    this.tail = null;
  }
  return removed.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if(idx < 0 || idx >= this.length){
      throw new error("index does not exist!")
    }

    let current = this.head;
    let counter = 0
   
    while(counter !== idx){
      current = current.next;
      counter++
    }
      return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //node.val = val
    if(idx < 0 || idx >= this.length){
      throw new error("unable to get value of index")
    }

    let current = this.head;
    let counter = 0;

    while(counter !== idx){
      current = current.next;
      counter++
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if(idx < 0 || idx > this.length){
    throw new error("unable to get value of index")
  } else if(idx === 0){
    this.head = newNode;
    this.tail = newNode;
  }
  
  let current = this.head;
  let counter = 0;
  while(counter < idx-1){
    current = current.next;
    counter++
  }
  newNode.next = current.next;
  current.next = newNode;

  if (idx === this.length) {
    this.tail = newNode;
  }
  this.length++

 
  }
 
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
  if(idx < 0 || idx > this.length){
    throw new error("invalid index")
  }

  else if(this.length === 0){
    this.head = null;
    this.tail = null;
  }

    let temp = this.head
    let current = temp.next
    let counter = 0
    while(counter !== idx){
      current = temp.next;
      counter++
    }
//        t
// idx=2      c
// head > 1 > 2 > 3 > tail
if(temp === this.tail){
  this.pop()
}
else{
    temp.next = current.next;
    return current.val;
}
    counter--   
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0;
    }

    //add all items, divide by this.length
    let current = this.head;
    let total = 0;

    while(current !== null){
      total+=current.val
      current = current.next;      
    }

    return total/this.length

  }
}

module.exports = LinkedList;
