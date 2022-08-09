'use strict';

class BinaryTree{
    constructor(root = null){
        this.root = root
    }
    preOrder(){
        let result = [];
        let counter = 0;
        function traverse(node){
            result.push(node.value)
            if(node.left === null && node.right === null){
                counter++;
              }
            if(node.left) traverse(node.left)

            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        console.log(result);
        console.log(counter);
        return result
    }
    inOrder(){
        let result = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            result.push(node.value)

            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        console.log(result);
        return result
    }
    postOrder(){
        let result = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            
            if(node.right)traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        console.log(result);
        return result
    }
}
module.exports = BinaryTree;