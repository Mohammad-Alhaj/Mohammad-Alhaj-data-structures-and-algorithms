'use strict';

class BinaryTree{
    constructor(root = null){
        this.root = root
    }
    preOrder(){
        let result = [];
        function traverse(node){
            result.push(node.value)
            if(node.left) traverse(node.left)

            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        console.log(result);
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
    }
    pastOrder(){
        let result = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            
            if(node.right)traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        console.log(result);
    }
}
module.exports = BinaryTree;