'use strict'
  
     
    class BinaryTree{
        constructor(root = null){
            this.root = root;
        }
    
    findMaximum(){
    let max = this.root
       let find= function (node){
            if(node.value > max.value){
                max = node;
            }
            if(node.left){
                if(node.left.value > max.value){
                    max = node.left;
                    find(node.left)
                }
            }
           if(node.right){
            if(node.right.value > max.value){
                max = node.right;
                find(node.right)
            }
           }
            
        }
        find(this.root)
        return max.value

    }
}
module.exports = BinaryTree;

     