const Node = require("../Implementation-linked-list/node");

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //.......... insert method..........
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    
  }
  //........print list............
  

  //.........boolen method............
  includes(value){
 
    while (this.head) {
        // console.log(this.head);
        if (this.head.value == value) {
           return true;
        }  this.head = this.head.next
            }
            return false
  }
  //.........to string method............
  toString(){

     let sumString="" ;
    while (this.head) {
     sumString+=`{${this.head.value}} -> `
     this.head = this.head.next
     
     }
    
     return `${sumString}${this.head}`; 
    
  }

}
module.exports = linkedList;
