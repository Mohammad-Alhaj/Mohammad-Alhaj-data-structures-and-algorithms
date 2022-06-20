'use strict';
const Node = require('./node')
// const Node2 = require('./node')
// const linkedList1 = new linkedList();
// const linkedList2 = new LinkedList2();

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }

    append(value){
       const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

    }
   
    linkedListZip(list1,list2){
        let result = new linkedList();
        let element1 = list1.head;
        let element2 = list2.head;
        while(element1!=null || element2!=null){
            if(element1!=null){
                result.append(element1.value);
                element1 = element1.next
            }
            if (element2!=null) {
                result.append(element2.value);
                element2 = element2.next 
            }
        }
        return result;
          }
printList(){
    while (this.head) {
        console.log(this.head.value);
        this.head = this.head.next
    }
} 
toString(){

    let sumString="" ;
   while (this.head) {
    sumString+=`{${this.head.value}} -> `
    this.head = this.head.next
    
    }
   
    return `${sumString}${this.head}`; 
   
 }
 

}


module.exports ={linkedList}