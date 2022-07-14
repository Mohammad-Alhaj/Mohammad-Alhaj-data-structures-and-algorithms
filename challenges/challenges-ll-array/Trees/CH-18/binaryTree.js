"use strict";
let result = [];
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  
  fizzBuzzTree(node){

    function traverse(node){
      if((node.value/3)% 1 === 0 && (node.value/5)% 1 !== 0) {
        node.value ='Fizz';
      }else if((node.value/5)%1 ===0 && (node.value/3)% 1 !== 0){
        node.value ='Buzz';
      }else if((node.value/5)%1 ===0 && (node.value/3)% 1 === 0){
        node.value ='FizzBuzz';
      }else{
        node.value = node.value+''
      }

        result.push(node.value)
        if(node.left) traverse(node.left)

        if(node.right)traverse(node.right)
    }
    traverse(node)
    console.log(result);
    return result
}

  
}

module.exports = BinaryTree;
