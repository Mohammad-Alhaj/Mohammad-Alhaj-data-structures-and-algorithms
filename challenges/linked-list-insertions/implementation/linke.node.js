'use strict';
const e = require("express");
const Node = require("./node");

class linkedList{
    constructor(){
        this.head=null,
        this.tail=null,
        this.length=0
    }
//.........................append...............................
    append(value){
       let newValue = new Node(value)
        if(!this.head){
            this.head = newValue;
            this.tail = newValue;
        }else{
            this.tail.next = newValue;
            console.log("this.tail.e=next",this.tail.next);
            this.tail = newValue;
            }
        
        console.log(newValue);
        console.log( this.length);
      this.length++;

    };
   

//.........................insertBefore...............................
insertBefore(Value,nValue){
    let prev = this.getIndex(Value)
    let newValue = new Node(nValue);
    if(!this.head){
     console.log("error the linked list it's empty");
    }else if(prev-1 < 0){        
        this.unshift(newValue)
        this.length++
    }else {
        let currents = this.head
        let count =0;
        while (count !== prev-1) {
            currents=currents.next
            count++
        }
        let temp = currents
        newValue.next = temp.next
        temp.next = newValue
        this.length++

    }
     
//................getIndex.......................
}
getIndex(value){
    let counter = 0;
    let current = this.head
    while(current.value !== value){
        current = current.next;
        counter++;
    }
    return counter;
}
//...............unshift.........................
unshift(value){
    value.next = this.head
    this.head =value
    return this;
}
addInEnd(value){
this.tail.next = value;
this.tail = value;
return this;
}
//.....................insertAfter.............................
insertAfter(Value,nValue){
    let prev = this.getIndex(Value)
    let newValue = new Node(nValue);
    if(!this.head){
     console.log("error the linked list it's empty");
    }else if(Value==this.tail.value){
      this.addInEnd(newValue)
          this.length++
    }else {
        let currents = this.head
        let count =0;
        while (count !== prev) {
            currents=currents.next
            count++
        }
        let temp = currents
        newValue.next = temp.next
        temp.next = newValue
        this.length++

    } 

}

}
 


module.exports = linkedList;