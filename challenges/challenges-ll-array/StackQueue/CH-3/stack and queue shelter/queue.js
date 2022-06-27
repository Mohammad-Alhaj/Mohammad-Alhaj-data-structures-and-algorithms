'use strict';
 
const Node = require('./node');
class AnimalShelter{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(Animal){
        
        const newNode = new Node(Animal);
        if(Animal == "dog"|| Animal == "cat"){
            if(this.front == null ||this.rear == null){
                this.front = newNode  ;
                this.rear = newNode  ;
                this.length++
            }else{
                this.rear.next = newNode;
                this.rear = newNode;
                this.length++;
            }
        }else{
            console.log('The animal just can be the dog or cat!');
        }
    }

    dequeue(pref){
       
            if(pref == 'dog' && this.front.value =='dog' ){
                console.log(`The pref = ${this.front.value}`);
                let temp = this.front;
                this.front = this.front.next ;
                temp.next = null; 
                this.length--;
            }
            else if(pref == 'cat' && this.front.value =='cat'){
                console.log(`The pref = ${this.front.value}`);
                let temp = this.front;
                this.front = this.front.next ;
                temp.next = null; 
                this.length--;
            }else{
                console.log('null');
            }
        
    }
}
// || 
module.exports =  AnimalShelter