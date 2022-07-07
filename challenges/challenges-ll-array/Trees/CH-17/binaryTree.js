'use strict'
  
const NodeQ = require('./nodeQ');

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
        const newNode = new NodeQ(value);
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
    
}   
    class BinaryTree{
        constructor(root = null){
           
            this.root = root;
        }
     
        breadthFirst(){
         const queue = new Queue();
            let current = this.root;
            let visited = []
            if(this.root == null) return null;
            queue.enqueue(current); // I push th address to the queue
            while(!queue.IsEmpty()){
                current = queue.dequeue(); 
               visited.push(current.value);
                if(current.left){
                    queue.enqueue(current.left);
                }
                if(current.right){
                    queue.enqueue(current.right)
                }
            }
            console.log(visited)

        }
}
module.exports = BinaryTree;

     