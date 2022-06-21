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
        const newNode = new Node(value)
        if(this.IsEmpty()){
            this.top = newNode;
            this.length++;
        }else{
        newNode.next = this.top
        this.top = newNode

            this.length++;

        }
    }

    pop() {
        if (this.IsEmpty()) {
            console.log('No Nodes are left in the stack');
            return false;
        }
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length -= 1;
        return temp.value;
    }

    peek(){
        if (this.IsEmpty()) {
            console.log('peck = null ');
            return null
        }else{
            console.log("The peck is ",this.top.value);
            return this.top.value;
        }
    }
    emptyStack(value){
        const newNode= new Node(value);
        if(this.IsEmpty()){
            this.top = null;
        }else{
        newNode.next = null
        this.top = null

        }
    }
}
module.exports = Stack