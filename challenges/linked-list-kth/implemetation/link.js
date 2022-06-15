'use strict';

const Node = require('./node');

class linkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    append(value){
        const newNode = new Node(value)
if(!this.head){
 this.head = newNode
 this.tail = newNode;
   this.length++;
}
else{
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
}
    }
//.............reverse.............
    reverse(){
        if(!this.head.next){
            console.log("error the liked list has one element")
            return this.head;
        }else{
            let prev = null;
            let next = null;
            while(this.head !== null){
                next =this.head.next;
                this.head.next = prev;
                prev = this.head;
                this.head =next
            }
      
        }

    }

    //.............................
    kthFromEnd(k){
         let count = 0;
         let temp = this.tail;
         if(this.length == 1){
            console.log(this.head.value)
             return this.head.value;
         }
         else if(k > this.length-1 || k < 0){
            return "Exception"
         }else if(k==0){
           return temp.value
         }
         else{
            let temps = this.tail;
            while(count !== k){
                temps =temps.next
                count++;
            }
            return temps.value
         }
        
    }

middle(){
    let counter = 1;
    let temp = this.head
    while(counter!== Math.ceil(this.length/2) ){
        temp = temp.next
        counter++
    }
    console.log("The middle >>>>>>>>> ",temp.value);
    return temp.value
}
    
}
module.exports = linkedList