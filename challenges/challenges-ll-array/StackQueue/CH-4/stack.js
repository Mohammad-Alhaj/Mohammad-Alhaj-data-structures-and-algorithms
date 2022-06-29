'use strict';

const Node = require('./node');

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

    validateBrackets(string){
      let current = this.top
            for (let i = 0; i < string.length; i++) {
               
               if(string[i] == '('||string[i] == '['||string[i] == '{')
               { this.push(string[i])}
          
            else if(string[i] == ')'||string[i] == ']'||string[i] == '}'){
                this.push(string[i])
            }
    
            if(this.length != 0){
         
            if(this.top.value == ']'&& this.top.next.value == '['){
                this.pop();
                this.pop();
            }
            else if(this.top.value == '}'&& this.top.next.value == '{'){
                this.pop();
                this.pop();
            }
            else if(this.top.value == ')'&& this.top.next.value == '('){
                this.pop();
                this.pop();
            }
        }else{
            console.log('The stack is null');
        }
            // console.log("this.top",this.top);
            // console.log("this.top.next",this.top.next);

        }
        if(this.length == 0) {
            console.log('true');
            return true
        }
            
            else { 
                console.log('false')
             return false }


        // }else console.log('The stack is empty');
    }
}
module.exports = Stack