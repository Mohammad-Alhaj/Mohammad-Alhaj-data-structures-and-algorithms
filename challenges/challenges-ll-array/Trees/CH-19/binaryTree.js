"use strict";
let result = [];
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  
compareFiles(node,node2){
  let counter = 0;
  let temp = node
  let temp2 = node2
  function traverse(node){
      if(node.left === null && node.right === null){
          counter++;
        }
      if(node.left) traverse(node.left)

      if(node.right)traverse(node.right)
  }
  traverse(temp)
  let counterNode = counter;
  counter = 0
   traverse(temp2)
  console.log({counter});
  console.log({counterNode});
  console.log(counterNode == counter? true:false) ;
 
}
  
}

module.exports = BinaryTree;
