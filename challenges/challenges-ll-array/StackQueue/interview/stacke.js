'use strict';

const Node =require('./node');


class Stack{

    constructor(){
        this.top = null
        this.length = 0
      

    }
   
    IsEmpty(){
        if(this.top === null )
        {
            // console.log('the Stack is empty');
        return true
    }else{
        return false
    }
    }
    push(value){
        const maxStack = new Node(value)
        if(this.peek()!==null){
        if(value >= this.peek()){
            maxStack.next = this.top
            this.top = maxStack
                this.length++;
        }
    }else{
        this.top = maxStack;
        this.length++;
    }
    }

    pop() {
        if(this.peek()!==null){
        if (this.top.value === this.peek()) {
            const temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            this.length -= 1;
        }
    }
    }

    peek(){
        if (this.IsEmpty()) {
            // console.log('peck = null ');
            return null
        }else{
            // console.log("The peck is ",this.top.value);
            return this.top.value;
        }
    }
    
    getMax(){
      
        console.log('The max value = ',this.top.value);

    }
}
module.exports = Stack