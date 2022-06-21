'use strict';
const Node = require('./node');

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    IsEmpty(){
        if(this.front==null || this.rear==null){
            return true;
        }else{
            return false
        }
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.IsEmpty()){
            this.front= newNode;
            this.rear = newNode;
            this.length ++;
        }else{
            this.rear.next= newNode  ;
            this.rear = newNode
            this.length ++;

        }
    }
    dequeue(){
        if(this.IsEmpty()){
            console.log("can't remove");
            return false
        }else{
            let temp = this.front;
            this.front = this.front.next
            temp.next = null
            this.length--
            return temp.value
        }
    }

    peek(){
        if(this.IsEmpty()){
            console.log('The front is null');
            return null
        }else{
            console.log("The peek is ",this.front.value);
        }
    }
    emptyQueue(value){
        const newNode= new Node(value);
        if(this.IsEmpty()){
            this.front = null;
            this.rear = null;

        }else{
        this.rear.next = null
        this.rear = null
        }
    }
}

module.exports = Queue 