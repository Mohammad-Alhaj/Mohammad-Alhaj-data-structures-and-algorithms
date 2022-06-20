'use strcit';
class Node{
  constructor(value){
    this.value=value;
    this.next= null
  }
}

class ll {
  constructor(){
    this.head=null
    this.tail=null
    this.length=0
  }
  append(value){
    const newNode = new Node(value)
    if(this.head==null){
       this.head = newNode;
        this.tail=newNode;
      this.length++
    }else{
      this.tail.next = newNode;
      this.tail = newNode
      this.length++
      
    }
  }
  toString(){
    let current = this.head;
    let strings= ""
    while(current !== null){
      strings = strings + ` ${current.value} `
      current= current.next
    }
    return `${strings}`
  }

  reverse(){
    if(!this.head.next){
      return this.head
    }
    else{
      let prev = null;
      let next = null;          
      while(this.head !==null){
        next = this.head.next;
        this.head.next = prev;
        prev = this.head;
        this.head = next
      }
    }
 
  }
  
}

module.exports = ll;