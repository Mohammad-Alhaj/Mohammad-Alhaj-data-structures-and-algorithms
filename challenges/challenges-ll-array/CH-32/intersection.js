


class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}



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

function treeIntersection(tree_1, tree_2) {
    let results = [];
    let array_1 = tree_1.preOrder();
    let array_2 = tree_2.preOrder();

    for (let i = 0; i < array_1.length; i++) {
        if (array_2.includes(array_1[i])) {
            results.push(array_2[i]);
        }
    }
    return results;
}


module.exports = {treeIntersection,BinaryTree,Node}